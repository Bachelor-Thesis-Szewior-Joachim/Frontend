import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function EthereumDetails({ data, onNavigateToTransaction }) {

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0); // Track the current page

    const transactions = data.transactions ? data.transactions.slice(0, 20) : [];
    const transactionsPerPage = 5;
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);

    const handleTransactionAddress = (searchTerm) => {
        navigate(`/blockchain/transactions/details/transactionDetails/${searchTerm}`, { state: { searchTerm, blockchainType: 'ethereum' } });
    };

    const handleAccountAddress = (searchTerm) => {
        navigate(`/blockchain/accounts/${searchTerm}`, { state: { searchTerm, blockchainType: 'ethereum' } });
    };

    const currentTransactions = transactions.slice(
        currentPage * transactionsPerPage,
        (currentPage + 1) * transactionsPerPage
    );

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <h2>Ethereum Account Details</h2>
            <p><strong>Balance:</strong> {data.balance}</p>
            <h3>Transactions:</h3>
            {currentTransactions.length > 0 ? (
                currentTransactions.map((tx, index) => (
                    <div key={index}>
                        <p><strong>Transaction Hash:</strong>
                            <span className="clickable"
                                  onClick={() => handleTransactionAddress(tx.hash)}>{tx.hash}</span>
                        </p>
                        <p><strong>Block Number:</strong> {tx.blockNumber}</p>
                        <p><strong>Block Hash:</strong> {tx.blockHash}</p>
                        <p><strong>Timestamp:</strong> {new Date(tx.timeStamp * 1000).toLocaleString()}</p>
                        <p><strong>Nonce:</strong> {tx.nonce}</p>
                        <p><strong>Transaction Index:</strong> {tx.transactionIndex}</p>
                        <p><strong>From:</strong>
                            <span className="clickable" onClick={() => handleAccountAddress(tx.from)}>{tx.from}</span>
                        </p>
                        <p><strong>To:</strong>
                            <span className="clickable"
                                  onClick={() => handleAccountAddress(tx.to)}>{tx.to || "N/A"}</span>
                        </p>
                        <p><strong>Value:</strong> {tx.value}</p>
                        <p><strong>Gas:</strong> {tx.gas}</p>
                        <p><strong>Gas Price:</strong> {tx.gasPrice}</p>
                        <p><strong>Input:</strong> {tx.input || "None"}</p>
                        <p><strong>Method ID:</strong> {tx.methodId || "None"}</p>
                        <p><strong>Function Name:</strong> {tx.functionName || "None"}</p>
                        <p><strong>Contract Address:</strong> {tx.contractAddress || "N/A"}</p>
                        <p><strong>Cumulative Gas Used:</strong> {tx.cumulativeGasUsed}</p>
                        <p><strong>Transaction Receipt
                            Status:</strong> {tx.txReceiptStatus === "1" ? "Success" : "Failed"}</p>
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
                        <hr/>
                    </div>
                ))
            ) : (
                <p>No transactions available.</p>
            )}
            <div className="pagination">
                <button onClick={goToPreviousPage} disabled={currentPage === 0}>
                    Previous
                </button>
                <span>Page {currentPage + 1} of {totalPages}</span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default EthereumDetails;
