import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const OpenInterestChart = () => {
  const chartRef = useRef(null);
  const [timeframe, setTimeframe] = useState("1d"); // Default to 1d

  // Define data for different timeframes
  const dataSets = {
    "1d": {
      labels: ["10:00", "12:00", "14:00", "16:00", "18:00"],
      datasets: [
        {
          label: "Futures",
          data: [30, 32, 33, 31, 30],
          borderColor: "#ff0000",
        },
        {
          label: "Perpetuals",
          data: [15, 14, 13, 16, 18],
          borderColor: "#ffcc00",
        },
      ],
    },
    "7d": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Futures",
          data: [40, 38, 37, 36, 35, 34, 32],
          borderColor: "#ff0000",
        },
        {
          label: "Perpetuals",
          data: [20, 22, 23, 21, 24, 23, 22],
          borderColor: "#ffcc00",
        },
      ],
    },
    "1m": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        { label: "Futures", data: [60, 58, 55, 53], borderColor: "#ff0000" },
        { label: "Perpetuals", data: [20, 22, 25, 27], borderColor: "#ffcc00" },
      ],
    },
    "6m": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Futures",
          data: [55, 53, 50, 48, 45, 42],
          borderColor: "#ff0000",
        },
        {
          label: "Perpetuals",
          data: [20, 23, 24, 26, 28, 30],
          borderColor: "#ffcc00",
        },
      ],
    },
    all: {
      labels: ["2014", "2016", "2018", "2020", "2022", "2024"],
      datasets: [
        {
          label: "Futures",
          data: [70, 65, 50, 45, 35, 30],
          borderColor: "#ff0000",
        },
        {
          label: "Perpetuals",
          data: [5, 10, 15, 25, 35, 40],
          borderColor: "#ffcc00",
        },
      ],
    },
  };

  useEffect(() => {
    const ctx = document.getElementById("openInterestChart").getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance based on the current timeframe
    chartRef.current = new Chart(ctx, {
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
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
              color: "#ffffff",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
            },
            ticks: {
              color: "#ffffff",
            },
          },
          y: {
            title: {
              display: true,
              text: "Value",
              color: "#ffffff",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
            },
            ticks: {
              color: "#ffffff",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ffffff",
              boxWidth: 20,
              padding: 15,
            },
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

    // Cleanup function to destroy the chart when the component unmounts or updates
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [timeframe]); // Re-run the effect when timeframe changes

  return (
    <div>
      <div className="timeframe-buttons">
        <div className="chart-title">Open Interest</div>
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
          height: "400px",
        }}
      >
        <canvas id="openInterestChart"></canvas>
      </div>
    </div>
  );
};

export default OpenInterestChart;
