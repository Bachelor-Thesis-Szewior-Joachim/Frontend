import React from "react";

function SolanaBlockDetails({ data }) {

    return (
        <div>
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
            {data.transactions ? (
                <ul>
                    {data.transactions.map((tx, index) => (
                        <li key={index}>{tx}</li>
                    ))}
                </ul>
            ) : (
                <p>No transactions available.</p>
            )}
        </div>
    );
}

export default SolanaBlockDetails;
