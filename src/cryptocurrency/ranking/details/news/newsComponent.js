import React from "react";
import "./newsComponent.css";

const NewsComponent = () => {
  const newsData = [
    {
      title: "eToro USA Settles with SEC, Agrees to Pay $1.5 Million",
      time: "3 hours ago",
      source: "Unlock Blockchain",
    },
    {
      title: "Bitcoin Nearing 'Grand Finale'; Top Trader Says",
      time: "3 hours ago",
      source: "U.Today",
    },
    {
      title: "Republicans Weigh Limits on Bitcoin Mining",
      time: "3 hours ago",
      source: "UltraMining",
    },
    {
      title: "Bitcoin as a National Security Concern",
      time: "3 hours ago",
      source: "UltraMining",
    },
    {
      title: "One Bitcoin Transaction Uses Energy Equivalent to 1.5 Days",
      time: "3 hours ago",
      source: "UltraMining",
    },
  ];

  return (
    <div className="news-container">
      <h2>Bitcoin News</h2>
      <ul className="news-list">
        {newsData.map((news, index) => (
          <li key={index}>
            <h3>{news.title}</h3>
            <p>
              <span>{news.time}</span> - <span>{news.source}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
