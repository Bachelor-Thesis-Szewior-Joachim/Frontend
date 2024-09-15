import React from "react";

export function ProgressBar({ gainers, losers }) {
  const total = gainers + losers;
  const gainersPercentage = (gainers / total) * 100;
  const losersPercentage = (losers / total) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-fill gainers"
          style={{ width: `${gainersPercentage}%` }}
        ></div>
        <div
          className="progress-fill losers"
          style={{ width: `${losersPercentage}%` }}
        ></div>
      </div>
      <div className="progress-values">
        <span>
          {gainers} ({gainersPercentage.toFixed(0)}%)
        </span>
        <span>
          {losers} ({losersPercentage.toFixed(0)}%)
        </span>
      </div>
    </div>
  );
}
