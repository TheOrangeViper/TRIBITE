import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const API_KEY = "Kbm2FlpVQ2drPLWP_9S0FhRIg1yrlAIVC0pg7E33prw";
const BASE_URL = "https://api.unsplash.com/search/photos";

const PantryItem = ({ keyword }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}?query=${keyword}&client_id=${API_KEY}`
        );
        const data = await response.json();
        const image = data.results[0].urls.regular;
        setImageUrl(image);
      } catch (error) {}
    };
    fetchImage();
  }, [keyword]);

  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.text}>{keyword}</Text>
      </View>
    </View>
  );
};

const windowDimensions = Dimensions.get("window");

const styles = StyleSheet.create({
  item: {
    margin: 5,
    height: windowDimensions.width / 2.4 + 10,
    width: windowDimensions.width / 2.4,
    backgroundColor: "#041E42",
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 15,
  },
  imageContainer: {
    width: "100%",
    heigth: "100%",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
  },
  image: {
    padding: 5,
    width: "90%",
    height: "80%",
    objectFit: "cover",
    borderRadius: 20,
  },
});

export default PantryItem;
