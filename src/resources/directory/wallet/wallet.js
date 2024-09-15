import React, { useState } from "react";
import Header from "../../../header";
import wallets from "./data";
import "./wallet.css";
import { useParams } from "react-router-dom";

const Wallet = () => {
  const { wallet } = useParams();

  const [activeTab, setActiveTab] = useState(wallet); // Default active tab

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
          All Wallets
        </button>
        <button
          className={`tab-btn ${activeTab === "gui" ? "active" : ""}`}
          onClick={() => handleTabChange("gui")}
        >
          GUI Wallet
        </button>
        <button
          className={`tab-btn ${activeTab === "hardaware" ? "active" : ""}`}
          onClick={() => handleTabChange("hardaware")}
        >
          Hardware Wallet
        </button>
      </div>

      {activeTab === "all" && (
        <div className="wallet-container">
          <h1 className="wallet-title">GUI wallet</h1>

          <div className="wallet-list">
            {wallets.all.map((wallet, index) => (
              <div key={index} className="wallet-item">
                <div className="wallet-name">{wallet.name}</div>
                <div className="wallet-description">{wallet.description}</div>
                <div className="wallet-buttons">
                  <a
                    href={wallet.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wallet-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "gui" && (
        <div className="wallet-container">
          <h1 className="wallet-title">GUI wallet</h1>

          <div className="wallet-list">
            {wallets.gui.map((wallet, index) => (
              <div key={index} className="wallet-item">
                <div className="wallet-name">{wallet.name}</div>
                <div className="wallet-description">{wallet.description}</div>
                <div className="wallet-buttons">
                  <a
                    href={wallet.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wallet-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "hardaware" && (
        <div className="wallet-container">
          <h1 className="wallet-title">DEX wallet</h1>

          <div className="wallet-list">
            {wallets.hardware.map((wallet, index) => (
              <div key={index} className="wallet-item">
                <div className="wallet-name">{wallet.name}</div>
                <div className="wallet-description">{wallet.description}</div>
                <div className="wallet-buttons">
                  <a
                    href={wallet.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wallet-button"
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

export default Wallet;
