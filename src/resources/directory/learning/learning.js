import React, { useState } from "react";
import Header from "../../../header";
import data from "./data"; // Your learning data
import "./learning.css"; // Your CSS file
import { useParams } from "react-router-dom";

const Learning = () => {
  const { type } = useParams();

  const [activeTab, setActiveTab] = useState(type); // Default active tab

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
          All
        </button>
        <button
          className={`tab-btn ${activeTab === "blockchain" ? "active" : ""}`}
          onClick={() => handleTabChange("blockchain")}
        >
          Blockchain
        </button>
        <button
          className={`tab-btn ${activeTab === "ethereum" ? "active" : ""}`}
          onClick={() => handleTabChange("ethereum")}
        >
          Ethereum
        </button>
        <button
          className={`tab-btn ${activeTab === "solana" ? "active" : ""}`}
          onClick={() => handleTabChange("solana")}
        >
          Solana
        </button>
      </div>

      {activeTab === "all" && (
        <div className="learning-container">
          <h1 className="learning-title">All learning</h1>

          <div className="learning-list">
            {data.all.map((resource, index) => (
              <div key={index} className="learning-item">
                <div className="learning-name">{resource.name}</div>
                <div className="learning-description">
                  {resource.description}
                </div>
                <div className="learning-buttons">
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learning-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "blockchain" && (
        <div className="learning-container">
          <h1 className="learning-title">Blockchain</h1>

          <div className="learning-list">
            {data.blockchain.map((resource, index) => (
              <div key={index} className="learning-item">
                <div className="learning-name">{resource.name}</div>
                <div className="learning-description">
                  {resource.description}
                </div>
                <div className="learning-buttons">
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learning-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "ethereum" && (
        <div className="learning-container">
          <h1 className="learning-title">Ethereum</h1>

          <div className="learning-list">
            {data.ethereum.map((resource, index) => (
              <div key={index} className="learning-item">
                <div className="learning-name">{resource.name}</div>
                <div className="learning-description">
                  {resource.description}
                </div>
                <div className="learning-buttons">
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learning-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === "solana" && (
        <div className="learning-container">
          <h1 className="learning-title">Solana</h1>

          <div className="learning-list">
            {data.solana.map((resource, index) => (
              <div key={index} className="learning-item">
                <div className="learning-name">{resource.name}</div>
                <div className="learning-description">
                  {resource.description}
                </div>
                <div className="learning-buttons">
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learning-button"
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

export default Learning;
