import { KeyboardAvoidingView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'

const SettingScreen = () => {

    const navigation = useNavigation()
    const changePassword = () => {
        auth
            .sendPasswordResetEmail(auth.currentUser?.email)
            .then(() => {
                alert("Password reset sent to your email")
            })
            .catch(error => alert(error.message))
    }
    const returnHome = () => {
        navigation.replace("Home")
    }
    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }

  return (
    <KeyboardAvoidingView style={styles.container}>
        {/* need this until I get nav bar working */}
        <View>
            <TouchableOpacity
                onPress = {returnHome}>
                <Ionicons name="home" size={32} color="#041e42" />
            </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.header1}>Settings</Text>
        </View>

        <View style={styles.buttonList}>
            <TouchableOpacity
                style={styles.button}
                onPress = {changePassword}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress = {handleSignOut}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:'20%',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal:'10%',
      },
    header1: {
        fontSize:50,
        fontWeight: 'bold',
    },
    buttonList:{
        marginTop:40,

    },
    button: {
        borderWidth:1,
        borderRadius:10,
        padding:15,
        marginVertical:5,
    },
    buttonText:{
        fontSize: 16,
    }
})