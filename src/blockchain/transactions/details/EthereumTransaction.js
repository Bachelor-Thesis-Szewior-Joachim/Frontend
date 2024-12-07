import React from 'react';
import './transactionDetails.css'

function EthereumTransaction({ transaction }) {
        return (
            <div className="ethereumTransactionDetails-container">
                    <h2 className="ethereumTransactionDetails-title">Ethereum Transaction Details</h2>
                    <div className="ethereumTransactionDetails-group">
                            <p className="ethereumTransactionDetails-item"><strong>Block Number:</strong> {parseInt(transaction.blockNumber, 16)}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Block Hash:</strong> {transaction.blockHash}</p>
                            <p className="ethereumTransactionDetails-item">
                                    <strong>Timestamp:</strong> {transaction.timeStamp ? new Date(parseInt(transaction.timeStamp, 16) * 1000).toLocaleString() : "N/A"}
                            </p>
                            <p className="ethereumTransactionDetails-item"><strong>Hash:</strong> {transaction.hash}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Nonce:</strong> {parseInt(transaction.nonce, 16)}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Transaction Index:</strong> {parseInt(transaction.transactionIndex, 16)}</p>
                            <p className="ethereumTransactionDetails-item"><strong>From:</strong> {transaction.from}</p>
                            <p className="ethereumTransactionDetails-item"><strong>To:</strong> {transaction.to || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Value:</strong> {parseInt(transaction.value, 16)}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Gas:</strong> {parseInt(transaction.gas, 16)}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Gas Price:</strong> {parseInt(transaction.gasPrice, 16)}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Input:</strong> {transaction.input || "None"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Method ID:</strong> {transaction.methodId || "None"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Function Name:</strong> {transaction.functionName || "None"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Contract Address:</strong> {transaction.contractAddress || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Cumulative Gas Used:</strong> {transaction.cumulativeGasUsed || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Transaction Receipt Status:</strong> {transaction.txReceiptStatus || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Gas Used:</strong> {transaction.gasUsed || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Confirmations:</strong> {transaction.confirmations || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Is Error:</strong> {transaction.isError === "1" ? "Yes" : "No"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Token Name:</strong> {transaction.tokenName || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Token Symbol:</strong> {transaction.tokenSymbol || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Token Decimal:</strong> {transaction.tokenDecimal || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Token ID:</strong> {transaction.tokenId || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Trace ID:</strong> {transaction.traceId || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Type:</strong> {transaction.type || "N/A"}</p>
                            <p className="ethereumTransactionDetails-item"><strong>Error Code:</strong> {transaction.errorCode || "N/A"}</p>
                    </div>
            </div>
        );
}

export default EthereumTransaction;
