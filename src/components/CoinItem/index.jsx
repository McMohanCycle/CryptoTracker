import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const CoinItem = (props) => {
  const {
    name,
    symbol,
    rank,
    currentPrice,
    icon,
    priceChangePercent,
    marketCap,
  } = props;
  let isPositive;
  if (priceChangePercent > 0) {
    isPositive = true;
  } else {
    isPositive = false;
  }
  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1_000_000_000_000) {
      return `${(marketCap / 1_000_000_000_000).toFixed(2)} T`;
    } else if (marketCap > 1_000_000_000) {
      return `${(marketCap / 1_000_000_000).toFixed(2)} B`;
    } else if (marketCap > 1_000_000) {
      return `${(marketCap / 1_000_000).toFixed(2)} M`;
    } else if (marketCap > 1_000) {
      return `${(marketCap / 1_000).toFixed(2)} K`;
    } else {
      return marketCap.toFixed(2);
    }
  };
  return (
    <View style={styles.coinContainer}>
      <View style={styles.centerAlignedRow}>
        <Image
          style={{ height: 30, width: 30, marginRight: 10 }}
          source={{
            uri: icon,
          }}
        />
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.centerAlignedRow}>
            <View style={styles.coinRankContainer}>
              <Text style={styles.coinRank}>#{rank}</Text>
            </View>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
            {isPositive ? (
              <AntDesign
                name="caretup"
                size={16}
                color="#16C784"
                style={{ marginRight: 2 }}
              />
            ) : (
              <AntDesign
                name="caretdown"
                size={16}
                color="#EA3943"
                style={{ marginRight: 2 }}
              />
            )}
            <Text style={styles.subtitle}>
              {priceChangePercent.toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.title}>${currentPrice}</Text>
        <Text style={[styles.subtitle, { marginRight: 0 }]}>
          MCap {normalizeMarketCap(marketCap)}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;
