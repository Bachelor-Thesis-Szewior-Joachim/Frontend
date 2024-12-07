import React, { useState } from "react";
import axios from "axios";
import "./predictPrices.css";
import Header from "../../header";

const PredictPrices = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [response, setResponse] = useState(null);

    const handlePredictPrices = async () => {
        if (!selectedDate) {
            alert("Please select a date.");
            return;
        }

        try {
            const token = localStorage.getItem("token"); // Get JWT token
            const headers = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            };

            // Prepare the request payload
            const payload = {
                dateInput: selectedDate, // Send the selected date in "YYYY-MM-DD" format
            };

            const response = await axios.post(
                "http://localhost:8080/predict", // Java backend endpoint
                payload,
                { headers }
            );

            if (response.data.error) {
                alert(`Error: ${response.data.error}`);
            } else {
                setResponse(response.data);
            }
        } catch (error) {
            console.error("Error predicting prices:", error);
            alert("Failed to predict prices. Please check the console for more details.");
        }
    };

    return (
        <div>
            <Header />
            <div className="price-prediction">
                <h2>Price Prediction</h2>
                <label htmlFor="datePicker">Select a date:</label>
                <input
                    type="date"
                    id="datePicker"
                    value={selectedDate}
                    min={new Date().toISOString().split("T")[0]}
                    max={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <button onClick={handlePredictPrices}>Predict Prices</button>
                {response && (
                    <div className="prediction-results">
                        <h3>Price Prediction Results</h3>
                        <ul>
                            {Object.entries(response).map(([key, value]) => (
                                <li key={key}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                                    {Array.isArray(value) && value.length > 0 && Array.isArray(value[0])
                                        ? `$${value[0][0].toFixed(2)}`
                                        : "Data not available"}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PredictPrices;
