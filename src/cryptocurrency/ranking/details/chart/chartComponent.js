import React, { useEffect, useRef } from "react";
import { createChart, destroyChart } from "./script";
import "./chartComponent.css";

const ChartComponent = ({ historicalData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      createChart(canvasRef.current, historicalData);
    }

    return () => {
      destroyChart();
    };
  }, [historicalData]);

  return (
      <div className="chart-container">
        <h2>Price Chart</h2>
        <canvas ref={canvasRef} className="chart-canvas"></canvas>
      </div>
  );
};

export default ChartComponent;
