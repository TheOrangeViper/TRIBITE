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
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const onSendPressed = () => {
    navigation.navigate("NewPassword");
  };
  const onSignInPressed = () => {
    navigation.navigate("Login");
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text stlye={styles.title}>
        To reset your password type in your email
      </Text>
      <View styles={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onSendPressed} style={styles.button}>
          <Text style={styles.buttonText}>Send a confirmation code</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSignInPressed} style={styles.button}>
          <Text style={styles.buttonText}>Back to sign in</Text>
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

export default ForgotPasswordScreen;
