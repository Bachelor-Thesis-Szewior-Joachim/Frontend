import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import "./style.css";

const CryptoFearGreedIndexChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timeframe, setTimeframe] = useState("1d"); // Default to 1d

  // Example data for different timeframes
  const dataSets = {
    "1d": {
      labels: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
      datasets: [45, 50, 55, 53, 52, 60, 62],
    },
    "7d": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [40, 45, 50, 55, 60, 58, 62],
    },
    "1m": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [50, 60, 55, 65],
    },
    "6m": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [45, 50, 55, 60, 65, 70],
    },
    all: {
      labels: [
        "Jul '23",
        "Sep '23",
        "Nov '23",
        "Jan '24",
        "Mar '24",
        "May '24",
        "Sep '24",
      ],
      datasets: [45, 55, 70, 50, 65, 75, 40],
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
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
            label: "Crypto Fear & Greed Index",
            data: currentData.datasets, // Data points for the selected timeframe
            borderColor: "#FFFF00", // Yellow for the line
            borderWidth: 2,
            pointBackgroundColor: "#FFFF00",
            pointBorderColor: "#ffffff",
            pointRadius: 4,
            fill: false,
            tension: 0.3, // Smooth the line
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
            title: {
              display: true,
              text: "Date",
              color: "#cfcfcf",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.2)", // Lighter grid lines
            },
            ticks: {
              color: "#cfcfcf", // White-ish text for X-axis
            },
          },
          y: {
            title: {
              display: true,
              text: "Index Value",
              color: "#cfcfcf",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.2)", // Lighter grid lines
            },
            ticks: {
              color: "#cfcfcf", // White-ish text for Y-axis
            },
            beginAtZero: true,
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
            backgroundColor: "rgba(28, 28, 43, 0.8)", // Dark background for tooltip
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            borderColor: "#555",
            borderWidth: 1,
          },
        },
      },
    });

    // Cleanup the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [timeframe]); // Re-run the effect when the timeframe changes

  return (
    <div>
      <div className="timeframe-buttons">
        <div className="chart-title">CMC Crypto Fear & Greed Index</div>

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
        <canvas ref={chartRef} id="cryptoFearGreedIndexChart"></canvas>
      </div>
    </div>
  );
};

export default CryptoFearGreedIndexChart;
