import { View, Text } from "react-native";
import React from "react";

// Packages
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 32 : 30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name="bookmark"
              size={focused ? 28 : 26}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
