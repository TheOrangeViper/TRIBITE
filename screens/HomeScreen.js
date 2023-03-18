import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Image} from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import Recipe from './Recipe';


const HomeScreen = () => {
  
  const [currentRecipe, setCurrentRecipe] = React.useState({name:"HA LAMO"});

  const navigation = useNavigation()

  let testing = require('../screens/Testing')

  

  const redirect = () => {
    console.log("Recipe button pressed");
    for (i = 0; i < testing.dogWater.length; i++){
        console.log(testing.dogWater[i].name, " is active? : ", testing.dogWater[i].isActive)
     }
    navigation.replace("Recipe")
  }

  

  // CAn I use useEffect for this? It listens to see if it has been clicked, and if it has, then WHOO!
  // const handleRecipeLongPress = () => {
  //   redirect()
  // }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.header1}>Home</Text>
        <TextInput placeholder={"Search"} style={styles.searchBar}></TextInput>
        
        <Text style={styles.header2}>Meals</Text>
        <ScrollView horizontal={true} style={styles.horizontalScroll}>

          <TouchableOpacity style = {styles.tileContainer} onLongPress = { () => {testing.dogWater[0].isActive = true; console.log(testing.dogWater[0].name, " was pressed"); redirect()}} >
            <View style = {styles.imageContainer}>
              <Image source={{uri: testing.dogWater[0].photoUrl}} style={styles.image}/>
            </View>
            <Text style = {styles.othertext}> {testing.dogWater[0].name} </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.tileContainer} onLongPress = { () => {testing.dogWater[1].isActive = true; console.log(testing.dogWater[1].name, " was pressed"); redirect()}} >
            <View style = {styles.imageContainer}>
              <Image source={{uri: testing.dogWater[1].photoUrl}} style={styles.image}/>
            </View>
            <Text style = {styles.othertext}> {testing.dogWater[1].name} </Text>
          </TouchableOpacity>

          {/* <Recipe key = {testWork.name} name = {testWork.name} ingrediantCount = {testWork.ingrediantCount} image={testWork.image}/> */}

          {/* {recipes.map((recipe) => 
            //the name is the key since each recipe has a unique name 
            <Recipe key={recipe.name} name={recipe.name} ingrediantCount={recipe.ingrediantCount} image={recipe.image}/>
          )} */}

        </ScrollView>
        <Text style={styles.header2}>Snacks</Text>
        
        <ScrollView
          horizontal={true}
          style={styles.horizontalScroll}>

          {testing.dogWater.map((recipe)=>{
            return(<Recipe name={recipe.name} photoUrl={recipe.photoUrl}/>);
            }
          )}

        </ScrollView>

        {/* <Text style={styles.header2}>Drinks</Text>
        <ScrollView
          horizontal={true}
          style={styles.horizontalScroll}>

          {recipes.map((recipe) => 
            <Recipe key={recipe.name} name={recipe.name} ingrediantCount={recipe.ingrediantCount} image={recipe.image}/>
          )}

        </ScrollView> */} 
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