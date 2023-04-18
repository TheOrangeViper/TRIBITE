import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import PantryItem from "../components/PantryItem";
import {
  getDatabase,
  ref,
  set,
  onValue,
  get,
  child,
  update,
  remove,
} from "firebase/database";
import { auth } from "../firebase";
import { useIsFocused } from "@react-navigation/native";

const InventoryScreen = () => {
  const [pantryItemsList, setPantryItemsList] = useState([]);
  const isFocused = useIsFocused();
  const db = getDatabase();
  const user = auth.currentUser;
  useEffect(() => {
    get(child(ref(db), "/users/" + user.uid + "/pantry/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPantryItemsList(snapshot.val());
        } else {
          setPantryItemsList([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isFocused]);

  const removeItem = ({ item }) => {
    const newItemsList = pantryItemsList.filter((element) => element !== item);
    setPantryItemsList(newItemsList);
    console.log(pantryItemsList);
    const updates = {};
    updates["/users/" + user.uid + "/pantry/"] = newItemsList;
    update(ref(db), updates);
  };

  return (
    <ImageBackground
      source={require("../assets/tastywallpaperv2.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header1}>Pantry</Text>
          <View style={styles.pantryContainer}>
            {pantryItemsList.map((item) => {
              return (
                <TouchableOpacity
                  key={item}
                  onLongPress={() => removeItem({ item })}
                >
                  <PantryItem keyword={item}></PantryItem>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginBottom: "20%",
    marginHorizontal: "5%",
  },
  pantryContainer: {
    marginVertical: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  header1: {
    fontSize: 50,
    fontWeight: "bold",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
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
