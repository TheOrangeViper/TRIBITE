import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  

  const navigation = useNavigation()
  // const handleSettings = () => {
  //   navigation.replace("Settings")
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Home</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Text>Welcome {auth.currentUser?.displayName}!</Text>
      
      {/* <TouchableOpacity
        onPress={()=>{}}
        style={styles.button}>
        <Text style = {styles.buttonText}>Settings</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default HomeScreen

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