import React from "react";

function SolanaDetails({ data, onNavigateToTransaction, onNavigateToAccount }) {
    return (
        <div>
            <h2>Solana Account Details</h2>
            <p><strong>Lamports:</strong> {data.lamports}</p>
            <p><strong>Slot:</strong> {data.slot}</p>
            <p><strong>Owner:</strong> {data.owner}</p>
            <p><strong>Data:</strong> {data.data}</p>
            <p><strong>Executable:</strong> {data.executable ? "Yes" : "No"}</p>
            <p><strong>Rent Epoch:</strong> {data.rentEpoch}</p>
            <p><strong>Space:</strong> {data.space}</p>
            <button onClick={() => onNavigateToTransaction('exampleTransactionHash')}>Go to Transaction</button>
            <button onClick={() => onNavigateToAccount(data.owner)}>Go to Owner Account</button>
        </div>
    );
}

export default SolanaDetails;
