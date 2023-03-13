import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GroceryListScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.header1}>Grocery List</Text>
    </KeyboardAvoidingView>
  )
}

export default GroceryListScreen

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