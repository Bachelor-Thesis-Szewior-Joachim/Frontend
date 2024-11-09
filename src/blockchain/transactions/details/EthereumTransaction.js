import React from 'react';

function EthereumTransaction({ transaction }) {
    return (
        <div>
            <h3>Ethereum Transaction Details</h3>
            <p><strong>Block Number:</strong> {transaction.blockNumber}</p>
            <p><strong>Hash:</strong> {transaction.hash}</p>
            <p><strong>From:</strong> {transaction.from}</p>
            <p><strong>To:</strong> {transaction.to || "N/A"}</p>
            <p><strong>Value:</strong> {transaction.value}</p>
            <p><strong>Gas:</strong> {transaction.gas}</p>
            <p><strong>Gas Price:</strong> {transaction.gasPrice}</p>
        </div>
    );
}

export default EthereumTransaction;
