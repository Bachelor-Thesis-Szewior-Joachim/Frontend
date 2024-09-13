import { React, useState } from "react";
import Header from "../../header";
import MarketCapChart from "./components/marketCapChart.js";
import MarketCapBreakdownChart from "./components/marketCapBreakdownChart";
import VolumeChart from "./components/volumeChart";
import BitcoinDominanceChart from "./components/bitcoinDominanceChart.js";
import BitcoinOptionsVolatilityChart from "./components/bitcoinOptions.js";
import CryptoFearGreedIndexChart from "./components/cmcChart.js";
import EthereumOptionsVolatilityChart from "./components/ethereumOptionsVolatility.js";
import FiatBackedStablecoinChart from "./components/fiatBackedChart.js";
import OpenInterestChart from "./components/openInterestChart.js";
import "./globalMarket.css";

const GlobalMarket = () => {
  return (
    <div>
      <Header />
      <div className="chart-container">
        <div className="chart-row">
          <div className="chart-item">
            <MarketCapChart />
          </div>
          <div className="chart-item">
            <MarketCapBreakdownChart />
          </div>
        </div>
        <div className="chart-row">
          <div className="chart-item">
            <FiatBackedStablecoinChart />
          </div>
          <div className="chart-item">
            <VolumeChart />
          </div>
        </div>
        <div className="chart-row">
          <div className="chart-item">
            <BitcoinDominanceChart />
          </div>
          <div className="chart-item">
            <CryptoFearGreedIndexChart />
          </div>
        </div>
        <div className="chart-row">
          <div className="chart-item">
            <OpenInterestChart />
          </div>
          <div className="chart-item">
            <BitcoinOptionsVolatilityChart />
          </div>
        </div>
        <div className="chart-row">
          <div className="chart-item">
            <EthereumOptionsVolatilityChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMarket;
