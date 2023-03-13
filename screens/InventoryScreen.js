import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const InventoryScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.header1}>Inventory</Text>
    </KeyboardAvoidingView>
  )
}

export default InventoryScreen

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