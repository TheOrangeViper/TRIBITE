import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



let testing = require('../screens/Testing')
let name
let ingredients

const RecipeScreen = () => {
    for (i = 0; i < testing.dogWater.length; i++){
        if (testing.dogWater[i].isActive === true){
            name = testing.dogWater[i].name
            ingredients = testing.dogWater[i].ingredients
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
      <Text style = {styles.header1}>
        {name}
        
      </Text>
      <Text>These be your ingredients : </Text>
      <TouchableOpacity onPress={redirect}>
        <Text>I am a button</Text>
      </TouchableOpacity>
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
        fontSize:50,
        fontWeight: 'bold',
      },
})