import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";

const MarketCapChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timeframe, setTimeframe] = useState("1d"); // Default to 1d

  // Example data for different timeframes
  const dataSets = {
    "1d": [200, 210, 220, 230, 240, 250],
    "7d": [180, 200, 250, 300, 350, 400],
    "1m": [100, 150, 200, 250, 300, 350],
    "6m": [50, 100, 200, 400, 600, 800],
    all: [200, 400, 1000, 1500, 2000, 2500],
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the chart
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2014", "2016", "2018", "2020", "2022", "2024"], // X-axis labels
        datasets: [
          {
            label: "Market Cap",
            data: dataSets[timeframe], // Dynamic data based on timeframe
            borderColor: "#00ccff", // Light blue line
            borderWidth: 2,
            pointBackgroundColor: "#ffffff", // White points
            pointBorderColor: "#00ccff",
            pointHoverRadius: 6,
            pointRadius: 4,
            tension: 0.3, // Curve smoothness
            fill: false, // Disable filling under the line
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20, // Add some space at the top for the legend
            right: 20,
            bottom: 10,
            left: 10,
          },
        },
        scales: {
          x: {
            grid: {
              color: "rgba(255, 255, 255, 0.2)", // Light grid color for the dark background
            },
            ticks: {
              color: "#cfcfcf", // Light text color for X-axis
            },
          },
          y: {
            beginAtZero: false, // Prevent starting at zero
            grid: {
              color: "rgba(255, 255, 255, 0.2)", // Light grid color for Y-axis
            },
            ticks: {
              color: "#cfcfcf", // Light text color for Y-axis
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ffffff", // Legend color
              boxWidth: 20,
              padding: 15,
            },
            position: "top", // Keep legend at the top of the chart
          },
          tooltip: {
            backgroundColor: "rgba(28, 28, 43, 0.8)", // Dark background for tooltips
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            borderColor: "#555",
            borderWidth: 1,
          },
        },
      },
    });

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [timeframe]); // Re-run effect when timeframe changes

  return (
    <div>
      <div className="timeframe-buttons">
        <div className="chart-title">Market Cap</div>

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
        <canvas ref={chartRef} id="marketCapChart"></canvas>
      </div>
    </div>
  );
};

export default MarketCapChart;
