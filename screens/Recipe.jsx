import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import {getDatabase, ref, set, onValue} from "firebase/database";
import { auth } from '../firebase';
import Ionicons from "@expo/vector-icons/Ionicons";


let testing = require('../screens/Testing')
let savedRecipes = []
const user = auth.currentUser;
let backcolour = ""
let iconName = ""

const Recipe = (props) => {
  const {name, photoUrl, self} = props;
  
  const navigation = useNavigation()
  const [isSaved, setIsSaved] = useState(savedRecipes.indexOf(name)>-1)

  let saveState = ""
  
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log("uid " + user.uid)
        
        const savedRef = ref(getDatabase(), 'users/' + user.uid + '/savedRecipes');
        onValue(savedRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            
            savedRecipes = snapshot.val();    
            let index = savedRecipes.indexOf(name)
            if (index > -1) { 
              // is in saved recipes
              setIsSaved(true)
            }
            else{ 
              // is not in saved recipes
              setIsSaved(false)
            }
          });
        }, {onlyOnce : true}
        );
      }
    });
    return unsubscribe;
  }, []);

  function updateSavedStatus() {
    let index = savedRecipes.indexOf(name)
    const savedRef = ref(getDatabase(), 'users/' + user.uid + '/savedRecipes');
    onValue(savedRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        savedRecipes = snapshot.val();        
        if (index > -1) { // is in saved recipes
          setIsSaved(true)
        }
        else{ // is not in saved recipes
          setIsSaved(false)
        }
      });
    }, {onlyOnce : true}
    );
  }

  if(isSaved){
    backcolour='yellow'
    saveState = "Saved"
    iconName='bookmark'
  }
  else{
    backcolour='white'
    saveState = "Not Saved"
    iconName='bookmark-outline'
  }
    
  

  const redirect = () => {
    for (i = 0; i < testing.recipes.length; i++){
      if (testing.recipes[i].name === name){
          testing.recipes[i].isActive = true
      }
    }
    navigation.replace("Recipe")
  }

  const testButton = () => {
    console.log(savedRecipes)
    updateSavedStatus()
  }  

   const saveToDatabase = () => {    
      if (isSaved) {
        // recipe in saved; want to unsave        
        savedRecipes.splice(savedRecipes.indexOf(name),1)
        setIsSaved(false)
      }
      else{
        // recipe is unsaved; want to save
        savedRecipes.push(name)        
        setIsSaved(true)
      }
    set(ref(getDatabase(), 'users/' + auth.currentUser.uid), {
      email : auth.currentUser.email,
      savedRecipes : savedRecipes
    })
  }
  
  

  return(
    <TouchableOpacity key = {name} style = {styles.tileContainer} onLongPress = { () => {console.log(name, " was pressed"); redirect()}} >
      <View style = {styles.imageContainer}>
        <Image source={{uri: photoUrl}} style={styles.image}/>
        <TouchableOpacity style = {{height:75, width:75, position:'absolute', alignSelf: 'flex-end'}} onPress={() => saveToDatabase()}>
          <Ionicons name={iconName} size={60} color={backcolour}/>
        </TouchableOpacity>
      </View>
      <Text style = {styles.othertext}> {name} </Text>
    </TouchableOpacity>);
};

export default Recipe

const styles = StyleSheet.create({
    tileContainer : {
        borderWidth:2,
        borderRadius:20,
        marginVertical:30,
        backgroundColor:'white',
        padding:10,
        height:450,
        width :400
    },    
    othertext:{
        width:'100%',
        marginTop:10,
        padding:5,
        alignItems:'center',
        justifyContent: 'center',
        fontWeight:'bold',
        fontSize:20,

    },
    imageContainer :{
        height: '90%',
    },
    image:{
      padding: 5,
      width:'100%',
      height :'100%',
      objectFit: 'cover',
      borderRadius:20,
    },
})