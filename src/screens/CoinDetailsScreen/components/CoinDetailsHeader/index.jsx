import { View, Text, Image } from "react-native";
import React from "react";

import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";

const CoinDetailsHeader = (props) => {
  const { symbol, image, market_cap_rank } = props;
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back" size={30} color="white" />
      <View style={styles.centerAlignedRow}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.headerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.coinRankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
            #{market_cap_rank}
          </Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color={"white"} />
    </View>
  );
};

export default CoinDetailsHeader;
