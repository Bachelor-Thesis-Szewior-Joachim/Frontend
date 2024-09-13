import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import "./style.css";

const VolumeChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timeframe, setTimeframe] = useState("1d"); // Default to 1d

  // Example datasets for different timeframes
  const dataSets = {
    "1d": {
      labels: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
      datasets: [100, 200, 150, 300, 400, 250, 500],
    },
    "7d": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [500, 450, 600, 700, 800, 550, 650],
    },
    "1m": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [400, 600, 750, 900],
    },
    "6m": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [300, 500, 600, 700, 850, 1000],
    },
    all: {
      labels: ["2014", "2016", "2018", "2020", "2022", "2024"],
      datasets: [200, 400, 600, 800, 1000, 1200],
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const currentData = dataSets[timeframe]; // Get the data for the selected timeframe

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: currentData.labels, // X-axis labels based on the selected timeframe
        datasets: [
          {
            label: "Volume",
            data: currentData.datasets, // Data points for the selected timeframe
            borderColor: "#00FFFF", // Cyan color for the line
            borderWidth: 2,
            pointBackgroundColor: "#ffffff", // White color for points
            pointBorderColor: "#00FFFF",
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: false,
            tension: 0.3, // Smooth line tension
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Make it responsive
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
              text: "Volume (in billions)",
              color: "#cfcfcf", // Y-axis title color
            },
            grid: {
              color: "rgba(255, 255, 255, 0.2)", // Grid color for Y-axis
            },
            ticks: {
              color: "#cfcfcf", // Y-axis label color
            },
            beginAtZero: false, // Do not start from zero
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
  }, [timeframe]); // Re-render the chart when the timeframe changes

  return (
    <div>
      <div className="timeframe-buttons">
        <div className="chart-title">Volume 24h</div>
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
        <canvas ref={chartRef} id="volumeChart"></canvas>
      </div>
    </div>
  );
};

export default VolumeChart;
