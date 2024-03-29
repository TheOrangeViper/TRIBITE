import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  ImageBackground,
} from "react-native";
import Task from "../components/Task";
import {
  getDatabase,
  ref,
  set,
  push,
  update,
  child,
  get,
} from "firebase/database";
import { auth } from "../firebase";
import { useIsFocused } from "@react-navigation/native";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [pantryItems, setPantryItems] = useState([]);
  const db = getDatabase();
  const user = auth.currentUser;
  const isFocused = useIsFocused();

  useEffect(() => {
    get(child(ref(db), "/users/" + user.uid + "/groceryList/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setTaskItems(snapshot.val());
        } else {
          setTaskItems([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    get(child(ref(db), "/users/" + user.uid + "/pantry/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPantryItems(snapshot.val());
        } else {
          setPantryItems([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isFocused]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task === null) {
      setTask(null);
      return;
    }
    const newTaskItems = [...taskItems, task];
    setTaskItems(newTaskItems);
    setTask(null);
    const updates = {};
    updates["/users/" + user.uid + "/groceryList/"] = newTaskItems;
    update(ref(db), updates);
  };

  const completeTask = (index, item) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    const updates = {};
    updates["/users/" + user.uid + "/groceryList/"] = itemsCopy;
    const newPantryItems = [...pantryItems, item];
    setPantryItems(newPantryItems);
    updates["/users/" + user.uid + "/pantry/"] = newPantryItems;
    update(ref(db), updates);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/tastywallpaperv3.png")}
        style={styles.backgroundImage}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Grocery List */}
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Grocery List</Text>
            <View style={styles.items}>
              {/* This is where the food will go! */}
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index, item)}
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>

        {/* Write a food item */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Add your own items..."}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginBottom: 80,
  },
  tasksWrapper: {
    paddingTop: 70,
    marginBottom: 100,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 118,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "80%",
  },
  addWrapper: {
    width: 60,
    height: 50,
    backgroundColor: "#99CC33",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
  backgroundImage: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    opacity: 1,
  },
});
