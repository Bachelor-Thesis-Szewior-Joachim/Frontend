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
  Title,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  LineController,
  BarController,
  Tooltip,
  Title,
  Legend
);

const exampleData = {
  sales: [
    { time: "September 1", value: 120 },
    { time: "September 2", value: 110 },
    { time: "September 3", value: 130 },
    { time: "September 4", value: 100 },
    { time: "September 5", value: 140 },
    { time: "September 6", value: 145 },
    { time: "September 7", value: 150 },
    { time: "September 8", value: 170 },
    { time: "September 9", value: 160 },
    { time: "September 10", value: 180 },
  ],
  averagePrice: [
    { time: "September 1", value: 152 },
    { time: "September 2", value: 150 },
    { time: "September 3", value: 150 },
    { time: "September 4", value: 150 },
    { time: "September 5", value: 150 },
    { time: "September 6", value: 160 },
    { time: "September 7", value: 155 },
    { time: "September 8", value: 165 },
    { time: "September 9", value: 170 },
    { time: "September 10", value: 175 },
  ],
  volume: [
    { time: "September 1", value: 300 },
    { time: "September 2", value: 250 },
    { time: "September 3", value: 320 },
    { time: "September 4", value: 270 },
    { time: "September 5", value: 340 },
    { time: "September 6", value: 360 },
    { time: "September 7", value: 380 },
    { time: "September 8", value: 400 },
    { time: "September 9", value: 420 },
    { time: "September 10", value: 450 },
  ],
};

let nftChart = null; // Hold the current chart instance

export function createChart(canvasRef) {
  // Destroy the previous chart instance if it exists
  if (nftChart) {
    nftChart.destroy();
  }

  nftChart = new Chart(canvasRef, {
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
          tension: 0.3, // Smooth line
          pointRadius: 3,
          pointBackgroundColor: "blue",
        },
        {
          label: "Average Price",
          data: exampleData.averagePrice.map((d) => d.value),
          type: "line",
          borderColor: "red",
          backgroundColor: "transparent",
          yAxisID: "y1",
          tension: 0.3, // Smooth line
          pointRadius: 3,
          pointBackgroundColor: "red",
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
          beginAtZero: false,
          type: "linear",
          position: "left",
          ticks: {
            color: "#ffffff", // Change this to fit the design
          },
          title: {
            display: true,
            text: "Price & Sales",
            color: "#ffffff",
          },
        },
        y2: {
          beginAtZero: true,
          type: "linear",
          position: "right",
          ticks: {
            color: "#ffffff",
          },
          title: {
            display: true,
            text: "Volume",
            color: "#ffffff",
          },
        },
        x: {
          ticks: {
            color: "#ffffff", // X-axis labels color
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "NFT Sales, Price, and Volume Over Time",
          color: "#ffffff",
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
        legend: {
          labels: {
            color: "#ffffff", // Legend color
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false, // Disable to allow custom width/height control
    },
  });
}

// Function to destroy the chart (for cleanup)
export function destroyChart() {
  if (nftChart) {
    nftChart.destroy();
  }
}
