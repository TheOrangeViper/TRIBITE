import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate("Tabs");
  };

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text>Choose your new password!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your code"
          value={code}
          onChangeText={(text) => setCode(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your new password"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onSubmitPressed} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSignInPressed}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Back to Sign in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 40,
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

export default NewPasswordScreen;
