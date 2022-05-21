// Fundamental imports
import { View, Text, Dimensions } from "react-native";
import React from "react";

// Styles and components
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
import CoinDetailsHeader from "./components/CoinDetailsHeader";
import styles from "./styles";
// import {
//   //   ChartDot,
//   //   ChartPath,
//   ChartPathProvider,
// } from "@rainbow-me/animated-charts";

// Data
import Coin from "../../../assets/data/crypto.json";

const CoinDetailsScreen = () => {
  // console.log(ChartPathProvider);
  const {
    name,
    symbol,
    description,
    image: { large, small, thumb },
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    prices,
  } = Coin;

  //   Check if the price change is positive or negative
  let isPositive;
  if (price_change_percentage_24h > 0) {
    isPositive = true;
  } else {
    isPositive = false;
  }

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      {/* <ChartPathProvider
        data={{
          points: prices.map((price) => ({ x: price[0], y: price[1] })),
          smoothingStrategy: "bezier",
        }}
      > */}
      <CoinDetailsHeader
        symbol={symbol}
        image={small}
        market_cap_rank={market_cap_rank}
      />
      <View style={{ marginTop: 12, padding: 10 }}>
        <Text style={styles.coinName}>{name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.currentPrice}>
            {current_price.usd.toFixed(2)} US$
          </Text>
          <View
            style={[
              styles.priceChangePercentContainer,
              isPositive
                ? { backgroundColor: "#16C784" }
                : { backgroundColor: "#EA3943" },
            ]}
          >
            {isPositive ? (
              <AntDesign
                name="caretup"
                size={16}
                color="white"
                style={{ marginRight: 5 }}
              />
            ) : (
              <AntDesign
                name="caretdown"
                size={16}
                color="white"
                style={{ marginRight: 5 }}
              />
            )}
            <Text style={styles.coinName}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>
      {/* <ChartPath
          height={screenWidth / 2}
          stroke="yellow"
          width={screenWidth}
        />
        <ChartDot style={{ backgroundColor: "blue" }} />
      </ChartPathProvider> */}
    </View>
  );
};

export default CoinDetailsScreen;
