import React from "react";

function EthereumBlockDetails({ data }) {

    console.log(data)

    return (
        <div>
            <h2>Ethereum Block Details</h2>
            <p><strong>Block Number:</strong> {data.blockNumber}</p>
            <p><strong>Block Hash:</strong> {data.blockHash}</p>
            <p><strong>Timestamp:</strong> {new Date(data.timeStamp * 1000).toLocaleString()}</p>
            <p><strong>Hash:</strong> {data.hash}</p>
            <p><strong>Nonce:</strong> {data.nonce}</p>

            <h3>Transactions</h3>
            {data.transactions ? (
                <ul>
                    {data.transactions.map((tx, index) => (
                        <li key={index}>
                            <p><strong>Transaction Hash:</strong> {tx.hash}</p>
                            <p><strong>Block Number:</strong> {tx.blockNumber}</p>
                            <p><strong>Block Hash:</strong> {tx.blockHash}</p>
                            <p><strong>Timestamp:</strong> {new Date(tx.timeStamp * 1000).toLocaleString()}</p>
                            <p><strong>Nonce:</strong> {tx.nonce}</p>
                            <p><strong>Transaction Index:</strong> {tx.transactionIndex}</p>
                            <p><strong>From:</strong> {tx.from}</p>
                            <p><strong>To:</strong> {tx.to || "N/A"}</p>
                            <p><strong>Value:</strong> {tx.value}</p>
                            <p><strong>Gas:</strong> {tx.gas}</p>
                            <p><strong>Gas Price:</strong> {tx.gasPrice}</p>
                            <p><strong>Input:</strong> {tx.input || "None"}</p>
                            <p><strong>Method ID:</strong> {tx.methodId || "N/A"}</p>
                            <p><strong>Function Name:</strong> {tx.functionName || "N/A"}</p>
                            <p><strong>Contract Address:</strong> {tx.contractAddress || "N/A"}</p>
                            <p><strong>Cumulative Gas Used:</strong> {tx.cumulativeGasUsed}</p>
                            <p><strong>Transaction Receipt Status:</strong> {tx.txReceiptStatus === "1" ? "Success" : "Failed"}</p>
                            <p><strong>Gas Used:</strong> {tx.gasUsed}</p>
                            <p><strong>Confirmations:</strong> {tx.confirmations}</p>
                            <p><strong>Is Error:</strong> {tx.isError === "1" ? "Yes" : "No"}</p>
                            <p><strong>Token Name:</strong> {tx.tokenName || "N/A"}</p>
                            <p><strong>Token Symbol:</strong> {tx.tokenSymbol || "N/A"}</p>
                            <p><strong>Token Decimal:</strong> {tx.tokenDecimal || "N/A"}</p>
                            <p><strong>Token ID:</strong> {tx.tokenId || "N/A"}</p>
                            <p><strong>Trace ID:</strong> {tx.traceId || "N/A"}</p>
                            <p><strong>Type:</strong> {tx.type || "N/A"}</p>
                            <p><strong>Error Code:</strong> {tx.errorCode || "N/A"}</p>
                            <hr />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No transactions available.</p>
            )}
        </div>
    );
}

export default EthereumBlockDetails;
