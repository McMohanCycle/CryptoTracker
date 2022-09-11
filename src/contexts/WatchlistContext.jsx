import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

const WatchlistProvider = ({ children }) => {
  // State to store Cryptocurrency IDs in the watch list.
  const [watchlistCoinIds, setWatchlistCoinIds] = useState([]);

  // Functions
  const getWatchlistData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@watchlist_coins");
      setWatchlistCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (error) {
      console.log(
        "WatchlistContext/WatchlistProvider/getWatchlistData/error: ",
        error
      );
    }
  };

  useEffect(() => {
    getWatchlistData();
  }, []);

  const storeWatchlistCoinId = async (coinId) => {
    try {
      const newWatchlist = [...watchlistCoinIds, coinId];
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem("@watchlist_coins", jsonValue);
      setWatchlistCoinIds(newWatchlist);
    } catch (error) {
      console.log(
        "WatchlistContext/WatchlistProvider/storeWatchlistCoinId/error: ",
        error
      );
    }
  };

  const removeWatchlistCoinId = async (coinId) => {
    try {
      const newWatchlist = watchlistCoinIds.filter(
        (coinIdValue) => coinIdValue !== coinId
      );
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem("@watchlist_coins", jsonValue);
      setWatchlistCoinIds(newWatchlist);
    } catch (error) {
      console.log(
        "WatchlistContext/WatchlistProvider/removeWatchlistCoinId/error: ",
        error
      );
    }
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;
