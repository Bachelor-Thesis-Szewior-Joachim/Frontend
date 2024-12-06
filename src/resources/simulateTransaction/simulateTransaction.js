import React, { useState } from "react";
import "./simulateTransaction.css";
import Header from "../../header";

const SimulateTransaction = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState(null);

    const handleCreateTransaction = () => {
        if (!message.trim()) {
            alert("Please enter a message.");
            return;
        }

        // Example response
        const exampleResponse = {
            transaction:
                "Serialized Transaction: AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEC2OpZQ+iZXUa8+YCmRKneaTYa6kp5lL28evjg9z657hsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMpkEoNEafulr0bq7vab4wyKWG1MBx6FfCFOuI9e8l1fAQECAAAMAgAAAOgDAAAAAAAA",
        };

        setResponse(exampleResponse);
    };

    return (
        <div>
            <Header />
            <div className="transaction-simulator">
                <h2>Transaction Simulator</h2>
                <textarea
                    placeholder="Enter your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button onClick={handleCreateTransaction}>Create Transaction</button>
                {response && (
                    <div className="response">
                        <h3>Transaction Response</h3>
                        <pre>{response.transaction}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimulateTransaction;
