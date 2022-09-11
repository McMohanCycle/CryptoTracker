import { View, Text, Image, Pressable } from "react-native";
import React from "react";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useWatchlist } from "../../../../contexts/WatchlistContext";

const CoinDetailsHeader = (props) => {
  const { coinId, symbol, image, market_cap_rank } = props;
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchlist();
  const navigation = useNavigation();

  const checkIfCoinIsWatchlisted = () =>
    watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);

  const handleWatchlistedCoin = () => {
    if (checkIfCoinIsWatchlisted()) {
      return removeWatchlistCoinId(coinId);
    } else {
      return storeWatchlistCoinId(coinId);
    }
  };

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
      <FontAwesome
        name={checkIfCoinIsWatchlisted() ? "bookmark" : "bookmark-o"}
        size={26}
        color="white"
        onPress={handleWatchlistedCoin}
      />
    </View>
  );
};

export default CoinDetailsHeader;
