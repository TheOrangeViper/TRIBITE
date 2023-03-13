import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SavedScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.header1}>Saved</Text>
    </KeyboardAvoidingView>
  )
}

export default SavedScreen

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