import React, { useState } from "react";

function SolanaBlockDetails({ data }) {
    const [currentPage, setCurrentPage] = useState(0); // Track the current page
    const transactionsPerPage = 5; // Display 5 transactions per page
    const transactions = data.transactions || [];
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);

    // Calculate the current set of transactions
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
        <div className="center-container">
            <h2>Solana Block Details</h2>
            <p><strong>Block Height:</strong> {data.blockHeight}</p>
            <p><strong>Block Time:</strong> {new Date(data.blockTime * 1000).toLocaleString()}</p>
            <p><strong>Block Hash:</strong> {data.blockHash}</p>
            <p><strong>Parent Slot:</strong> {data.parentSlot}</p>
            <p><strong>Previous Hash:</strong> {data.previousHash}</p>
            <h3>Rewards</h3>
            <p><strong>Commission:</strong> {data.rewardsDto.commission || "N/A"}</p>
            <p><strong>Lamports:</strong> {data.rewardsDto.lamports}</p>
            <p><strong>Post Balance:</strong> {data.rewardsDto.postBalance}</p>
            <p><strong>Pubkey:</strong> {data.rewardsDto.pubkey}</p>
            <p><strong>Reward Type:</strong> {data.rewardsDto.rewardType}</p>

            <h3>Transactions</h3>
            {currentTransactions.length > 0 ? (
                <table id="solanaTransactionsBlockDetailsTable">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Transaction</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentTransactions.map((tx, index) => (
                        <tr key={index}>
                            <td>{currentPage * transactionsPerPage + index + 1}</td>
                            <td>{tx}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No transactions available.</p>
            )}

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

export default SolanaBlockDetails;
