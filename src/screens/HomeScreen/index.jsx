import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";

// Components and packages
import CoinItem from "../../components/CoinItem";

// Data
import { getCoinList } from "../../services/request";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCoins = async (pageNumber) => {
    if (isLoading) return;
    setIsLoading(true);
    const fetchedCoins = await getCoinList(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...fetchedCoins]);
    setIsLoading(false);
  };

  const refetchCoins = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const fetchedCoins = await getCoinList();
    setCoins(fetchedCoins);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem data={item} />}
      onEndReached={() => fetchCoins(coins.length / 50 + 1)}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          tintColor="white"
          onRefresh={refetchCoins}
        />
      }
    />
  );
};

export default HomeScreen;
