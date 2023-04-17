import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {getDatabase, ref, set, onValue} from "firebase/database";
import { auth } from '../firebase';
import Recipe from './Recipe';


let db = require('../screens/Testing')


const SavedScreen = () => {
  // uh make is so that it filters from the recipe.jsxs
  
  const [save, setSave] = useState()
  let savedRecipes = []
  let savedNames = []
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const savedRef = ref(getDatabase(), 'users/' + user.uid + '/savedRecipes');
        onValue(savedRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            savedNames = snapshot.val(); 
            for (i = 0; i < savedNames.length; i++){
              // For each saved recipe
              for (j = 0; j < db.recipes.length; j++){
                // Add the object to list
                if(db.recipes[j].name === savedNames[i]){
                  // console.log(db.recipes[i].name + " is saved")
                  // A recipe is a saved recipe, add it to the list
                  if(savedRecipes.indexOf(db.recipes[j])===-1){
                    savedRecipes.push(db.recipes[j])
                  }else{
                  }
                }
              }
            }
            setSave(savedRecipes)
            // console.log(save)           
          });
        }
        // , {onlyOnce : true}
        );
        // console.log(savedRecipes[0])
      }
    });
    return unsubscribe;
  }, []);

  // console.log(save)
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Saved</Text>
      <ScrollView>
        <View style = {styles.itemContainer}>
          {save.map((recipe)=>{
              return(<Recipe key={recipe.name} name={recipe.name} photoUrl={recipe.photoUrl} recipe={recipe} screenId={"saved"}/>);
              })}
        </View>
      </ScrollView>
    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:'20%',
    marginHorizontal:'10%',
  },
  itemContainer:{
    alignItems:'center'
  },
  header1: {
    fontSize:50,
    fontWeight: 'bold',
  },
})