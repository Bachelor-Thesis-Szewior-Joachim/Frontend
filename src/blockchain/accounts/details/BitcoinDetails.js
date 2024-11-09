import React from "react";

function BitcoinDetails({ data, onNavigateToTransaction, onNavigateToAccount }) {
    return (
        <div>
            <h2>Bitcoin Account Details</h2>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>Total Received:</strong> {data.total_received}</p>
            <p><strong>Total Sent:</strong> {data.total_sent}</p>
            <p><strong>Balance:</strong> {data.balance}</p>
            <p><strong>Unconfirmed Balance:</strong> {data.unconfirmed_balance}</p>
            <p><strong>Final Balance:</strong> {data.final_balance}</p>
            <p><strong>Number of Transactions:</strong> {data.n_tx}</p>
            <p><strong>Unconfirmed Transactions:</strong> {data.unconfirmed_n_tx}</p>
            <p><strong>Final Number of Transactions:</strong> {data.final_n_tx}</p>
            {data.transactions ? (
                <div>
                    <h3>Transactions:</h3>
                </div>
            ) : (
                <p>No transactions available.</p>
            )}
        </div>
    );
}

export default BitcoinDetails;
