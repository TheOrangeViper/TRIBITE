import { KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import {getAuth, updateProfile} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'



const Profile = () => {
    const navigation = useNavigation()
    const goToSettings = () => {
        navigation.navigate('Tabs', {screen: 'Settings'});
    }
    const [name, setDisplayName] = React.useState('')
    const [photoURL, setPhotoURL] = React.useState('')
    
    let user = auth.currentUser;
    let currentName = user.displayName

    function updateName(){
        console.log(user.displayName, " changed name to ", name)
        if (name === '') {
            console.log("NAME IS NULL!: ", name)
            currentName => setDisplayName(currentName)
            console.log("User name is ",name, " but currentName was ", currentName)
        }else{
            currentName = name
        }
        user.updateProfile({
            displayName: currentName,
            photoURL: photoURL
        }).then(function() {
            alert("Your changes have been saved!")
            let displayName = user.displayName;
            console.log('user.displayName :', displayName)
            let photoURL = user.photoURL;
        }).catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity
            onPress = {goToSettings}>
            <Text style={styles.link}>Back to Settings</Text>
        </TouchableOpacity>
        <View>
            <Text style={styles.header1}>Your Profile</Text>
        </View>
        <TouchableOpacity
            onPress = {updateName}
            style = {styles.button}>
            <Text>Save Changes</Text>
        </TouchableOpacity>
        <Text>Name:</Text>
            <TextInput
                placeholder={currentName}
                value={name}
                onChangeText={text => setDisplayName(text)}
                style={styles.input}
            />
    </KeyboardAvoidingView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex:1,
        // marginVertical:'20%',
        // marginHorizontal:'10%',
        paddingVertical:'20%',
        paddingHorizontal:'10%',
      },
    header1: {
        fontSize:50,
        fontWeight: 'bold',
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    button:{
        marginVertical:10,
        borderRadius: 20,
        borderWidth:2,
        padding:10,
        width:150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link:{
        color:'#43b09a',
        fontWeight:'bold',
        fontSize:15,
    }
})