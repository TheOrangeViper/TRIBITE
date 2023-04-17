import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import Recipe from "./Recipe";
import { getDatabase, ref, set, onValue } from "firebase/database";

const HomeScreen = () => {
  const navigation = useNavigation();
  const user = auth.currentUser;
  const savedRef = ref(getDatabase(), "recipes");

  let db = require("../screens/Testing");

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/blurredtastywallpaper.png")}
        style={styles.backgroundImage}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view}>
            <Image
              style={styles.logo}
              source={require("../assets/logo7.png")}
            ></Image>
            <TextInput
              placeholder={"Search"}
              style={styles.searchBar}
            ></TextInput>
          </View>

          <View style={styles.itemContainer}>
            {db.recipes.map((recipe) => {
              return (
                <Recipe
                  key={recipe.name}
                  name={recipe.name}
                  photoUrl={recipe.photoUrl}
                  recipe={recipe}
                />
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: "20%",
    justifyContent: "center",
  },
  view: {
    alignItems: "center",
  },
  itemContainer: {
    alignItems: "center",
  },
  logo: {
    marginTop: 20,
    maxWidth: 500,
    height: 200,
    resizeMode: "contain",
  },
  header1: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: "20%",
    marginHorizontal: "10%",
    marginBottom: 5,
  },
  header2: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginHorizontal: "10%",
    marginBottom: 5,
  },
  searchBar: {
    width: "81%",
    marginVertical: 9,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: "10%",
    backgroundColor: "white",
    //shadows
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  backgroundImage: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    opacity: 1,
  },
});
