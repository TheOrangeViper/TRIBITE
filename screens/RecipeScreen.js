import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



let testing = require('../screens/Testing')

let currentRecipe

const RecipeScreen = () => {
    for (i = 0; i < testing.dogWater.length; i++){
        if (testing.dogWater[i].isActive === true){
            currentRecipe = testing.dogWater[i]
        } 
    }

    const navigation = useNavigation()

    const redirect = () => {
        navigation.navigate('Tabs', {screen: 'Home'});
        for (i = 0; i < testing.dogWater.length; i++){
            testing.dogWater[i].isActive = false
        }
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={redirect}>
        <Text>Back to Home</Text>
      </TouchableOpacity>

      <Text style = {styles.header1}>{currentRecipe.name}</Text>

      {/* <Text>These be your ingredients : </Text> */}
      <View style={styles.imageContainer}>
        <Image source={{uri: currentRecipe.photoUrl}} style={styles.image}/>
      </View>
      <View>
        <Text>Duration : {currentRecipe.duration} minutes</Text>
        <Text>Cuisine : {currentRecipe.cuisine_type}</Text>
        <Text>Servings : {currentRecipe.servings}</Text>
        <Text>You will need:</Text>
        
      </View>
      
      
    </View>
  )
}

export default RecipeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:'20%',
        marginHorizontal:'10%',
      },
      header1: {
        fontSize:30,
        fontWeight: 'bold',
        paddingVertical: 10,
      },
      imageContainer: {
        padding:5,
        height:'30%'
      },
      image:{
        padding: 5,
        width:'100%',
        height:'100%',
        objectFit: 'cover',
        borderRadius:20,
      },
})