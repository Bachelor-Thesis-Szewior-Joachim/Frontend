import React from "react";

function EthereumDetails({ data, onNavigateToTransaction, onNavigateToAccount }) {
    return (
        <div>
            <h2>Ethereum Account Details</h2>
            <p><strong>Balance:</strong> {data.balance}</p>
            <h3>Transactions:</h3>
            {data.transactions ? (
                data.transactions.map((tx, index) => (
                    <div key={index}>
                        <p><strong>Transaction Hash:</strong>
                            <span className="clickable" onClick={() => onNavigateToTransaction(tx.hash)}>{tx.hash}</span>
                        </p>
                        <p><strong>Block Number:</strong> {tx.blockNumber}</p>
                        <p><strong>From:</strong>
                            <span className="clickable" onClick={() => onNavigateToAccount(tx.from)}>{tx.from}</span>
                        </p>
                        <p><strong>To:</strong>
                            <span className="clickable" onClick={() => onNavigateToAccount(tx.to)}>{tx.to}</span>
                        </p>
                        <p><strong>Value:</strong> {tx.value}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No transactions available.</p>
            )}
        </div>
    );
}

export default EthereumDetails;
