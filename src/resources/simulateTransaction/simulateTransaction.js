import React, { useState } from "react";
import axios from "axios";
import "./simulateTransaction.css";
import Header from "../../header";

const SimulateTransaction = () => {
    const [response, setResponse] = useState(null);
    const [airdropMessage, setAirdropMessage] = useState("");

    const handleCreateTransaction = async () => {
        const publicKey = localStorage.getItem("publicKey");

        if (!publicKey) {
            alert("Public key not found. Please log in.");
            return;
        }

        try {
            const token = localStorage.getItem("token"); // Get JWT token
            const headers = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            };

            const response = await axios.get(
                `http://localhost:8080/client/simulateTransaction?publicKey=${publicKey}`,
                { headers }
            );

            setResponse(response.data); // Set API response
        } catch (error) {
            console.error("Error simulating transaction:", error);
            alert("Failed to simulate transaction. Please check the console for more details.");
        }
    };

    const handleRequestAirdrop = async () => {
        const publicKey = localStorage.getItem("publicKey");

        if (!publicKey) {
            alert("Public key not found. Please log in.");
            return;
        }

        try {
            const token = localStorage.getItem("token"); // Get JWT token
            const headers = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            };

            await axios.get(
                `http://localhost:8080/client/requestAirdrop?publicKey=${publicKey}`,
                { headers }
            );

            setAirdropMessage("Airdrop successfully");
        } catch (error) {
            console.error("Error requesting airdrop:", error);
            setAirdropMessage("Failed to make airdrop operation. Limit one per day");
        }
    };

    return (
        <div>
            <Header />
            <div className="airdrop-transaction-simulator">
                <h2>Transaction Simulator</h2>
                <button onClick={handleCreateTransaction}>Create Transaction</button>
                <button className="airdrop-request-button" onClick={handleRequestAirdrop}>
                    Request Airdrop
                </button>
                <div className="airdrop-message">
                    {airdropMessage && <p>{airdropMessage}</p>}
                </div>
                <div className="airdrop-transaction-response">
                    <h3>Transaction Response</h3>
                    <pre>{response?.transaction || "No transaction data available"}</pre>
                </div>
            </div>
        </div>
    );
};

export default SimulateTransaction;
