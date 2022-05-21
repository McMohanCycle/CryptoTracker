import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centerAlignedRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 5,
  },
  coinRankContainer: {
    marginRight: 5,
    backgroundColor: "#585858",
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});

export default styles;
