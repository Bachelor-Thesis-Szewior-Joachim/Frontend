import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import "./style.css";

const FiatBackedStablecoinChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timeframe, setTimeframe] = useState("1d"); // Default to 1d

  // Example data for different timeframes
  const dataSets = {
    "1d": {
      labels: ["08:00", "10:00", "12:00", "14:00", "16:00"],
      datasets: [20, 25, 30, 28, 35],
    },
    "7d": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [40, 42, 45, 43, 47, 50, 53],
    },
    "1m": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [60, 65, 70, 75],
    },
    "6m": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [80, 85, 90, 95, 100, 105],
    },
    all: {
      labels: ["2016", "2018", "2020", "2022", "2024"],
      datasets: [20, 50, 80, 120, 150],
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
            label: "Fiat-backed Stablecoin Market Cap",
            data: currentData.datasets, // Data points for the selected timeframe
            borderColor: "#32CD32", // Green color for the line
            borderWidth: 2,
            pointBackgroundColor: "#ffffff", // White for points
            pointBorderColor: "#32CD32",
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: false,
            tension: 0.3, // Smooth line tension
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Make it responsive while maintaining the correct aspect ratio
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
              color: "#cfcfcf", // X-axis title color
            },
            grid: {
              color: "rgba(255, 255, 255, 0.2)", // Grid color for X-axis
            },
            ticks: {
              color: "#cfcfcf", // X-axis label color
            },
          },
          y: {
            title: {
              display: true,
              text: "Market Cap (Billion USD)",
              color: "#cfcfcf", // Y-axis title color
            },
            grid: {
              color: "rgba(255, 255, 255, 0.2)", // Grid color for Y-axis
            },
            ticks: {
              color: "#cfcfcf", // Y-axis label color
            },
            beginAtZero: true, // Ensure the Y-axis starts at 0
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ffffff", // Legend text color
              boxWidth: 20,
              padding: 15,
            },
            position: "top", // Position legend at the top
          },
          tooltip: {
            backgroundColor: "rgba(28, 28, 43, 0.8)", // Tooltip background color
            titleColor: "#ffffff", // Tooltip title color
            bodyColor: "#ffffff", // Tooltip body color
            borderColor: "#555", // Tooltip border color
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
  }, [timeframe]); // Re-run effect when timeframe changes

  return (
    <div>
      <div className="timeframe-buttons">
        <div className="chart-title">Fiat-backed Stablecoin Market Cap</div>

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
        <canvas ref={chartRef} id="fiatBackedStablecoinChart"></canvas>
      </div>
    </div>
  );
};

export default FiatBackedStablecoinChart;
