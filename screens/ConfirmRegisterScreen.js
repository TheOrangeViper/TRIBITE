import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";

const ConfirmSignUpScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  let isEmailVerified = false;

  const checkVerifcation = () => {
    isEmailVerified = user.emailVerified;
    console.log({ emailVerified: isEmailVerified });
    user.reload().then(() => {
      isEmailVerified = user.emailVerified;
      console.log({ emailVerified: isEmailVerified });
      if (isEmailVerified == false) {
        user.sendEmailVerification();
      } else {
        navigation.navigate("Home");
      }
    });
  };

  useEffect(() => {
    checkVerifcation();
  });

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.title}>Confirm Your Account</Text>
        <Text style={styles.text}>
          Please verify your account through your email!
        </Text>
        <View style={styles.buttonContainer}></View>
        <TouchableOpacity onPress={checkVerifcation} style={styles.button}>
          <Text style={styles.buttonText}>
            Press if you have confirmed already.
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    // <ScrollView showsVerticalScrollIndicator={false}>
    //   <View style={styles.root}>
    //     <Text style={styles.title}>Confirm Your Account</Text>
    //     <Text style={styles.text}>
    //       Please verify your account through your email!
    //     </Text>
    //     <CustomButton
    //       text="Press if you confirmed already."
    //       onPress={checkVerifcation}
    //     ></CustomButton>
    //   </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "60%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  button: {
    backgroundColor: "#041e42",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#041e42",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#041e42",
    fontWeight: "700",
    fontSize: 16,
  },
  imageContainer: {
    width: "50%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 10,
    padding: 10,
    width: "100%",
    height: "75%",
    objectFit: "contain",
  },
  link: {
    padding: "10%",
    color: "#041e42",
    fontWeight: "bold",
  },
});

export default ConfirmSignUpScreen;
