import { View, Text, Image, Pressable } from "react-native";
import React from "react";

import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinDetailsHeader = (props) => {
  const { symbol, image, market_cap_rank } = props;

  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={30} color="white" />
      </Pressable>
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
