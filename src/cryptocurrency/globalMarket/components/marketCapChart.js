import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";

const MarketCapChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timeframe, setTimeframe] = useState("all");
  const [marketCapData, setMarketCapData] = useState({
    solana: [],
    bitcoin: [],
    ethereum: [],
  });

  // Helper function to fetch data for a cryptocurrency by cmcId
  const fetchMarketCapData = async (cmcId) => {
    try {
      const response = await fetch(`http://localhost:8080/cryptocurrency/historicalData/${cmcId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching market cap data:", error);
      return [];
    }
  };

  // Helper function to filter data based on selected timeframe
  const filterDataByTimeframe = (data) => {
    const now = new Date();
    let filteredData;
    switch (timeframe) {
      case "1d":
        filteredData = data.slice(-24);
        break;
      case "7d":
        filteredData = data.slice(-7);
        break;
      case "1m":
        filteredData = data.slice(-30);
        break;
      case "6m":
        filteredData = data.slice(-180);
        break;
      default:
        filteredData = data; // 'all' timeframe
    }
    return {
      dates: filteredData.map((entry) => new Date(entry.date).toLocaleDateString()),
      marketCap: filteredData.map((entry) => parseFloat(entry.marketCap)),
    };
  };

  useEffect(() => {
    const loadChartData = async () => {
      const solanaData = await fetchMarketCapData(5426);
      const bitcoinData = await fetchMarketCapData(1);
      const ethereumData = await fetchMarketCapData(1027);

      // Filter data based on selected timeframe
      const solanaFiltered = filterDataByTimeframe(solanaData);
      const bitcoinFiltered = filterDataByTimeframe(bitcoinData);
      const ethereumFiltered = filterDataByTimeframe(ethereumData);

      // Update chart with the filtered data
      const ctx = chartRef.current.getContext("2d");
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: solanaFiltered.dates, // Use dates from one of the filtered datasets
          datasets: [
            {
              label: "Solana Market Cap",
              data: solanaFiltered.marketCap,
              borderColor: "#00ccff",
              borderWidth: 2,
              pointBackgroundColor: "#ffffff",
              pointBorderColor: "#00ccff",
              pointHoverRadius: 6,
              pointRadius: 4,
              tension: 0.3,
              fill: false,
            },
            {
              label: "Bitcoin Market Cap",
              data: bitcoinFiltered.marketCap,
              borderColor: "#f7931a",
              borderWidth: 2,
              pointBackgroundColor: "#ffffff",
              pointBorderColor: "#f7931a",
              pointHoverRadius: 6,
              pointRadius: 4,
              tension: 0.3,
              fill: false,
            },
            {
              label: "Ethereum Market Cap",
              data: ethereumFiltered.marketCap,
              borderColor: "#3c3c3d",
              borderWidth: 2,
              pointBackgroundColor: "#ffffff",
              pointBorderColor: "#3c3c3d",
              pointHoverRadius: 6,
              pointRadius: 4,
              tension: 0.3,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: { top: 20, right: 20, bottom: 10, left: 10 },
          },
          scales: {
            x: {
              grid: { color: "rgba(255, 255, 255, 0.2)" },
              ticks: { color: "#cfcfcf" },
            },
            y: {
              beginAtZero: false,
              grid: { color: "rgba(255, 255, 255, 0.2)" },
              ticks: { color: "#cfcfcf" },
            },
          },
          plugins: {
            legend: {
              labels: { color: "#ffffff", boxWidth: 20, padding: 15 },
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
    };

    loadChartData();
  }, [timeframe]); // Reload chart when timeframe changes

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
