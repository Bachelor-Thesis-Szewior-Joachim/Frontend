import { React, useState } from "react";
import Header from "../../../header.js";
import AboutComponent from "./about/aboutComponent.js";
import ChartComponent from "./chart/chartComponent.js";
import MarketsComponent from "./markets/marketsComponent.js";
import NewsComponent from "./news/newsComponent.js";
import NftsComponent from "./nfts/nftsComponent.js";
import btcImage from "./btcImage.png";
import "./cryptocurrencyDetails.css";

const CryptocurrencyDetails = () => {
  const [activeTab, setActiveTab] = useState("overview"); // State to track the active tab

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutComponent />;
      case "chart":
        return <ChartComponent />;
      case "nfts":
        return <NftsComponent />;
      case "markets":
        return <MarketsComponent />;
      case "news":
        return <NewsComponent />;
      default:
        return <AboutComponent />;
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        {/* Left Column */}
        <div className="left-column">
          <div className="profile">
            <img src={btcImage} alt="Profile" />
            <h2>Based Zaza</h2>
            <span className="badge">Base</span>
          </div>

          <div className="stats">
            <h3 className="price">$58,130.49</h3>
            <p className="change">
              <span className="positive-change">+0.91% (1d)</span>
            </p>

            <div className="stat-section">
              <div className="stat-item">
                <span>Market Cap</span>
                <span>$1.14T</span>
              </div>

              <div className="stat-item">
                <span>Volume (24h)</span>
                <span>$32.86B</span>
              </div>

              <div className="stat-item">
                <span>Volume/Market Cap</span>
                <span>2.96%</span>
              </div>

              <div className="stat-item">
                <span>Circulating Supply</span>
                <span>19.75M BTC</span>
              </div>

              <div className="stat-item">
                <span>Total Supply</span>
                <span>19.75M BTC</span>
              </div>

              <div className="stat-item">
                <span>Max. Supply</span>
                <span>21M BTC</span>
              </div>

              <div className="stat-item">
                <span>Fully Diluted Market Cap</span>
                <span>$1.22T</span>
              </div>
            </div>

            <div className="links-section">
              <h4>Official Links</h4>
              <div className="official-links">
                <a href="#" className="link-btn">
                  Website
                </a>
                <a href="#" className="link-btn">
                  Whitepaper
                </a>
                <a href="#" className="link-btn">
                  GitHub
                </a>
              </div>
            </div>

            <div className="socials">
              <h4>Socials</h4>
              <a href="#" className="social-link">
                Reddit
              </a>
            </div>

            <div className="network-info">
              <h4>Network Information</h4>
              <a href="#" className="network-btn">
                Chain Explorers
              </a>
              <a href="#" className="network-btn">
                Supported Wallets
              </a>
            </div>
          </div>
        </div>
        <div className="right-column">
          <nav className="nav">
            <button
              className={activeTab === "about" ? "active-tab" : ""}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <button
              className={activeTab === "chart" ? "active-tab" : ""}
              onClick={() => setActiveTab("chart")}
            >
              Chart
            </button>
            <button
              className={activeTab === "nfts" ? "active-tab" : ""}
              onClick={() => setActiveTab("nfts")}
            >
              NFTs
            </button>
            <button
              className={activeTab === "markets" ? "active-tab" : ""}
              onClick={() => setActiveTab("markets")}
            >
              Markets
            </button>
            <button
              className={activeTab === "news" ? "active-tab" : ""}
              onClick={() => setActiveTab("news")}
            >
              News
            </button>
          </nav>

          <div className="content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default CryptocurrencyDetails;
