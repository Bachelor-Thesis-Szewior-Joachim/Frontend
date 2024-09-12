import React from "react";
import "./marketsComponent.css";

const MarketsComponent = () => {
  const marketData = [
    {
      exchange: "Binance",
      pair: "BTC/USDT",
      price: "$57,806.91",
      volume: "1,730,186,443",
      updated: "2 hours ago",
    },
    {
      exchange: "Coinbase",
      pair: "BTC/USD",
      price: "$57,799.04",
      volume: "624,244,920",
      updated: "2 hours ago",
    },
    {
      exchange: "OKX",
      pair: "BTC/USDT",
      price: "$57,812.11",
      volume: "482,448,131",
      updated: "2 hours ago",
    },
    {
      exchange: "Kraken",
      pair: "XBT/USD",
      price: "$57,805.00",
      volume: "94,047,703",
      updated: "2 hours ago",
    },
    {
      exchange: "Gate.io",
      pair: "BTC/USDT",
      price: "$57,809.21",
      volume: "259,350,388",
      updated: "2 hours ago",
    },
  ];

  return (
    <div className="markets-container">
      <h2>Bitcoin Markets</h2>
      <table className="market-table">
        <thead>
          <tr>
            <th>Exchange</th>
            <th>Pair</th>
            <th>Price</th>
            <th>Volume (24h)</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((market, index) => (
            <tr key={index}>
              <td>{market.exchange}</td>
              <td>{market.pair}</td>
              <td>{market.price}</td>
              <td>{market.volume}</td>
              <td>{market.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketsComponent;
