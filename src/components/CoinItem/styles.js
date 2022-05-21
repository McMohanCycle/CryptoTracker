import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centerAlignedRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinContainer: {
    marginHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: "grey",
    marginRight: 5,
  },
  coinRankContainer: {
    marginRight: 5,
    backgroundColor: "#585858",
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  coinRank: {
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
