import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Recipe = (props) => {
    const {name, ingrediantCount} = props;
    return (
      <Text style = {styles.text}>
        {name} : Requires {ingrediantCount} ingrediants
      </Text>
    );
}

export default Recipe

const styles = StyleSheet.create({
    text:{
        paddingHorizontal: 100,
        paddingVertical:150,
        alignItems:'center',
        borderWidth:2,
        borderRadius:20,
        marginRight:30,
        marginVertical:30,
        backgroundColor:'white',}
})