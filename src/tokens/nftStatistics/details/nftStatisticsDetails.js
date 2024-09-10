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
            <p>
              Items: <span>5,000</span>
            </p>
            <p>
              Total Owners: <span>895</span>
            </p>
            <p>
              Total Volume: <span>1,725.08 ETH</span>
            </p>
            <p>
              Royalty: <span>--</span>
            </p>
            <p>
              Floor Price: <span>0.00006 ETH</span>
            </p>
            <p>
              24h Sales: <span>1,121</span>
            </p>
          </div>
          <div>
            <p>Price summary</p>
            <span>
              The current Based Zaza floor price is 0.00006 ETH. 1541 sales were
              made from the Based Zaza NFT collection in the past 24 hours, with
              a total trading volume of 714.90 ETH.
            </span>
            <p>Contracts</p>
            <span>
              Base:0x7fc9...8ba5ef{" "}
              <button
                className="copy-btn"
                onClick={() => navigator.clipboard.writeText("0x7fc9...8ba5ef")}
              >
                📋
              </button>
            </span>
            <p>
              Offical links: <span>none</span>
            </p>
            <p>Market list:</p>
            <ul>
              <li>Element</li>
              <li>Open Sea</li>
              <li>Magic Eden</li>
            </ul>
            <p>
              About Based Zaza NFTs <span>none</span>
            </p>
          </div>
        </div>
        <div></div>
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
