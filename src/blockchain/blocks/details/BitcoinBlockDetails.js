import React from "react";

function BitcoinBlockDetails({ data }) {
    return (
        <div>
            <h2>Bitcoin Block Details</h2>
            <p><strong>Hash:</strong> {data.hash}</p>
            <p><strong>Height:</strong> {data.height}</p>
            <p><strong>Chain:</strong> {data.chain}</p>
            <p><strong>Total:</strong> {data.total}</p>
            <p><strong>Fees:</strong> {data.fees}</p>
            <p><strong>Size:</strong> {data.size}</p>
            <p><strong>Vsize:</strong> {data.vsize}</p>
            <p><strong>Version:</strong> {data.ver}</p>
            <p><strong>Time:</strong> {new Date(data.time).toLocaleString()}</p>
            <p><strong>Received Time:</strong> {new Date(data.received_time).toLocaleString()}</p>
            <p><strong>Relayed By:</strong> {data.relayed_by}</p>
            <p><strong>Bits:</strong> {data.bits}</p>
            <p><strong>Nonce:</strong> {data.nonce}</p>
            <p><strong>Number of Transactions:</strong> {data.n_tx}</p>

            {data.prev_block_url && (
                <p><strong>Previous Block URL:</strong> <a href={data.prev_block_url} target="_blank" rel="noopener noreferrer">Previous Block</a></p>
            )}
            {data.tx_url && (
                <p><strong>Transaction URL:</strong> <a href={data.tx_url} target="_blank" rel="noopener noreferrer">Transaction Details</a></p>
            )}
        </div>
    );
}

export default BitcoinBlockDetails;
