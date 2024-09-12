import React, { useEffect, useRef } from "react";
import { createChart, destroyChart } from "./script";
import "./chartComponent.css";

const ChartComponent = () => {
  const canvasRef = useRef(null); // Reference for the canvas

  useEffect(() => {
    if (canvasRef.current) {
      createChart(canvasRef.current);
    }

    return () => {
      destroyChart();
    };
  }, []);

  return (
    <div className="chart-container">
      <h2>Bitcoin Price Chart (Bar)</h2>
      <canvas
        ref={canvasRef} // Attach the canvas DOM node to the ref
        className="chart-canvas"
      ></canvas>
    </div>
  );
};

export default ChartComponent;
