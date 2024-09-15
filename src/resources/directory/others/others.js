import React, { useState } from "react";
import Header from "../../../header";
import data from "./data"; // Your others data
import "./others.css"; // Your CSS file
import { useParams } from "react-router-dom";

const Others = () => {
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
          className={`tab-btn ${activeTab === "allOthers" ? "active" : ""}`}
          onClick={() => handleTabChange("allOthers")}
        >
          All other
        </button>
        <button
          className={`tab-btn ${activeTab === "carrer" ? "active" : ""}`}
          onClick={() => handleTabChange("carrer")}
        >
          Carrer
        </button>
        <button
          className={`tab-btn ${activeTab === "grant" ? "active" : ""}`}
          onClick={() => handleTabChange("grant")}
        >
          Grant
        </button>
        <button
          className={`tab-btn ${activeTab === "tools" ? "active" : ""}`}
          onClick={() => handleTabChange("tools")}
        >
          Tools
        </button>
      </div>

      {activeTab === "allOthers" && (
        <div className="others-container">
          <h1 className="others-title">All others</h1>

          <div className="others-list">
            {data.all.map((resource, index) => (
              <div key={index} className="others-item">
                <div className="others-name">{resource.name}</div>
                <div className="others-description">{resource.description}</div>
                <div className="others-buttons">
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="others-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "carrer" && (
        <div className="others-container">
          <h1 className="others-title">Pools</h1>

          <div className="others-list">
            {data.carrers.map((carrer, index) => (
              <div key={index} className="others-item">
                <div className="others-name">{carrer.name}</div>
                <div className="others-description">{carrer.description}</div>
                <div className="others-buttons">
                  <a
                    href={carrer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="others-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "grant" && (
        <div className="others-container">
          <h1 className="others-title">Grant</h1>

          <div className="others-list">
            {data.grants.map((grant, index) => (
              <div key={index} className="others-item">
                <div className="others-name">{grant.name}</div>
                <div className="others-description">{grant.description}</div>
                <div className="others-buttons">
                  <a
                    href={grant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="others-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "tools" && (
        <div className="others-container">
          <h1 className="others-title">Grant</h1>

          <div className="others-list">
            {data.tools.map((tool, index) => (
              <div key={index} className="others-item">
                <div className="others-name">{tool.name}</div>
                <div className="others-description">{tool.description}</div>
                <div className="others-buttons">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="others-button"
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

export default Others;
