import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import "./style.css";

const EthereumOptionsVolatilityChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timeframe, setTimeframe] = useState("1d"); // Default to 1d

  // Data sets for different timeframes
  const dataSets = {
    "1d": {
      labels: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
      datasets: [75, 65, 70, 60, 80, 85, 75],
    },
    "7d": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [80, 75, 90, 85, 70, 95, 75],
    },
    "1m": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [70, 65, 80, 75],
    },
    "6m": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [85, 75, 65, 70, 60, 80],
    },
    all: {
      labels: [
        "Oct 2022",
        "Jan 2023",
        "Apr 2023",
        "Jul 2023",
        "Oct 2023",
        "Jan 2024",
        "Apr 2024",
        "Jul 2024",
      ],
      datasets: [85, 75, 65, 70, 60, 80, 90, 75],
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // If chartInstance.current exists, destroy it before creating a new one
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
            label: "Ethereum Options Volatility",
            data: currentData.datasets, // Data points for the selected timeframe
            borderColor: "#0000FF", // Bright blue for the line
            borderWidth: 2,
            pointBackgroundColor: "#0000FF",
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
              text: "Months",
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
              text: "Volatility (%)",
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
  }, [timeframe]); // Re-render the chart when the timeframe changes

  return (
    <div>
      <div className="header-container">
        <div className="chart-title">Ethereum Options Volatility Over Time</div>
        <div className="timeframe-buttons">
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
      </div>
      <div style={{ width: "100%" }}>
        <canvas ref={chartRef} id="ethereumOptionsVolatilityChart"></canvas>
      </div>
    </div>
  );
};

export default EthereumOptionsVolatilityChart;
