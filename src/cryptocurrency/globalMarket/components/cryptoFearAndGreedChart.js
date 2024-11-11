import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import "./style.css";

const CryptoFearGreedIndexChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timeframe, setTimeframe] = useState("all");
  const [fearGreedData, setFearGreedData] = useState([]);

  // Fetch data from API
  const fetchFearGreedData = async () => {
    try {
      const response = await fetch("http://localhost:8080/global-data/latest");
      const data = await response.json();
      setFearGreedData(data);
    } catch (error) {
      console.error("Error fetching Fear & Greed data:", error);
    }
  };

  // Convert timestamp to readable date format
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  // Filter data by timeframe
  const filterDataByTimeframe = () => {
    let filteredData;
    switch (timeframe) {
      case "1d":
        filteredData = fearGreedData.slice(-24); // Last 24 data points
        break;
      case "7d":
        filteredData = fearGreedData.slice(-7); // Last 7 data points
        break;
      case "1m":
        filteredData = fearGreedData.slice(-30); // Last 30 data points
        break;
      case "6m":
        filteredData = fearGreedData.slice(-180); // Last 180 data points
        break;
      default:
        filteredData = fearGreedData; // All data points
    }
    return {
      labels: filteredData.map((entry) => formatDate(entry.date)),
      values: filteredData.map((entry) => entry.value),
    };
  };

  useEffect(() => {
    fetchFearGreedData();
  }, []);

  useEffect(() => {
    const { labels, values } = filterDataByTimeframe();

    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Crypto Fear & Greed Index",
            data: values,
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
  }, [timeframe, fearGreedData]); // Re-run the effect when the timeframe or data changes

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
