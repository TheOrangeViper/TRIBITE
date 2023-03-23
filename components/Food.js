import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Food = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
              <TouchableOpacity style={styles.square}></TouchableOpacity>
              <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    item: {
        backgroundColor: '#FFFFFF',
        padding: 15, 
        borderRadius:10,
    },
    itemLeft: {},
    square: {},
    itemText: {},
})

export default Food;
