// BitcoinDominanceChart.js
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import "./style.css";

const BitcoinDominanceChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timeframe, setTimeframe] = useState("1d"); // Default to 1d

  // Define data for different timeframes
  const dataSets = {
    "1d": {
      labels: ["10:00", "12:00", "14:00", "16:00", "18:00"],
      datasets: [
        { label: "BTC", data: [30, 32, 33, 31, 30], borderColor: "#FFA500" },
        { label: "ETH", data: [15, 14, 13, 16, 18], borderColor: "#0056b3" },
        { label: "USDT", data: [8, 7, 7, 8, 9], borderColor: "#00FF00" },
        { label: "BNB", data: [5, 4, 6, 5, 4], borderColor: "#FF0000" },
        { label: "Others", data: [10, 12, 11, 10, 9], borderColor: "#808080" },
      ],
    },
    "7d": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "BTC",
          data: [40, 38, 37, 36, 35, 34, 32],
          borderColor: "#FFA500",
        },
        {
          label: "ETH",
          data: [20, 22, 23, 21, 24, 23, 22],
          borderColor: "#0056b3",
        },
        {
          label: "USDT",
          data: [9, 10, 9, 9, 8, 10, 11],
          borderColor: "#00FF00",
        },
        { label: "BNB", data: [6, 7, 6, 7, 6, 8, 9], borderColor: "#FF0000" },
        {
          label: "Others",
          data: [10, 12, 11, 13, 12, 13, 14],
          borderColor: "#808080",
        },
      ],
    },
    "1m": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        { label: "BTC", data: [60, 58, 55, 53], borderColor: "#FFA500" },
        { label: "ETH", data: [20, 22, 25, 27], borderColor: "#0056b3" },
        { label: "USDT", data: [7, 7, 8, 9], borderColor: "#00FF00" },
        { label: "BNB", data: [5, 6, 7, 7], borderColor: "#FF0000" },
        { label: "Others", data: [8, 9, 9, 10], borderColor: "#808080" },
      ],
    },
    "6m": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "BTC",
          data: [55, 53, 50, 48, 45, 42],
          borderColor: "#FFA500",
        },
        {
          label: "ETH",
          data: [20, 23, 24, 26, 28, 30],
          borderColor: "#0056b3",
        },
        { label: "USDT", data: [5, 6, 7, 8, 9, 10], borderColor: "#00FF00" },
        { label: "BNB", data: [5, 4, 4, 5, 6, 7], borderColor: "#FF0000" },
        {
          label: "Others",
          data: [10, 12, 14, 15, 18, 20],
          borderColor: "#808080",
        },
      ],
    },
    all: {
      labels: ["2014", "2016", "2018", "2020", "2022", "2024"],
      datasets: [
        {
          label: "BTC",
          data: [70, 65, 50, 45, 35, 30],
          borderColor: "#FFA500",
        },
        { label: "ETH", data: [5, 10, 15, 25, 35, 40], borderColor: "#0056b3" },
        { label: "USDT", data: [0, 2, 4, 5, 7, 8], borderColor: "#00FF00" },
        { label: "BNB", data: [0, 1, 2, 4, 5, 6], borderColor: "#FF0000" },
        {
          label: "Others",
          data: [5, 7, 10, 12, 18, 20],
          borderColor: "#808080",
        },
      ],
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance if exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: dataSets[timeframe].labels,
        datasets: dataSets[timeframe].datasets.map((dataset) => ({
          ...dataset,
          borderWidth: 2,
          pointBackgroundColor: dataset.borderColor,
          pointBorderColor: "#ffffff",
          pointRadius: 4,
          fill: false,
          tension: 0.3, // Smooth line tension
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 10,
            left: 10,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Years",
              color: "#cfcfcf",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
            },
            ticks: {
              color: "#cfcfcf",
            },
          },
          y: {
            title: {
              display: true,
              text: "Dominance (%)",
              color: "#cfcfcf",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
            },
            ticks: {
              color: "#cfcfcf",
            },
            beginAtZero: false,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ffffff",
              boxWidth: 20,
              padding: 15,
            },
            position: "top",
          },
          tooltip: {
            backgroundColor: "rgba(28, 28, 43, 0.8)",
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            borderColor: "#555",
            borderWidth: 1,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [timeframe]); // Re-run effect when timeframe changes

  return (
    <div>
      {/* Timeframe Buttons */}
      <div className="timeframe-buttons">
        <div className="chart-title">Bitcoin Dominance</div>

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

      {/* Chart */}
      <div style={{ width: "100%", height: "400px" }}>
        <canvas ref={chartRef} id="bitcoinDominanceChart"></canvas>
      </div>
    </div>
  );
};

export default BitcoinDominanceChart;
