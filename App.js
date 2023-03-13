import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import InventoryScreen from './screens/InventoryScreen';
import GroceryListScreen from './screens/GroceryListScreen';
import SavedScreen from './screens/SavedScreen';
import Ionicons from '@expo/vector-icons/Ionicons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){ 
  return(
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          let iconColor;
          let rn = route.name;
          size = 30;

          if (rn === "Home") {
            iconName = 'home'
            iconColor = focused? '#041e42' : '#99cc33'
          } else if (rn === "Settings") {
            iconName = 'settings'
            iconColor = focused? '#041e42' : '#99cc33'
          } else if (rn === "Inventory") {
            iconName = 'cube'
            iconColor = focused? '#041e42' : '#99cc33'
          } else if (rn === "Grocery List") {
            iconName = 'cart'
            iconColor = focused? '#041e42' : '#99cc33'
          } else if (rn === "Saved") {
            iconName = 'bookmark'
            iconColor = focused? '#041e42' : '#99cc33'
          }

          return <Ionicons name = {iconName} size = {size} color={iconColor}/>
        },
      })}
    >
      <Tab.Screen 
        options={{headerShown: false}} 
        name="Home"
        component={HomeScreen}/>
      
      <Tab.Screen
        options={{headerShown: false}}
        name="Settings"
        component={SettingScreen}/>

      <Tab.Screen
        options={{headerShown: false}}
        name="Inventory"
        component={InventoryScreen}/>

      <Tab.Screen
        options={{headerShown: false}}
        name="Grocery List"
        component={GroceryListScreen}/>

      <Tab.Screen
        options={{headerShown: false}}
        name="Saved"
        component={SavedScreen}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
