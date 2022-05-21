import { FlatList} from 'react-native'
import React from 'react';

import CoinItem from '../../components/CoinItem';

import cryptocurrencies from '../../../assets/data/cryptocurruncies.json'

const HomeScreen = () => {
  return (
    <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => (
          <CoinItem
            name={item.name}
            symbol={item.symbol}
            icon={item.image}
            currentPrice={item.current_price}
            rank={item.market_cap_rank}
            priceChangePercent={item.market_cap_change_percentage_24h}
            marketCap={item.market_cap}
          />
        )}
      />
  )
}

export default HomeScreen