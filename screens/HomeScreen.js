import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  

  const navigation = useNavigation()
  // const handleSettings = () => {
  //   navigation.replace("Settings")
  // }

  function tile(message, repeat){
    let tile = [];
    for (let i = 0; i < repeat; i++){
      tile.push(<Text style={styles.text}>{message}{i+1}</Text>);
    }
    return(
      tile
    )
  } 

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView 
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header1}>Home</Text>
        <TextInput
          placeholder={"Search"}
          style={styles.searchBar}
          >
        </TextInput>
        {/* <Text>Email: {auth.currentUser?.email}</Text>
        <Text>Welcome {auth.currentUser?.displayName}!</Text> */}

        <Text style={styles.header2}>Meals</Text>
        <ScrollView
          horizontal={true}
          style={styles.horizontalScroll}>

          {tile("Meal Placeholder", 5)}
        </ScrollView>
        <Text style={styles.header2}>Snacks</Text>
        
        <ScrollView
          horizontal={true}
          style={styles.horizontalScroll}>

          {tile("Snack Placeholder", 5)}

        </ScrollView>
        <Text style={styles.header2}>Drinks</Text>
        <ScrollView
          horizontal={true}
          style={styles.horizontalScroll}>

          {tile("Drink Placeholder", 5)}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:'20%',
  },
  scrollView:{
    // marginTop:'20%',
    // marginHorizontal:'10%',
    // marginBottom:'10%',
  },
  horizontalScroll:{
    // backgroundColor:'red',
    paddingHorizontal:'10%',
    width:'100%'
    
  },
  header1: {
    fontSize:50,
    fontWeight: 'bold',
    marginTop:'20%',
    marginHorizontal:'10%',
    marginBottom:5,
  },
  header2: {
    fontSize:25,
    fontWeight: 'bold',
    marginTop:'20%',
    marginHorizontal:'10%',
    marginBottom:5,
  },
  text:{
    paddingHorizontal: 100,
    paddingVertical:150,
    alignItems:'center',
    borderWidth:2,
    borderRadius:20,
    marginRight:30,
    marginVertical:30,
    backgroundColor:'white',
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
  searchBar:{
    marginVertical:10,
    borderWidth:2,
    borderRadius:20,
    paddingHorizontal:20,
    paddingVertical:5,
    marginHorizontal:'10%',
    // borderColor: '#d1d1d1',
  },
})