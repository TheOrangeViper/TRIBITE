import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {getDatabase, ref, set} from "firebase/database";


let testing = require('../screens/Testing')
let savedRecipes = []

const Recipe = (props) => {
  const {name, photoUrl, self} = props;
  const navigation = useNavigation()

  const redirect = () => {
    for (i = 0; i < testing.recipes.length; i++){
      if (testing.recipes[i].name === name){
          testing.recipes[i].isActive = true
      }
    }
    navigation.replace("Recipe")
    
    
  }

  const [isSaved, setIsSaved] = useState(false)

   const saveToDatabase = () => {
    // to test if you can add with button for save
    // may want to add a new value in the db for "saved = bool"
    // setSavedRecipes(savedRecipes=>savedRecipes.concat(name))
    console.log("You pressed the save button of " + name)
    
      if (isSaved) {
        // recipe in saved; want to unsave
        savedRecipes.splice(i,1)
        console.log(name + " unsaved. Saved : " + savedRecipes)
        setIsSaved(false)
      }
      else{
        // recipe is unsaved; want to save
        savedRecipes.push(name)
        console.log(name + " pressed. Saved : " + savedRecipes)
        setIsSaved(true)
      }
    

    
  }
  
  let saveState = "Not Saved"
  if(isSaved){
    backcolour='blue'
    saveState = "Saved"
  }
  else{
    backcolour='red'
    saveState = "Not Saved"
  }

  return(
    <TouchableOpacity key = {name} style = {styles.tileContainer} onLongPress = { () => {console.log(name, " was pressed"); redirect()}} >
      <View style = {styles.imageContainer}>
        <Image source={{uri: photoUrl}} style={styles.image}/>
      </View>
      <Text style = {styles.othertext}> {name} </Text>
      <TouchableOpacity style = {{backgroundColor:backcolour}} onPress={() => saveToDatabase()}>
        <Text>{saveState}</Text>
      </TouchableOpacity>
    </TouchableOpacity>);
};

export default Recipe

const styles = StyleSheet.create({
    tileContainer : {
        borderWidth:2,
        borderRadius:20,
        // marginRight:30,
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