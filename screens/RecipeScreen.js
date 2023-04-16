import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { skipPartiallyEmittedExpressions } from "typescript";

let db = require("../screens/Testing");

let currentRecipe;

const RecipeScreen = () => {
  for (i = 0; i < db.recipes.length; i++) {
    if (db.recipes[i].isActive === true) {
      currentRecipe = db.recipes[i];
    }
  }

  const navigation = useNavigation();

  const redirect = () => {
    navigation.navigate("Tabs", { screen: "Home" });
    for (i = 0; i < db.recipes.length; i++) {
      db.recipes[i].isActive = false;
    }
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={redirect}>
        <View style={styles.backArrow}>
          <Text style={styles.backArrowText}>Click to go back</Text>
        </View>
      </TouchableOpacity>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: currentRecipe.photoUrl }}
            style={styles.image}
          />
        </View>

        <Text style={styles.itemText}> {currentRecipe.name} </Text>

        <View style={styles.textContainer}>
          <View style={styles.textContainerTop}>
            <Text style={styles.textTop}>
              Duration : {currentRecipe.duration} minutes
            </Text>
            <Text style={styles.textTop}>
              Cuisine : {currentRecipe.cuisine_type}
            </Text>
            <Text style={styles.textTop}>
              Servings : {currentRecipe.servings}
            </Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.textContainerBelow}>
            <Text>You will need:</Text>
            {currentRecipe.ingredients.map((item) => {
              return (
                <Text key={item.type}>
                  {item.quantity} {item.type}
                </Text>
              );
            })}
            <Text>{"\n"}Instructions</Text>
            {currentRecipe.instructions.map((step) => {
              return (
                <Text key={step} style={styles.text}>
                  {step}
                </Text>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: "10%",
    marginHorizontal: "10%",
  },
  header1: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  imageContainer: {
    marginTop: 15,
    padding: 5,
    height: 300,
  },
  itemText: {
    height: 70,
    width: "100%",
    marginTop: 10,
    padding: 8,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    backgroundColor: "#041E42",
    borderRadius: 20,
  },
  image: {
    padding: 5,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },
  text: {
    marginBottom: 30,
  },
  line: {
    width: "100%",
    height: 10,
    backgroundColor: "#041E42",
  },
  textContainer: {},
  textContainerTop: {
    marginTop: 15,
    marginBottom: 15,
  },
  textContainerBelow: {
    marginTop: 15,
    marginBottom: 15,
  },
  textTop: {
    fontWeight: "bold",
    fontSize: 18,
  },
  textBottom: {},
  backArrow: {
    position: "relative",
    top: 1,
    left: 1,
    height: 60,
    width: "100%",
    backgroundColor: "#FF4141",
    justifyContent: "center",
    alignItems: "center",
  },
  backArrowText: {
    fontSize: 20,
    color: "white",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
