import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  coinName: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  currentPrice: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceChangePercentContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    // width: 100,
    flex: 1,
    marginHorizontal: 12,
  },
});

export default styles;
