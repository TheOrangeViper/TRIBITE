import { Image, KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import {getAuth, updateProfile} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';



const Profile = () => {
    const navigation = useNavigation()
    const goToSettings = () => {
        navigation.navigate('Tabs', {screen: 'Settings'});
    }
    const [name, setDisplayName] = React.useState('')
    const [photoURL, setPhotoURL] = React.useState('')
    
    let user = auth.currentUser;
    let currentName = user.displayName
    let currentPfp

    

    function updateUserProfile(){
        console.log(user.displayName, " changed name to ", name)
        
        if (name === '') {
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
        <TouchableOpacity onPress = {goToSettings}>
            <Text style={styles.link}>Back to Settings</Text>
        </TouchableOpacity>
        <View>
            <Text style={styles.header1}>Edit Your Profile</Text>
        </View>
        <Text style={styles.header2}>Profile Picture:</Text>
        <View style={styles.horizontalContainer}>  
            <View style={styles.imageContainer}>
                <Image source={currentPfp} style={styles.image}/>
                
            </View>
            <View style = {styles.iconContainer}>
                <Text>Upload Profile Picture</Text>
                <TouchableOpacity>
                    
                    <Ionicons name = {"add-circle"} size = {100} color={'red'}/>
                </TouchableOpacity>
            </View>
            
        </View>
            <Text style={styles.header2}>Name:</Text>
                <TextInput
                    placeholder={currentName}
                    value={name}
                    onChangeText={text => setDisplayName(text)}
                    style={styles.input}
                />
        <TouchableOpacity
            onPress = {updateUserProfile}
            style = {styles.button}>
            <Text>Save Changes</Text>
        </TouchableOpacity>
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
    horizontalContainer:{
        // flex:1,
        flexDirection:'row',
        paddingHorizontal:20,
        height:'20%',
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'yellow',
      },
    header1: {
        fontSize:50,
        fontWeight: 'bold',
    },
    header2: {
        fontSize:25,
        fontWeight: 'bold',
        marginTop:'5%',
        // marginHorizontal:'10%',
        marginBottom:5,
      },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
        height:40,
    },
    button:{
        marginVertical:20,
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
    },
    imageContainer:{
        width:'50%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:2,
        borderRadius:20,
        backgroundColor:'white',
    },
    image:{
        paddingRight: 10,
        width:200,
        height: 200,
        objectFit: 'contain',
    },
    iconContainer:{
        width:'50%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:2,
        // borderRadius:20,
        // backgroundColor:'white',
    },
})