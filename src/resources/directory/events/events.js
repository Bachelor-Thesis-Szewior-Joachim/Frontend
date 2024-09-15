import { React, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../header";
import "./events.css";
import data from "./data"; // Your exchange data

const BlockchainEvents = () => {
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
          All events
        </button>
        <button
          className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => handleTabChange("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`tab-btn ${activeTab === "past" ? "active" : ""}`}
          onClick={() => handleTabChange("past")}
        >
          Past
        </button>
      </div>

      {activeTab === "all" && (
        <div className="event-container">
          <h1 className="event-title">All events</h1>

          <div className="event-list">
            {data.all.map((type, index) => (
              <div key={index} className="event-item">
                <div className="event-name">{type.name}</div>
                <div className="event-description">{type.description}</div>
                <div className="event-buttons">
                  <a
                    href={type.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "upcoming" && (
        <div className="event-container">
          <h1 className="event-title">Upcoming events</h1>

          <div className="event-list">
            {data.upcoming.map((upcoming, index) => (
              <div key={index} className="event-item">
                <div className="event-name">{upcoming.name}</div>
                <div className="event-description">{upcoming.description}</div>
                <div className="event-buttons">
                  <a
                    href={upcoming.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-button"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "past" && (
        <div className="event-container">
          <h1 className="event-title">Past events</h1>

          <div className="event-list">
            {data.past.map((past, index) => (
              <div key={index} className="event-item">
                <div className="event-name">{past.name}</div>
                <div className="event-description">{past.description}</div>
                <div className="community-buttons">
                  <a
                    href={past.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-button"
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

export default BlockchainEvents;
