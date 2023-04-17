import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const confirmedPassword = (password, passwordRepeat) => {
    if (password == passwordRepeat) {
      return password;
    } else {
      return console.warn("Your passwords do not match");
    }
  };
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(
        email,
        confirmedPassword(password, passwordRepeat)
      )
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("ConfirmRegister");
      }
    });
    return unsubscribe;
  });

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmSignUp");
  };
  // const onSignInGooglePressed = () => {
  //   console.warn("Sign in with google pressed");
  // };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use Pressed");
  };

  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy Pressed");
  };
  return (
    <View style={styles.container} behavior="padding">
      <Text style={styles.text}>Create an account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          onChangeText={(text) => setPasswordRepeat(text)}
          style={styles.input}
          secureTextEntry
        />
        <Text style={{ fontSize: 15, flexWrap: "wrap" }}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#041e42",
    fontWeight: "bold",
    fontSize: 20,
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

export default SignUpScreen;
