import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import CoinDetailsScreen from "./src/screens/CoinDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <CoinDetailsScreen />
      <StatusBar style="light" />
    </View>
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
