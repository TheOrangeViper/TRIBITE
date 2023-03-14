import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recipe from './Recipe';

const HomeScreen = () => {
  

  // const navigation = useNavigation()
  // const handleSettings = () => {
  //   navigation.replace("Settings")
  // }

  const [recipes, setRecipe] = React.useState(
    [
      {name: "Pizza", ingrediantCount: '10',},
      {name: "Cereal", ingrediantCount: '2',},
      {name: "Soup", ingrediantCount: '4',},
      {name: "Salad", ingrediantCount: '5',},
      {name: "Dust", ingrediantCount: '1',},
    ]
  )

  return (
    <SafeAreaView
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header1}>
          Home
        </Text>

        <TextInput
          placeholder={"Search"}
          style={styles.searchBar}
        >
        </TextInput>

        <Text style={styles.header2}>
          Meals
        </Text>

        <ScrollView
          horizontal={true}
          style={styles.horizontalScroll}>

          {recipes.map((recipe) => 
            //the name is the key since each recipe has a unique name 
            <Recipe key={recipe.name} name={recipe.name} ingrediantCount={recipe.ingrediantCount}/>
          )}

        </ScrollView>
        <Text style={styles.header2}>Snacks</Text>
        
        <ScrollView
          horizontal={true}
          style={styles.horizontalScroll}>

          {recipes.map((recipe) => 
            <Recipe key={recipe.name} name={recipe.name} ingrediantCount={recipe.ingrediantCount}/>
          )}

        </ScrollView>
        <Text style={styles.header2}>Drinks</Text>
        <ScrollView
          horizontal={true}
          style={styles.horizontalScroll}>

          {recipes.map((recipe) => 
            <Recipe key={recipe.name} name={recipe.name} ingrediantCount={recipe.ingrediantCount}/>
          )}

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
    justifyContent:'center',
  },
  scrollView:{
    // marginTop:'20%',
    // marginRight:'10%',
    // marginBottom:'10%',
  },
  horizontalScroll:{
    paddingHorizontal:'10%',
    width:'100%',    
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