import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  

  const navigation = useNavigation()
  const handleSettings = () => {
    navigation.replace("Settings")
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      
      <TouchableOpacity
        onPress={handleSettings}
        style={styles.button}>
        <Text style = {styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#041e42',
    width:'60%',
    padding: 15,
    borderRadius:10,
    alignItems:'center',
    marginTop:20,
  },
  buttonOutline:{
    backgroundColor:'white',
    marginTop:5,
    borderColor: '#041e42',
    borderWidth:2,
  },
  buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16,
  },
})