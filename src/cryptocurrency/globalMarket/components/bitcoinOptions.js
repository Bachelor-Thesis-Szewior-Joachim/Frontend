import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

import "./style.css"; // Make sure this contains the matching styles for your website

const BitcoinOptionsVolatilityChart = () => {
  const [timeframe, setTimeframe] = useState("1d"); // Default to 1d
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const timeframeData = {
    "1d": [75, 60, 65, 50],
    "7d": [80, 70, 65, 55],
    "1m": [85, 75, 70, 60],
    "6m": [90, 80, 75, 65],
    all: [100, 90, 85, 75],
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // If a chart instance already exists, destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance and store it in the ref
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Oct", "Jan", "Apr", "Jul"], // X-axis labels
        datasets: [
          {
            label: "Volatility",
            data: timeframeData[timeframe], // Change data based on the selected timeframe
            borderColor: "#ffcc00", // Yellow color for the line
            backgroundColor: "transparent",
            fill: false,
            tension: 0.4, // Smooth line tension
            pointBackgroundColor: "#ffcc00", // Point markers
            pointBorderColor: "#ffcc00",
            pointRadius: 4, // Add point markers
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: "#ffcc00", // Legend text color
              font: {
                size: 14,
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
              color: "#ffffff", // X-axis title color
            },
            ticks: {
              color: "#ffffff", // X-axis tick color
            },
            grid: {
              color: "#444444", // Grid color
            },
          },
          y: {
            title: {
              display: true,
              text: "Volatility",
              color: "#ffffff", // Y-axis title color
            },
            ticks: {
              color: "#ffffff", // Y-axis tick color
            },
            grid: {
              color: "#444444", // Grid color
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [timeframe]); // Re-create the chart when the timeframe changes

  return (
    <div>
      <div className="timeframe-buttons">
        <div className="chart-title">Bitcoin options volatility</div>
        <button
          className={timeframe === "1d" ? "active" : ""}
          onClick={() => setTimeframe("1d")}
        >
          1d
        </button>
        <button
          className={timeframe === "7d" ? "active" : ""}
          onClick={() => setTimeframe("7d")}
        >
          7d
        </button>
        <button
          className={timeframe === "1m" ? "active" : ""}
          onClick={() => setTimeframe("1m")}
        >
          1m
        </button>
        <button
          className={timeframe === "6m" ? "active" : ""}
          onClick={() => setTimeframe("6m")}
        >
          6m
        </button>
        <button
          className={timeframe === "all" ? "active" : ""}
          onClick={() => setTimeframe("all")}
        >
          All
        </button>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <canvas ref={chartRef} id="bitcoinOptionsVolatilityChart"></canvas>
      </div>
    </div>
  );
};

export default BitcoinOptionsVolatilityChart;
