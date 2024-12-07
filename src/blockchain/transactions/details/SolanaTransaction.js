import React from 'react';
import "./transactionDetails.css"

function SolanaTransaction({ transaction }) {
        return (
            <div className="solanaTransactionDetails-container">
                    <div className="solanaTransactionDetails-group">
                            <p className="solanaTransactionDetails-item"><strong>Block Time:</strong> {transaction.blockTime}</p>
                            <p className="solanaTransactionDetails-item"><strong>Slot:</strong> {transaction.slot}</p>
                            <p className="solanaTransactionDetails-item"><strong>Signatures:</strong> {transaction.signatures.join(", ")}</p>
                            <p className="solanaTransactionDetails-item"><strong>Recent Block Hash:</strong> {transaction.message.recentBlockHash}</p>
                    </div>

                    <h3 className="solanaTransactionDetails-subtitle">Account Keys</h3>
                    <ul className="solanaTransactionDetails-list">
                            {transaction.message.accountKeys.map((key, index) => (
                                <li key={index} className="solanaTransactionDetails-listItem">{key}</li>
                            ))}
                    </ul>

                    <h3 className="solanaTransactionDetails-subtitle">Header</h3>
                    <div className="solanaTransactionDetails-group">
                            <p className="solanaTransactionDetails-item"><strong>Number of Required Signatures:</strong> {transaction.message.header.numRequiredSignatures}</p>
                            <p className="solanaTransactionDetails-item"><strong>Number of Readonly Signed Accounts:</strong> {transaction.message.header.numReadonlySignedAccounts}</p>
                            <p className="solanaTransactionDetails-item"><strong>Number of Readonly Unsigned Accounts:</strong> {transaction.message.header.numReadonlyUnsignedAccounts}</p>
                    </div>

                    <h3 className="solanaTransactionDetails-subtitle">Instructions</h3>
                    <div className="solanaTransactionDetails-instructions">
                            {transaction.message.instructions.map((instruction, index) => (
                                <div key={index} className="solanaTransactionDetails-instruction">
                                        <p><strong>Program ID Index:</strong> {instruction.programIdIndex}</p>
                                        <p><strong>Accounts:</strong> {instruction.accounts.join(", ") || "None"}</p>
                                        <p><strong>Data:</strong> {instruction.data}</p>
                                        <p><strong>Stack Height:</strong> {instruction.stackHeight !== null ? instruction.stackHeight : "N/A"}</p>
                                </div>
                            ))}
                    </div>
            </div>
        );
}

export default SolanaTransaction;
