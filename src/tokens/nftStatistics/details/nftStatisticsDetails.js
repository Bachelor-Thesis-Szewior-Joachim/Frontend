import React, { useState } from "react";
import Overview from "./overview/overview.js";
import Items from "./items/items.js";
import Activity from "./activity/activity.js";
import "./nftStatisticsDetails.css";
import Header from "../../../header.js";
import nftImage from "./exampleNft.webp";

const NFTStatisticsDetails = () => {
  const [activeTab, setActiveTab] = useState("overview"); // State to track the active tab

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "items":
        return <Items />;
      case "activity":
        return <Activity />;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        {/* Left Column */}
        <div className="left-column">
          <div className="profile">
            <img src={nftImage} alt="Profile" />
            <h2>Based Zaza</h2>
            <span className="badge">Base</span>
          </div>

          <div className="stats">
            <div className="stat-item">
              Items: <span>5,000</span>
            </div>
            <div className="stat-item">
              Total Owners: <span>895</span>
            </div>
            <div className="stat-item">
              Total Volume: <span>1,725.08 ETH</span>
            </div>
            <div className="stat-item">
              Royalty: <span>--</span>
            </div>
            <div className="stat-item">
              Floor Price: <span>0.00006 ETH</span>
            </div>
            <div className="stat-item">
              24h Sales: <span>1,121</span>
            </div>
          </div>

          <div className="price-summary">
            <h4>Price Summary</h4>
            <p>
              The current Based Zaza floor price is <span>0.00006 ETH</span>.
              1541 sales were made from the Based Zaza NFT collection in the
              past 24 hours, with a total trading volume of{" "}
              <span>714.90 ETH</span>.
            </p>
          </div>

          <div className="contracts">
            <h4>Contracts</h4>
            <p>
              Base: 0x7fc9...8ba5ef{" "}
              <button
                className="copy-btn"
                onClick={() => navigator.clipboard.writeText("0x7fc9...8ba5ef")}
              >
                📋
              </button>
            </p>
          </div>

          <div className="official-links">
            <h4>Official Links</h4>
            <span>none</span>
          </div>

          <div className="market-list">
            <h4>Market List</h4>
            <ul>
              <li>Element</li>
              <li>OpenSea</li>
              <li>Magic Eden</li>
            </ul>
          </div>

          <div className="about">
            <h4>About Based Zaza NFTs</h4>
            <span>none</span>
          </div>
        </div>

        <div className="right-column">
          <nav className="nav">
            <button
              className={activeTab === "overview" ? "active-tab" : ""}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={activeTab === "items" ? "active-tab" : ""}
              onClick={() => setActiveTab("items")}
            >
              Items
            </button>
            <button
              className={activeTab === "activity" ? "active-tab" : ""}
              onClick={() => setActiveTab("activity")}
            >
              Activity
            </button>
          </nav>

          <div className="content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default NFTStatisticsDetails;
