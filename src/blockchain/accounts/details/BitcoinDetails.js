import React from "react";

function BitcoinDetails({ data, onNavigateToTransaction, onNavigateToAccount }) {
    return (
        <div>
            <h2>Bitcoin Account Details</h2>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>Total Received:</strong> {data.total_received}</p>
            <p><strong>Total Sent:</strong> {data.total_sent}</p>
            <p><strong>Balance:</strong> {data.balance}</p>
            <p><strong>Number of Transactions:</strong> {data.n_tx}</p>
        </div>
    );
}

export default BitcoinDetails;
