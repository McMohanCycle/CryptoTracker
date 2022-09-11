import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Packages and components
import BottomTabNavigator from "./BottomTabNavigator";

// Screens
import HomeScreen from "../screens/HomeScreen";
import CoinDetailsScreen from "../screens/CoinDetailsScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="CoinDetails" component={CoinDetailsScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
