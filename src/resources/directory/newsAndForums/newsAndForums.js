import React, { useState } from "react";
import Header from "../../../header";
import data from "./data"; // Your exchange data
import "./newsAndForums.css"; // Your CSS file
import { useParams } from "react-router-dom";

const NewsAndForums = () => {
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
          All news and forums
        </button>
        <button
          className={`tab-btn ${activeTab === "news" ? "active" : ""}`}
          onClick={() => handleTabChange("news")}
        >
          Crypto News
        </button>
        <button
          className={`tab-btn ${activeTab === "forums" ? "active" : ""}`}
          onClick={() => handleTabChange("forums")}
        >
          Forums
        </button>
      </div>

      {activeTab === "all" && (
        <div className="naf-container">
          <h1 className="naf-title">All news</h1>

          <div className="naf-list">
            {data.all.map((type, index) => (
              <div key={index} className="naf-item">
                <div className="naf-name">{type.name}</div>
                <div className="naf-description">{type.description}</div>
                <div className="naf-buttons">
                  <a
                    href={type.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="naf-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "news" && (
        <div className="naf-container">
          <h1 className="naf-title">Crypto News</h1>

          <div className="naf-list">
            {data.crypto.map((crypto, index) => (
              <div key={index} className="naf-item">
                <div className="naf-name">{crypto.name}</div>
                <div className="naf-description">{crypto.description}</div>
                <div className="naf-buttons">
                  <a
                    href={crypto.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="naf-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "forums" && (
        <div className="naf-container">
          <h1 className="naf-title">Forums</h1>

          <div className="naf-list">
            {data.community.map((community, index) => (
              <div key={index} className="naf-item">
                <div className="naf-name">{community.name}</div>
                <div className="naf-description">{community.description}</div>
                <div className="community-buttons">
                  <a
                    href={community.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="naf-button"
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

export default NewsAndForums;
