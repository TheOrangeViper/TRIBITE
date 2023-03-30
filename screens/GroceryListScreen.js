import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Food from '../components/Food'


const GroceryListScreen = () => {
  return ( 
    <View style={styles.container}>

      {/* Grocery List */}
      <View style={styles.foodWrapper}>
        <Text style={styles.sectionTitle}>Grocery List</Text>

        <View style={styles.items}>
          {/*This is where the food items will go!*/}
          <Food text={'Apple'} />
          <Food text={'Banana'} />
        </View>

      </View>


      {/* Write a food */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeFoodWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write food iteams'}/>

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default GroceryListScreen
const styles = StyleSheet.create({
  container: {
    flex:1, 
    marginTop:'20%',
    marginHorizontal:'10%'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 50,
    fontWeight:'bold'
  },
  items: {
    marginTop: 30, 
  },
  writeFoodWrapper: {
    position: 'absolute',
    bottom: 60,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    background: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C',
    borderWidth: 1, 
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C',
    borderWidth: 1, 

  },
  addText: {},
})