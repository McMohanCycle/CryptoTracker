import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { useWatchlist } from "../../contexts/WatchlistContext";
import CoinItem from "../../components/CoinItem";
import { getWatchlistedCoins } from "../../services/request";
import { FontAwesome } from "@expo/vector-icons";

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  console.log(watchlistCoinIds.length);

  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWatchlistedCoins = async (pageNumber) => {
    if (isLoading) return;
    setIsLoading(true);
    const transformedCoinIds = watchlistCoinIds.join("%2C");
    if (
      watchlistCoinIds.length > 0 &&
      watchlistCoinIds.length != coins.length
    ) {
      const fetchedWatchlistedCoins = await getWatchlistedCoins(
        pageNumber,
        transformedCoinIds
      );
      setCoins((existingCoins) => [
        ...existingCoins,
        ...fetchedWatchlistedCoins,
      ]);
    }
    setIsLoading(false);
  };

  const refetchWatchlistedCoins = async (pageNumber) => {
    if (isLoading) return;
    setIsLoading(true);
    const transformedCoinIds = watchlistCoinIds.join("%2C");
    if (watchlistCoinIds.length != coins.length) {
      if (watchlistCoinIds.length <= 0) setCoins([]);
      else {
        const fetchedWatchlistedCoins = await getWatchlistedCoins(
          pageNumber,
          transformedCoinIds
        );
        setCoins(fetchedWatchlistedCoins);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWatchlistedCoins();
  }, []);

  useEffect(() => {
    refetchWatchlistedCoins();
  }, [watchlistCoinIds]);

  if (watchlistCoinIds.length == 0)
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          // padding: 25,
          justifyContent: "center",
        }}
      >
        <FontAwesome name="bookmark-o" size={128} color="white" />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: "white",
            alignSelf: "center",
            marginTop: 16,
            marginBottom: 8,
          }}
        >
          No Cryptocurrency watchlisted
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "white",
          }}
        >
          Please watchlist your favourite currencies first.
        </Text>
      </View>
    );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem data={item} />}
        onEndReached={() => fetchWatchlistedCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            tintColor="white"
            onRefresh={refetchWatchlistedCoins}
          />
        }
      />
    </View>
  );
};

export default WatchlistScreen;
