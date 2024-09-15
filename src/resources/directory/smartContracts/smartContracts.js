import React, { useState } from "react";
import Header from "../../../header";
import data from "./data"; // Your smart-contract data
import "./smartContracts.css"; // Your CSS file
import { useParams } from "react-router-dom";

const SmartContracts = () => {
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
          className={`tab-btn ${activeTab === "services" ? "active" : ""}`}
          onClick={() => handleTabChange("services")}
        >
          Services
        </button>
        <button
          className={`tab-btn ${activeTab === "audit" ? "active" : ""}`}
          onClick={() => handleTabChange("audit")}
        >
          Audit
        </button>
        <button
          className={`tab-btn ${activeTab === "factory" ? "active" : ""}`}
          onClick={() => handleTabChange("factory")}
        >
          Factory
        </button>
      </div>

      {activeTab === "all" && (
        <div className="smart-contract-container">
          <h1 className="smart-contract-title">All smart-contract</h1>

          <div className="smart-contract-list">
            {data.all.map((resource, index) => (
              <div key={index} className="smart-contract-item">
                <div className="smart-contract-name">{resource.name}</div>
                <div className="smart-contract-description">
                  {resource.description}
                </div>
                <div className="smart-contract-buttons">
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="smart-contract-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "services" && (
        <div className="smart-contract-container">
          <h1 className="smart-contract-title">Services</h1>

          <div className="smart-contract-list">
            {data.services.map((service, index) => (
              <div key={index} className="smart-contract-item">
                <div className="smart-contract-name">{service.name}</div>
                <div className="smart-contract-description">
                  {service.description}
                </div>
                <div className="smart-contract-buttons">
                  <a
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="smart-contract-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "audit" && (
        <div className="smart-contract-container">
          <h1 className="smart-contract-title">Audits</h1>

          <div className="smart-contract-list">
            {data.audits.map((audit, index) => (
              <div key={index} className="smart-contract-item">
                <div className="smart-contract-name">{audit.name}</div>
                <div className="smart-contract-description">
                  {audit.description}
                </div>
                <div className="smart-contract-buttons">
                  <a
                    href={audit.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="smart-contract-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === "factory" && (
        <div className="smart-contract-container">
          <h1 className="smart-contract-title">Factory</h1>

          <div className="smart-contract-list">
            {data.factories.map((factory, index) => (
              <div key={index} className="smart-contract-item">
                <div className="smart-contract-name">{factory.name}</div>
                <div className="smart-contract-description">
                  {factory.description}
                </div>
                <div className="smart-contract-buttons">
                  <a
                    href={factory.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="smart-contract-button"
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

export default SmartContracts;
