import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

let testing = require('../screens/Testing')

const Recipe = (props) => {

  const {name, photoUrl, self} = props;
  const navigation = useNavigation()

  const redirect = () => {
    for (i = 0; i < testing.recipes.length; i++){
      if (testing.recipes[i].name === name){
          testing.recipes[i].isActive = true
      }
    }
    navigation.replace("Recipe")
  }


  return(
    <TouchableOpacity key = {name} style = {styles.tileContainer} onLongPress = { () => {console.log(name, " was pressed"); redirect()}} >
      <View style = {styles.imageContainer}>
        <Image source={{uri: photoUrl}} style={styles.image}/>
      </View>
      <Text style = {styles.othertext}> {name} </Text>
    </TouchableOpacity>);
};

export default Recipe

const styles = StyleSheet.create({
    tileContainer : {
        borderWidth:2,
        borderRadius:20,
        // marginRight:30,
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