import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function EthereumDetails({ data }) {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0); // Track the current transaction (page)

    const transactions = data.transactions || [];
    const totalPages = transactions.length;

    const handleTransactionAddress = (searchTerm) => {
        navigate(`/blockchain/transactions/details/transactionDetails/${searchTerm}`, { state: { searchTerm, blockchainType: 'ethereum' } });
    };

    const handleAccountAddress = (searchTerm) => {
        navigate(`/blockchain/accounts/${searchTerm}`, { state: { searchTerm, blockchainType: 'ethereum' } });
    };

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

    const currentTransaction = transactions[currentPage];

    return (
        <div>
            <h2>Ethereum Account Details</h2>
            <table id="ethereumAccountDetailsTable">
                <thead>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Balance</td>
                    <td>{data.balance}</td>
                </tr>
                {currentTransaction && (
                    <>
                        <tr>
                            <td>Transaction Hash</td>
                            <td
                                className="clickable"
                                onClick={() => handleTransactionAddress(currentTransaction.hash)}
                            >
                                {currentTransaction.hash}
                            </td>
                        </tr>
                        <tr>
                            <td>Block Number</td>
                            <td>{currentTransaction.blockNumber}</td>
                        </tr>
                        <tr>
                            <td>Block Hash</td>
                            <td>{currentTransaction.blockHash}</td>
                        </tr>
                        <tr>
                            <td>Timestamp</td>
                            <td>{new Date(currentTransaction.timeStamp * 1000).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>Nonce</td>
                            <td>{currentTransaction.nonce}</td>
                        </tr>
                        <tr>
                            <td>Transaction Index</td>
                            <td>{currentTransaction.transactionIndex}</td>
                        </tr>
                        <tr>
                            <td>From</td>
                            <td
                                className="clickable"
                                onClick={() => handleAccountAddress(currentTransaction.from)}
                            >
                                {currentTransaction.from}
                            </td>
                        </tr>
                        <tr>
                            <td>To</td>
                            <td
                                className="clickable"
                                onClick={() => handleAccountAddress(currentTransaction.to || "N/A")}
                            >
                                {currentTransaction.to || "N/A"}
                            </td>
                        </tr>
                    </>
                )}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={goToPreviousPage} disabled={currentPage === 0}>
                    Previous
                </button>
                <span>
                    Page {currentPage + 1} of {totalPages}
                </span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default EthereumDetails;
