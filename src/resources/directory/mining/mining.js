import React, { useState } from "react";
import Header from "../../../header";
import data from "./data"; // Your mining data
import "./mining.css"; // Your CSS file
import { useParams } from "react-router-dom";

const Mining = () => {
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
          className={`tab-btn ${activeTab === "pools" ? "active" : ""}`}
          onClick={() => handleTabChange("pools")}
        >
          Pools
        </button>
        <button
          className={`tab-btn ${activeTab === "audit" ? "active" : ""}`}
          onClick={() => handleTabChange("forums")}
        >
          Forums
        </button>
      </div>

      {activeTab === "all" && (
        <div className="mining-container">
          <h1 className="mining-title">All</h1>

          <div className="mining-list">
            {data.all.map((resource, index) => (
              <div key={index} className="mining-item">
                <div className="mining-name">{resource.name}</div>
                <div className="mining-description">{resource.description}</div>
                <div className="mining-buttons">
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mining-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "pools" && (
        <div className="mining-container">
          <h1 className="mining-title">Pools</h1>

          <div className="mining-list">
            {data.pools.map((pool, index) => (
              <div key={index} className="mining-item">
                <div className="mining-name">{pool.name}</div>
                <div className="mining-description">{pool.description}</div>
                <div className="mining-buttons">
                  <a
                    href={pool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mining-button"
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
        <div className="mining-container">
          <h1 className="mining-title">Forums</h1>

          <div className="mining-list">
            {data.forums.map((forum, index) => (
              <div key={index} className="mining-item">
                <div className="mining-name">{forum.name}</div>
                <div className="mining-description">{forum.description}</div>
                <div className="mining-buttons">
                  <a
                    href={forum.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mining-button"
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

export default Mining;
