import React from 'react';

const BitcoinDetailsComponent = ({ bitcoinData }) => {
    if (!bitcoinData) return <p>Loading Bitcoin details...</p>;

    return (
        <div className="bitcoin-details">
            <h3>Bitcoin Network Details</h3>
            <p>Block Height: {bitcoinData.height}</p>
            <p>Hash: {bitcoinData.hash}</p>
            <p>Timestamp: {new Date(bitcoinData.time).toLocaleString()}</p>
            <p>Peer Count: {bitcoinData.peer_count}</p>
            <p>Unconfirmed Transactions: {bitcoinData.unconfirmed_count}</p>
            <p>High Fee per KB: {bitcoinData.high_fee_per_kb}</p>
            <p>Medium Fee per KB: {bitcoinData.medium_fee_per_kb}</p>
            <p>Low Fee per KB: {bitcoinData.low_fee_per_kb}</p>
            <a href={bitcoinData.latest_url} target="_blank" rel="noopener noreferrer">Latest Block</a>
            <a href={bitcoinData.previous_url} target="_blank" rel="noopener noreferrer">Previous Block</a>
        </div>
    );
};

export default BitcoinDetailsComponent;
