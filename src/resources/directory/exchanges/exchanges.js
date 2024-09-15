import React, { useState } from "react";
import Header from "../../../header";
import exchanges from "./data"; // Your exchange data
import "./exchanges.css"; // Your CSS file
import { useParams } from "react-router-dom";

const ExchangesList = () => {
  const { exchange } = useParams();

  const [activeTab, setActiveTab] = useState(exchange); // Default active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />

      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => handleTabChange("all")}
        >
          All Exchanges
        </button>
        <button
          className={`tab-btn ${activeTab === "crypto" ? "active" : ""}`}
          onClick={() => handleTabChange("crypto")}
        >
          Crypto Exchanges
        </button>
        <button
          className={`tab-btn ${activeTab === "dex" ? "active" : ""}`}
          onClick={() => handleTabChange("dex")}
        >
          DEX
        </button>
        <button
          className={`tab-btn ${activeTab === "fiat" ? "active" : ""}`}
          onClick={() => handleTabChange("fiat")}
        >
          Fiat Exchanges
        </button>
      </div>

      {activeTab === "all" && (
        <div className="exchanges-container">
          <h1 className="exchanges-title">All Exchanges</h1>

          <div className="exchanges-list">
            {exchanges.all.map((exchange, index) => (
              <div key={index} className="exchange-item">
                <div className="exchange-name">{exchange.name}</div>
                <div className="exchange-description">
                  {exchange.description}
                </div>
                <div className="exchange-buttons">
                  <a
                    href={exchange.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exchange-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "crypto" && (
        <div className="exchanges-container">
          <h1 className="exchanges-title">Crypto Exchanges</h1>

          <div className="exchanges-list">
            {exchanges.crypto.map((exchange, index) => (
              <div key={index} className="exchange-item">
                <div className="exchange-name">{exchange.name}</div>
                <div className="exchange-description">
                  {exchange.description}
                </div>
                <div className="exchange-buttons">
                  <a
                    href={exchange.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exchange-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "dex" && (
        <div className="exchanges-container">
          <h1 className="exchanges-title">DEX Exchanges</h1>

          <div className="exchanges-list">
            {exchanges.dex.map((exchange, index) => (
              <div key={index} className="exchange-item">
                <div className="exchange-name">{exchange.name}</div>
                <div className="exchange-description">
                  {exchange.description}
                </div>
                <div className="exchange-buttons">
                  <a
                    href={exchange.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exchange-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "fiat" && (
        <div className="exchanges-container">
          <h1 className="exchanges-title">Fiat Exchanges</h1>

          <div className="exchanges-list">
            {exchanges.fiat.map((exchange, index) => (
              <div key={index} className="exchange-item">
                <div className="exchange-name">{exchange.name}</div>
                <div className="exchange-description">
                  {exchange.description}
                </div>
                <div className="exchange-buttons">
                  <a
                    href={exchange.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exchange-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangesList;
