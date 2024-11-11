import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  LineController,
  BarController, // Import BarController
  Tooltip,
  Title,
  Legend,
} from "chart.js";

// Register all required elements and controllers
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, BarElement, LineController, BarController, Tooltip, Title, Legend);

let nftChart = null;

export function createChart(canvasRef, historicalData) {
  // Destroy any existing chart instance to avoid duplication
  if (nftChart) {
    nftChart.destroy();
  }

  // Extract labels, prices, and volumes from historicalData
  const labels = historicalData.map((d) => new Date(d.date).toLocaleDateString());
  const prices = historicalData.map((d) => d.price);
  const volumes = historicalData.map((d) => d.volume24h);

  // Create a new chart instance
  nftChart = new Chart(canvasRef, {
    type: "line", // Main chart type
    data: {
      labels,
      datasets: [
        {
          label: "Price",
          data: prices,
          borderColor: "blue",
          fill: false,
          pointBorderColor: "blue", // Optional: customize point style
        },
        {
          label: "Volume",
          data: volumes,
          backgroundColor: "orange",
          type: "bar", // Specific type for this dataset
        },
      ],
    },
    options: {
      scales: {
        y: { beginAtZero: true },
        x: { display: true },
      },
      plugins: {
        title: { display: true, text: "Historical Price and Volume" },
      },
    },
  });
}

export function destroyChart() {
  if (nftChart) {
    nftChart.destroy();
  }
}
