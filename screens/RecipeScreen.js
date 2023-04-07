import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'



let db = require('../screens/Testing')

let currentRecipe

const RecipeScreen = () => {
    // const [currentRecipe, setCurrentRecipe] = useState({});

    for (i = 0; i < db.recipes.length; i++){
        if (db.recipes[i].isActive === true){
            currentRecipe = db.recipes[i]
        } 
    }

    const navigation = useNavigation()

    const redirect = () => {
        navigation.navigate('Tabs', {screen: 'Home'});
        for (i = 0; i < db.recipes.length; i++){
            db.recipes[i].isActive = false
        }
    }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={redirect}>
          <Text>Back to Home</Text>
        </TouchableOpacity>

      
        <ScrollView>
          <Text style = {styles.header1}>{currentRecipe.name}</Text>
          <View style={styles.imageContainer}>
            <Image source={{uri: currentRecipe.photoUrl}} style={styles.image}/>
          </View>
          <View>
            <Text>Duration : {currentRecipe.duration} minutes</Text>
            <Text>Cuisine : {currentRecipe.cuisine_type}</Text>
            <Text>Servings : {currentRecipe.servings}</Text>

            <Text>You will need:</Text>
                {currentRecipe.ingredients.map((item)=>{
                return(
                  <Text key={item.type}>{item.quantity} {item.type}</Text>);
                })}
                <Text>Instructions</Text>
            {currentRecipe.instructions.map((step)=>{
            return(
              <Text key={step} style={styles.text}>
                {step}
              </Text>);
            })}
        
      </View>

      
      </ScrollView>
      
      
    </View>
    </SafeAreaView>
  )
}

export default RecipeScreen

const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginTop:'10%',
        marginBottom: '20%',
        marginHorizontal:'10%',
      },
      header1: {
        fontSize:30,
        fontWeight: 'bold',
        paddingVertical: 10,
      },
      imageContainer: {
        padding:5,
        height:300
      },
      image:{
        padding: 5,
        width:'100%',
        height:'100%',
        objectFit: 'cover',
        borderRadius:20,
      },
      text:{
        marginBottom:30,
      }
})