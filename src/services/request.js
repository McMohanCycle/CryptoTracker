import axios from "axios";

export const getCoinList = async (pageNumber = 1) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDetailedCoinData = async (coinID) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinID}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getCoinChartData = async (coinID, days) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=inr&days=${days}&interval=hourly`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getWatchlistedCoins = async (pageNumber = 1, coinIds) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${coinIds}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
