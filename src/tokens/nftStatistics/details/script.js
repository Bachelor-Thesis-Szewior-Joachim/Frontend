import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  LineController,
  BarController,
  Tooltip,
} from "chart.js";
import { exampleData } from "./exampleData";

// Register all required components for Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  LineController,
  BarController,
  Tooltip
);

let nftChart = null; // Hold chart instance

// Function to create or update the NFT chart
export function createNftChart() {
  const ctx = document.getElementById("nftChartCanvas").getContext("2d");

  // Destroy previous chart instance if it exists
  if (nftChart) nftChart.destroy();

  // Create the chart
  nftChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: exampleData.sales.map((d) => d.time),
      datasets: [
        {
          label: "Sales",
          data: exampleData.sales.map((d) => d.value),
          type: "line",
          borderColor: "blue",
          backgroundColor: "transparent",
          yAxisID: "y1",
        },
        {
          label: "Average Price",
          data: exampleData.averagePrice.map((d) => d.value),
          type: "line",
          borderColor: "red",
          backgroundColor: "transparent",
          yAxisID: "y1",
        },
        {
          label: "Volume",
          data: exampleData.volume.map((d) => d.value),
          backgroundColor: "orange",
          yAxisID: "y2",
        },
      ],
    },
    options: {
      scales: {
        y1: {
          beginAtZero: true,
          type: "linear",
          position: "left",
        },
        y2: {
          beginAtZero: true,
          type: "linear",
          position: "right",
        },
      },
      plugins: {
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
    },
  });
}
