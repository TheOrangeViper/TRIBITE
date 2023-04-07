import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Image} from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import Recipe from './Recipe';



const HomeScreen = () => {
  // const [currentRecipe, setCurrentRecipe] = React.useState({name:"HA LAMO"});

  const navigation = useNavigation()

  let db = require('../screens/Testing')

  

  const redirect = () => {
    console.log("Recipe button pressed");
    for (i = 0; i < db.recipes.length; i++){
        console.log(db.recipes[i].name, " is active? : ", db.recipes[i].isActive)
     }
    navigation.replace("Recipe")
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.header1}>Home</Text>

        <TextInput placeholder={"Search"} style={styles.searchBar}></TextInput>
        
        <Text style={styles.header2}>Recipes for You</Text>

        <View style = {styles.itemContainer}>
        {db.recipes.map((recipe)=>{
            return(<Recipe key={recipe.name} name={recipe.name} photoUrl={recipe.photoUrl}/>);
            })}
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default (HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:'20%',
    justifyContent:'center',
    // alignItems: 'center'
  }, 
  itemContainer: {
    alignItems:'center'
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
  // HELP
  tileContainer : {
    borderWidth:2,
    borderRadius:20,
    marginRight:30,
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