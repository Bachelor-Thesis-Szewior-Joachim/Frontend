import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";

const MarketCapBreakdownChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timeframe, setTimeframe] = useState("1d"); // Default to 1d

  // Example data for different timeframes
  const dataSets = {
    "1d": {
      labels: ["10:00", "12:00", "14:00", "16:00", "18:00"],
      datasets: {
        BTC: [100, 150, 130, 160, 170],
        ETH: [80, 120, 100, 130, 150],
        Stablecoin: [60, 70, 80, 90, 100],
        Others: [30, 40, 50, 60, 70],
      },
    },
    "7d": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: {
        BTC: [200, 220, 230, 240, 250, 260, 270],
        ETH: [180, 200, 220, 230, 240, 250, 260],
        Stablecoin: [150, 160, 170, 180, 190, 200, 210],
        Others: [100, 110, 120, 130, 140, 150, 160],
      },
    },
    "1m": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: {
        BTC: [300, 320, 340, 350],
        ETH: [250, 270, 290, 310],
        Stablecoin: [200, 220, 240, 260],
        Others: [150, 170, 190, 210],
      },
    },
    "6m": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: {
        BTC: [400, 450, 500, 550, 600, 650],
        ETH: [350, 400, 450, 500, 550, 600],
        Stablecoin: [300, 350, 400, 450, 500, 550],
        Others: [200, 250, 300, 350, 400, 450],
      },
    },
    all: {
      labels: ["2014", "2016", "2018", "2020", "2022", "2024"],
      datasets: {
        BTC: [100, 200, 300, 400, 500, 600],
        ETH: [80, 150, 250, 350, 450, 550],
        Stablecoin: [50, 100, 150, 200, 250, 300],
        Others: [30, 60, 90, 120, 150, 180],
      },
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // If chartInstance.current exists, destroy it before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Get the current dataset for the selected timeframe
    const currentData = dataSets[timeframe];

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: currentData.labels, // X-axis labels based on the selected timeframe
        datasets: [
          {
            label: "BTC",
            data: currentData.datasets.BTC, // Data points for BTC
            borderColor: "#FFA500", // Orange for BTC
            borderWidth: 2,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#FFA500",
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
            fill: false,
          },
          {
            label: "ETH",
            data: currentData.datasets.ETH, // Data points for ETH
            borderColor: "#1E90FF", // Blue for ETH
            borderWidth: 2,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#1E90FF",
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
            fill: false,
          },
          {
            label: "Stablecoin",
            data: currentData.datasets.Stablecoin, // Data points for Stablecoin
            borderColor: "#32CD32", // Green for Stablecoin
            borderWidth: 2,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#32CD32",
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
            fill: false,
          },
          {
            label: "Others",
            data: currentData.datasets.Others, // Data points for Others
            borderColor: "#A9A9A9", // Grey for Others
            borderWidth: 2,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#A9A9A9",
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
            fill: false,
          },
        ],
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
            grid: {
              color: "rgba(255, 255, 255, 0.2)", // Light grid color for X-axis
            },
            ticks: {
              color: "#cfcfcf", // Light color for X-axis text
            },
          },
          y: {
            beginAtZero: false, // Start Y-axis from non-zero
            grid: {
              color: "rgba(255, 255, 255, 0.2)", // Light grid color for Y-axis
            },
            ticks: {
              color: "#cfcfcf", // Light color for Y-axis text
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ffffff", // White color for legend text
              boxWidth: 20,
              padding: 15,
            },
            position: "top", // Legend at the top
          },
          tooltip: {
            backgroundColor: "rgba(28, 28, 43, 0.8)", // Dark tooltip background
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            borderColor: "#555",
            borderWidth: 1,
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [timeframe]); // Add timeframe as a dependency to re-render on change

  return (
    <div>
      <div className="timeframe-buttons">
        <div className="chart-title">Market Cap Breakdown</div>

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
      <div style={{ width: "100%" }}>
        <canvas ref={chartRef} id="marketCapBreakdownChart"></canvas>
      </div>
    </div>
  );
};

export default MarketCapBreakdownChart;
