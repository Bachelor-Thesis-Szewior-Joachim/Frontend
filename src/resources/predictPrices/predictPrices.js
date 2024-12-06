import React, { useState } from "react";
import "./predictPrices.css";
import Header from "../../header";

const PredictPrices = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [response, setResponse] = useState(null);

    const handlePredictPrices = () => {
        if (!selectedDate) {
            alert("Please select a date.");
            return;
        }

        // Example response
        const exampleResponse = {
            Bitcoin: "90,000 USD",
            Ethereum: "2,800 USD",
            Solana: "35 USD",
        };

        setResponse(exampleResponse);
    };

    return (
        <div>
            <Header/>
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
                    <div>
                        <h3>Price Prediction Results</h3>
                        <ul>
                            <li>Bitcoin: {response.Bitcoin}</li>
                            <li>Ethereum: {response.Ethereum}</li>
                            <li>Solana: {response.Solana}</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>

    );
};

export default PredictPrices;
