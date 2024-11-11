import { React, useState } from "react";
import Header from "../../header";
import MarketCapChart from "./components/marketCapChart.js";
import CryptoFearGreedIndexChart from "./components/cryptoFearAndGreedChart.js";
import "./globalMarket.css";

const GlobalMarket = () => {
  return (
    <div>
      <Header />
      <div className="global-market-chart-container">
        <div className="chart-row">
          <div className="chart-item">
            <MarketCapChart/>
          </div>
          <div className="chart-item">
            <CryptoFearGreedIndexChart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMarket;
