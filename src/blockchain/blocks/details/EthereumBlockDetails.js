import React, { useState } from "react";

function EthereumBlockDetails({ data }) {
    const [currentTransactionPage, setCurrentTransactionPage] = useState(0); // Track transaction page
    const [currentWithdrawalPage, setCurrentWithdrawalPage] = useState(0); // Track withdrawal page
    const itemsPerPage = 5; // Items per page

    const transactions = data.transactions || [];
    const withdrawals = data.withdrawals || [];
    const totalTransactionPages = Math.ceil(transactions.length / itemsPerPage);
    const totalWithdrawalPages = Math.ceil(withdrawals.length / itemsPerPage);

    // Calculate the current set of transactions and withdrawals
    const currentTransactions = transactions.slice(
        currentTransactionPage * itemsPerPage,
        (currentTransactionPage + 1) * itemsPerPage
    );

    const currentWithdrawals = withdrawals.slice(
        currentWithdrawalPage * itemsPerPage,
        (currentWithdrawalPage + 1) * itemsPerPage
    );

    const goToPreviousTransactionPage = () => {
        if (currentTransactionPage > 0) {
            setCurrentTransactionPage(currentTransactionPage - 1);
        }
    };

    const goToNextTransactionPage = () => {
        if (currentTransactionPage < totalTransactionPages - 1) {
            setCurrentTransactionPage(currentTransactionPage + 1);
        }
    };

    const goToPreviousWithdrawalPage = () => {
        if (currentWithdrawalPage > 0) {
            setCurrentWithdrawalPage(currentWithdrawalPage - 1);
        }
    };

    const goToNextWithdrawalPage = () => {
        if (currentWithdrawalPage < totalWithdrawalPages - 1) {
            setCurrentWithdrawalPage(currentWithdrawalPage + 1);
        }
    };

    return (
        <div className="center-container">
            <h2>Ethereum Block Details</h2>
            <p><strong>Block Number:</strong> {parseInt(data.number, 16)}</p>
            <p><strong>Block Hash:</strong> {data.hash}</p>
            <p><strong>Timestamp:</strong> {new Date(parseInt(data.timestamp, 16) * 1000).toLocaleString()}</p>
            <p><strong>Parent Hash:</strong> {data.parentHash}</p>
            <p><strong>State Root:</strong> {data.stateRoot}</p>
            <p><strong>Transactions Root:</strong> {data.transactionsRoot}</p>
            <p><strong>Gas Used:</strong> {parseInt(data.gasUsed, 16)}</p>
            <p><strong>Gas Limit:</strong> {parseInt(data.gasLimit, 16)}</p>

            <h3>Transactions</h3>
            <div>
                {currentTransactions.length > 0 ? (
                <table id="ethereumTransactionsTable">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Transaction Hash</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentTransactions.map((tx, index) => (
                        <tr key={index}>
                            <td>{currentTransactionPage * itemsPerPage + index + 1}</td>
                            <td>{tx}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No transactions available.</p>
            )}
            </div>
            <div className="pagination">
                <button
                    onClick={goToPreviousTransactionPage}
                    disabled={currentTransactionPage === 0}
                >
                    Previous Transactions
                </button>
                <span>
                    Page {currentTransactionPage + 1} of {totalTransactionPages}
                </span>
                <button
                    onClick={goToNextTransactionPage}
                    disabled={currentTransactionPage === totalTransactionPages - 1}
                >
                    Next Transactions
                </button>
            </div>

            <h3>Withdrawals</h3>
            {currentWithdrawals.length > 0 ? (
                <table id="ethereumWithdrawalsTable">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Validator Index</th>
                        <th>Address</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentWithdrawals.map((wd, index) => (
                        <tr key={index}>
                            <td>{currentWithdrawalPage * itemsPerPage + index + 1}</td>
                            <td>{parseInt(wd.validatorIndex, 16)}</td>
                            <td>{wd.address}</td>
                            <td>{parseInt(wd.amount, 16)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No withdrawals available.</p>
            )}

            <div className="pagination">
                <button
                    onClick={goToPreviousWithdrawalPage}
                    disabled={currentWithdrawalPage === 0}
                >
                    Previous Withdrawals
                </button>
                <span>
                    Page {currentWithdrawalPage + 1} of {totalWithdrawalPages}
                </span>
                <button
                    onClick={goToNextWithdrawalPage}
                    disabled={currentWithdrawalPage === totalWithdrawalPages - 1}
                >
                    Next Withdrawals
                </button>
            </div>
        </div>
    );
}

export default EthereumBlockDetails;
