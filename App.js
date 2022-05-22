import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import CoinDetailsScreen from "./src/screens/CoinDetailsScreen";

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}
    >
      <View style={styles.container}>
        <Navigation />
        {/* <HomeScreen /> */}
        {/* <CoinDetailsScreen /> */}
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 50,
  },
  centerAlignedRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
