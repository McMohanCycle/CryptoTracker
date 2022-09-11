// Fundamental imports
import {
  View,
  Text,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

// Styles and components
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
import CoinDetailsHeader from "./components/CoinDetailsHeader";
import styles from "./styles";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import { useRoute } from "@react-navigation/native";

// Data
import { getDetailedCoinData, getCoinChartData } from "../../services/request";

const CoinDetailsScreen = () => {
  // States
  const [coin, setCoin] = useState(null);
  const [coinChartData, setCoinChartData] = useState(null);
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUSDValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  const {
    params: { coinId },
  } = route;

  // Fetches coin's data from request.js
  const fetchCoinData = async () => {
    setIsLoading(true);
    const fetchedCoinData = await getDetailedCoinData(coinId);
    const fetchedCoinChartData = await getCoinChartData(coinId, 1);
    console.log(
      "fetchedCoinData.name: ",
      fetchedCoinData.symbol,
      "\n\nfetchedCoinChartData.prices: ",
      fetchedCoinChartData.prices[0]
    );
    setCoin(fetchedCoinData);
    setCoinChartData(fetchedCoinChartData);
    setUSDValue(`${fetchedCoinData.market_data.current_price.inr}`);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (isLoading || !coin || !coinChartData)
    return <ActivityIndicator size="small" />;

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
  } = coin;
  const { prices } = coinChartData;

  const convertCurrency = (value, type) => {
    switch (type) {
      case 0:
        console.log(coinId, " TextInput/Value: " + value);
        setCoinValue(value);
        setUSDValue((value * current_price.inr).toFixed(3));
        break;
      case 1:
        console.log("IN₹ TextInput/Value: " + value);
        setUSDValue(value);
        setCoinValue((value / current_price.inr).toFixed(3));
        break;
    }
  };

  //   Check if the price change is positive or negative
  let isPositive;
  if (price_change_percentage_24h > 0) {
    isPositive = true;
  } else {
    isPositive = false;
  }

  const screenWidth = Dimensions.get("window").width;

  const chartColor = current_price.inr > prices[0][1] ? "#16C784" : "#EA3943";

  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `${current_price.inr.toFixed(2)} IN₹`;
    }
    return `${parseFloat(value).toFixed(2)} IN₹`;
  };

  return (
    <View style={styles.container}>
      <ChartPathProvider
        data={{
          points: prices.map((price) => ({ x: price[0], y: price[1] })),
          smoothingStrategy: "bezier",
        }}
      >
        <CoinDetailsHeader
          coinId={coinId}
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
            <ChartYLabel format={formatCurrency} style={styles.currentPrice} />
            {/* <Text style={styles.currentPrice}>
              {current_price.usd.toFixed(2)} US$
            </Text> */}
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
        <View>
          <ChartPath
            height={screenWidth / 2}
            stroke={chartColor}
            strokeWidth={2}
            width={screenWidth}
          />
          <ChartDot
            style={{
              backgroundColor: chartColor,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <Text style={{ color: "white" }}>{symbol.toUpperCase()}</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={coinValue.toString()}
              onChangeText={(value) => convertCurrency(value, 0)}
            />
          </View>
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <Text style={{ color: "white" }}>IN₹</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={usdValue.toString()}
              onChangeText={(value) => convertCurrency(value, 1)}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailsScreen;
