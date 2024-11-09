import React from "react";

function BitcoinTransaction({ transaction }) {
    return (
        <div>
            <h3>Bitcoin Transaction Details</h3>
            <p><strong>Block Number:</strong> {transaction.blockNumber}</p>
            <p><strong>Block Hash:</strong> {transaction.blockHash}</p>
            <p><strong>Timestamp:</strong> {new Date(transaction.timeStamp * 1000).toLocaleString()}</p>
            <p><strong>Transaction Hash:</strong> {transaction.hash}</p>
            <p><strong>Nonce:</strong> {transaction.nonce}</p>
            <p><strong>Transaction Index:</strong> {transaction.transactionIndex}</p>
            <p><strong>From:</strong> {transaction.from}</p>
            <p><strong>To:</strong> {transaction.to || "N/A"}</p>
            <p><strong>Value:</strong> {transaction.value}</p>
            <p><strong>Gas:</strong> {transaction.gas}</p>
            <p><strong>Gas Price:</strong> {transaction.gasPrice}</p>
            <p><strong>Input:</strong> {transaction.input || "None"}</p>
            <p><strong>Method ID:</strong> {transaction.methodId || "None"}</p>
            <p><strong>Function Name:</strong> {transaction.functionName || "None"}</p>
            <p><strong>Contract Address:</strong> {transaction.contractAddress || "N/A"}</p>
            <p><strong>Cumulative Gas Used:</strong> {transaction.cumulativeGasUsed}</p>
            <p><strong>Transaction Receipt Status:</strong> {transaction.txReceiptStatus === "1" ? "Success" : "Failed"}</p>
            <p><strong>Gas Used:</strong> {transaction.gasUsed}</p>
            <p><strong>Confirmations:</strong> {transaction.confirmations}</p>
            <p><strong>Is Error:</strong> {transaction.isError === "1" ? "Yes" : "No"}</p>
            <p><strong>Token Name:</strong> {transaction.tokenName || "N/A"}</p>
            <p><strong>Token Symbol:</strong> {transaction.tokenSymbol || "N/A"}</p>
            <p><strong>Token Decimal:</strong> {transaction.tokenDecimal || "N/A"}</p>
            <p><strong>Token ID:</strong> {transaction.tokenId || "N/A"}</p>
            <p><strong>Trace ID:</strong> {transaction.traceId || "N/A"}</p>
            <p><strong>Type:</strong> {transaction.type || "N/A"}</p>
            <p><strong>Error Code:</strong> {transaction.errorCode || "N/A"}</p>
        </div>
    );
}

export default BitcoinTransaction;
