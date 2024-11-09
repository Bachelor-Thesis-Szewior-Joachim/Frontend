import React from 'react';

function SolanaTransaction({ transaction }) {
    return (
        <div>
            <h3>Solana Transaction Details</h3>
            <p><strong>Block Time:</strong> {transaction.blockTime}</p>
            <p><strong>Slot:</strong> {transaction.slot}</p>
            <p><strong>Signatures:</strong> {transaction.signatures.join(", ")}</p>
            <p><strong>Recent Block Hash:</strong> {transaction.message.recentBlockHash}</p>

            <h4>Account Keys</h4>
            <ul>
                {transaction.message.accountKeys.map((key, index) => (
                    <li key={index}>{key}</li>
                ))}
            </ul>

            <h4>Header</h4>
            <p><strong>Number of Required Signatures:</strong> {transaction.message.header.numRequiredSignatures}</p>
            <p><strong>Number of Readonly Signed Accounts:</strong> {transaction.message.header.numReadonlySignedAccounts}</p>
            <p><strong>Number of Readonly Unsigned Accounts:</strong> {transaction.message.header.numReadonlyUnsignedAccounts}</p>

            <h4>Instructions</h4>
            {transaction.message.instructions.map((instruction, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <p><strong>Program ID Index:</strong> {instruction.programIdIndex}</p>
                    <p><strong>Accounts:</strong> {instruction.accounts.join(", ") || "None"}</p>
                    <p><strong>Data:</strong> {instruction.data}</p>
                    <p><strong>Stack Height:</strong> {instruction.stackHeight !== null ? instruction.stackHeight : "N/A"}</p>
                </div>
            ))}
        </div>
    );
}

export default SolanaTransaction;
