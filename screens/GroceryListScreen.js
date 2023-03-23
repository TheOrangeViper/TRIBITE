import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Food from '../components/Food'


const GroceryListScreen = () => {
  return ( 
    <View style={styles.container}>
      {/* Grocery List */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Grocery List</Text>

        <View style={styles.items}>
          {/*This is where the food items will go!*/}
          <Food text={'food 1'} />
          <Food text={'food 1'} />

        </View>
      </View>
    </View>
  )
}

export default GroceryListScreen

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'white',
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
  items: {},
})