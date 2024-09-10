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

// Register all required components
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

const exampleData = {
  marketCap: [
    { time: "00:00", value: 24500000000 },
    { time: "01:00", value: 24650000000 },
    { time: "02:00", value: 24600000000 },
    { time: "03:00", value: 24800000000 },
    { time: "04:00", value: 24950000000 },
    { time: "05:00", value: 25000000000 },
    { time: "06:00", value: 25100000000 },
    { time: "07:00", value: 25200000000 },
    { time: "08:00", value: 25350000000 },
    { time: "09:00", value: 25400000000 },
    { time: "10:00", value: 25500000000 },
    { time: "11:00", value: 25650000000 },
    { time: "12:00", value: 25800000000 },
    { time: "13:00", value: 25900000000 },
    { time: "14:00", value: 26000000000 },
    { time: "15:00", value: 26100000000 },
    { time: "16:00", value: 26200000000 },
    { time: "17:00", value: 26300000000 },
    { time: "18:00", value: 26400000000 },
    { time: "19:00", value: 26500000000 },
    { time: "20:00", value: 26600000000 },
    { time: "21:00", value: 26700000000 },
    { time: "22:00", value: 26800000000 },
    { time: "23:00", value: 26900000000 },
  ],
  salesVolume: [
    { time: "00:00", value: 800000 },
    { time: "01:00", value: 750000 },
    { time: "02:00", value: 900000 },
    { time: "03:00", value: 950000 },
    { time: "04:00", value: 850000 },
    { time: "05:00", value: 1000000 },
    { time: "06:00", value: 1100000 },
    { time: "07:00", value: 1200000 },
    { time: "08:00", value: 1000000 },
    { time: "09:00", value: 1050000 },
    { time: "10:00", value: 1150000 },
    { time: "11:00", value: 1200000 },
    { time: "12:00", value: 900000 },
    { time: "13:00", value: 950000 },
    { time: "14:00", value: 1100000 },
    { time: "15:00", value: 1000000 },
    { time: "16:00", value: 950000 },
    { time: "17:00", value: 900000 },
    { time: "18:00", value: 850000 },
    { time: "19:00", value: 900000 },
    { time: "20:00", value: 950000 },
    { time: "21:00", value: 1000000 },
    { time: "22:00", value: 1050000 },
    { time: "23:00", value: 1100000 },
  ],
  totalSales: [
    { time: "00:00", value: 1000 },
    { time: "01:00", value: 1100 },
    { time: "02:00", value: 1200 },
    { time: "03:00", value: 1300 },
    { time: "04:00", value: 1400 },
    { time: "05:00", value: 1500 },
    { time: "06:00", value: 1600 },
    { time: "07:00", value: 1700 },
    { time: "08:00", value: 1800 },
    { time: "09:00", value: 1900 },
    { time: "10:00", value: 2000 },
    { time: "11:00", value: 2100 },
    { time: "12:00", value: 2200 },
    { time: "13:00", value: 2300 },
    { time: "14:00", value: 2400 },
    { time: "15:00", value: 2500 },
    { time: "16:00", value: 2600 },
    { time: "17:00", value: 2700 },
    { time: "18:00", value: 2800 },
    { time: "19:00", value: 2900 },
    { time: "20:00", value: 3000 },
    { time: "21:00", value: 3100 },
    { time: "22:00", value: 3200 },
    { time: "23:00", value: 3300 },
  ],
};

let marketCapChart, salesVolumeChart, totalSalesChart; // Hold chart instances

// Market Cap Chart
export function createMarketCapChart(ctx) {
  if (marketCapChart) marketCapChart.destroy(); // Destroy previous instance if it exists
  marketCapChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: exampleData.marketCap.map((d) => d.time),
      datasets: [
        {
          label: "Market Cap ($)",
          data: exampleData.marketCap.map((d) => d.value),
          borderColor: "green",
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

// Sales Volume Chart
export function createSalesVolumeChart(ctx) {
  if (salesVolumeChart) salesVolumeChart.destroy(); // Destroy previous instance if it exists
  salesVolumeChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: exampleData.salesVolume.map((d) => d.time),
      datasets: [
        {
          label: "Sales Volume ($)",
          data: exampleData.salesVolume.map((d) => d.value),
          backgroundColor: "blue",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Total Sales Chart
export function createTotalSalesChart(ctx) {
  if (totalSalesChart) totalSalesChart.destroy(); // Destroy previous instance if it exists
  totalSalesChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: exampleData.totalSales.map((d) => d.time),
      datasets: [
        {
          label: "Total Sales",
          data: exampleData.totalSales.map((d) => d.value),
          backgroundColor: "blue",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
