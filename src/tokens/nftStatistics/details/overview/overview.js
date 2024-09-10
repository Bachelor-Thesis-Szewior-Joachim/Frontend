// Overview.js
import React, { useEffect, useState } from "react";
import "../nftStatisticsDetails.css";
import { createNftChart } from "../script";
import "./overview.css";

const Overview = () => {
  const [activeMarketTab, setMarketActiveTab] = useState("24h");
  const [activeActivityTab, setActivityActiveTab] = useState("24h");

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Address copied to clipboard: " + text);
  }

  const getActivityData = () => {
    return activityData[activeActivityTab];
  };

  const getMarketData = () => {
    console.log(marketData[activeMarketTab]);
    return marketData[activeMarketTab];
  };

  const activityData = {
    "24h": [
      {
        id: "#3155",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0xa338...d297a0",
        to: "0x1abf...556733",
        price: "0.5 ETH",
        gas: "0.052447 ETH",
        date: "1h ago",
      },
      {
        id: "#3145",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0x1abf...556733",
        to: "0x22a4...4d8f29",
        price: "0.5 ETH",
        gas: "0.052845 ETH",
        date: "1h ago",
      },
      {
        id: "#3154",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0xa338...d297a0",
        to: "0x1abf...556733",
        price: "0.5 ETH",
        gas: "0.052447 ETH",
        date: "1h ago",
      },
      {
        id: "#3144",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0x1abf...556733",
        to: "0x22a4...4d8f29",
        price: "0.5 ETH",
        gas: "0.052845 ETH",
        date: "1h ago",
      },
    ],
    "7d": [
      {
        id: "#3153",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0x59d7...315541",
        to: "0xf2fe...ef0844",
        price: "0.5 ETH",
        gas: "0.052736 ETH",
        date: "2d ago",
      },
      {
        id: "#3146",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0xf2fe...ef0844",
        to: "0xa884...d85da5",
        price: "0.5 ETH",
        gas: "0.052720 ETH",
        date: "3d ago",
      },
      {
        id: "#3153",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0x59d7...315541",
        to: "0xf2fe...ef0844",
        price: "0.5 ETH",
        gas: "0.052736 ETH",
        date: "2d ago",
      },
      {
        id: "#3146",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0xf2fe...ef0844",
        to: "0xa884...d85da5",
        price: "0.5 ETH",
        gas: "0.052720 ETH",
        date: "3d ago",
      },
    ],
    "30d": [
      {
        id: "#3014",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0x3923...dbb6cd",
        to: "0x82e2...2316fe",
        price: "0.5 ETH",
        gas: "0.052625 ETH",
        date: "15d ago",
      },
      {
        id: "#3141",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0xa884...d85da5",
        to: "0x3923...dbb6cd",
        price: "0.5 ETH",
        gas: "0.052633 ETH",
        date: "20d ago",
      },
      {
        id: "#3153",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0x59d7...315541",
        to: "0xf2fe...ef0844",
        price: "0.5 ETH",
        gas: "0.052736 ETH",
        date: "2d ago",
      },
      {
        id: "#3146",
        image: "placeholder.jpg",
        type: "Sale",
        from: "0xf2fe...ef0844",
        to: "0xa884...d85da5",
        price: "0.5 ETH",
        gas: "0.052720 ETH",
        date: "3d ago",
      },
    ],
  };

  const marketData = {
    "24h": [
      {
        market: "OpenSea",
        distribution: "100.00%",
        royalty: "-",
        serviceFee: "2.50%",
        floorPrice: "0.00006 ETH",
      },
      {
        market: "Element",
        distribution: "0.00%",
        royalty: "-",
        serviceFee: "-",
        floorPrice: "--",
      },
      {
        market: "MagicEden",
        distribution: "0.00%",
        royalty: "-",
        serviceFee: "2.00%",
        floorPrice: "0.00007 ETH",
      },
    ],
    "7d": [
      {
        market: "OpenSea",
        distribution: "90.00%",
        royalty: "-",
        serviceFee: "2.50%",
        floorPrice: "0.00007 ETH",
      },
      {
        market: "Element",
        distribution: "5.00%",
        royalty: "-",
        serviceFee: "-",
        floorPrice: "--",
      },
      {
        market: "MagicEden",
        distribution: "5.00%",
        royalty: "-",
        serviceFee: "2.00%",
        floorPrice: "0.00008 ETH",
      },
    ],
    "30d": [
      {
        market: "OpenSea",
        distribution: "80.00%",
        royalty: "-",
        serviceFee: "2.50%",
        floorPrice: "0.00009 ETH",
      },
      {
        market: "Element",
        distribution: "10.00%",
        royalty: "-",
        serviceFee: "-",
        floorPrice: "--",
      },
      {
        market: "MagicEden",
        distribution: "10.00%",
        royalty: "-",
        serviceFee: "2.00%",
        floorPrice: "0.00010 ETH",
      },
    ],
  };
  useEffect(() => {
    createNftChart(); // Call the function to create the chart when the component mounts
  }, []);

  return (
    <div className="overview">
      <div className="stats-summary">
        <div className="stat">
          <span className="stat-label">Items:</span>{" "}
          <span className="stat-value">5,000</span>
        </div>
        <div className="stat">
          <span className="stat-label">Floor Price:</span>{" "}
          <span className="stat-value">0.00006 ETH</span>
        </div>
        <div className="stat">
          <span className="stat-label">24h Volume:</span>{" "}
          <span className="stat-value">581.36 ETH</span>
        </div>
        <div className="stat">
          <span className="stat-label">24h Sales:</span>{" "}
          <span className="stat-value">1,121</span>
        </div>
      </div>
      <div>
        <h3>Based Zaza NFT Price & Sales</h3>
        <canvas id="nftChartCanvas"></canvas>{" "}
      </div>

      <div className="sales-container">
        <h2>Based Zaza Sales</h2>
        <div className="sales-grid">
          <div className="sale-item">
            <img src="placeholder.jpg" alt="#3155" />
            <div className="sale-details">
              <p>#3155</p>
              <p>0.5 ETH</p>
              <p>41m ago</p>
            </div>
          </div>
          <div className="sale-item">
            <img src="placeholder.jpg" alt="#3005" />
            <div className="sale-details">
              <p>#3005</p>
              <p>0.5 ETH</p>
              <p>41m ago</p>
            </div>
          </div>
          <div className="sale-item">
            <img src="placeholder.jpg" alt="#3146" />
            <div className="sale-details">
              <p>#3146</p>
              <p>0.5 ETH</p>
              <p>41m ago</p>
            </div>
          </div>
        </div>
        <button className="view-more">View More</button>
      </div>

      <div className="nft-market-container">
        <h3>NFT Market</h3>
        <div id="market-tabs" className="period-tabs">
          <button
            className={activeMarketTab === "24h" ? "active" : ""}
            onClick={() => setMarketActiveTab("24h")}
          >
            24h
          </button>
          <button
            className={activeMarketTab === "7d" ? "active" : ""}
            onClick={() => setMarketActiveTab("7d")}
          >
            7d
          </button>
          <button
            className={activeMarketTab === "30d" ? "active" : ""}
            onClick={() => setMarketActiveTab("30d")}
          >
            30d
          </button>
        </div>

        <div className="table">
          <div className="table-header">
            <div id="market-table-market">Market</div>
            <div id="market-table-distribution">Distribution</div>
            <div id="market-table-royalty">Royalty</div>
            <div id="market-table-service-fee">Service Fee</div>
            <div id="market-table-floor-price">Floor Price</div>
          </div>
          <div className="table-body">
            {getMarketData().map((marketData, index) => (
              <div
                className="table-row"
                key={`${marketData.market}-${activeMarketTab}`}
              >
                <div id="market-table-market">{marketData.market}</div>
                <div id="market-table-distribution">
                  {marketData.distribution}
                </div>
                <div id="market-table-royalty">{marketData.royalty}</div>
                <div id="market-table-service-fee">{marketData.serviceFee}</div>
                <div id="market-table-floor-price">{marketData.floorPrice}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="activity-container">
        <h3>Activity</h3>
        <div id="activity-tabs" className="period-tabs">
          <button
            className={activeActivityTab === "24h" ? "active" : ""}
            onClick={() => setActivityActiveTab("24h")}
          >
            24h
          </button>
          <button
            className={activeActivityTab === "7d" ? "active" : ""}
            onClick={() => setActivityActiveTab("7d")}
          >
            7d
          </button>
          <button
            className={activeActivityTab === "30d" ? "active" : ""}
            onClick={() => setActivityActiveTab("30d")}
          >
            30d
          </button>
        </div>

        <div className="table">
          <div className="table-header">
            <div id="activity-table-item">Item</div>
            <div id="activity-table-transaction-type">Transaction type</div>
            <div id="activity-table-from">From</div>
            <div id="activity-table-to">To</div>
            <div id="activity-table-price">Price</div>
            <div id="activity-table-gas-amount">Gas Amount</div>
            <div id="activity-table-date">Date</div>
          </div>
          <div className="table-body">
            {getActivityData().map((activityData) => (
              <div className="table-row" key={activityData.id}>
                <div id="activity-table-item">{activityData.item}</div>
                <div id="activity-table-transaction-type">
                  {activityData.type}
                </div>
                <div id="activity-table-from">
                  {activityData.from}{" "}
                  <button
                    className="copy-btn"
                    onClick={() =>
                      navigator.clipboard.writeText(activityData.from)
                    }
                  >
                    📋
                  </button>
                </div>
                <div id="activity-table-to">
                  {activityData.to}{" "}
                  <button
                    className="copy-btn"
                    onClick={() =>
                      navigator.clipboard.writeText(activityData.from)
                    }
                  >
                    📋
                  </button>
                </div>
                <div id="activity-table-price">{activityData.price}</div>
                <div id="activity-table-gas-amount">{activityData.gas}</div>
                <div id="activity-table-date">{activityData.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
