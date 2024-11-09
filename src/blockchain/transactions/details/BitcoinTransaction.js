import React from "react";

function BitcoinTransaction({ transaction }) {
        return (
            <div>
                    <h3>Bitcoin Transaction Details</h3>
                    <p><strong>Block Hash:</strong> {transaction.blockHash}</p>
                    <p><strong>Block Height:</strong> {transaction.blockHeight}</p>
                    <p><strong>Block Index:</strong> {transaction.blockIndex}</p>
                    <p><strong>Transaction Hash:</strong> {transaction.hash}</p>
                    <p><strong>Addresses:</strong> {transaction.addresses.join(", ")}</p>
                    <p><strong>Total:</strong> {transaction.total}</p>
                    <p><strong>Fees:</strong> {transaction.fees}</p>
                    <p><strong>Size:</strong> {transaction.size}</p>
                    <p><strong>Virtual Size (vsize):</strong> {transaction.vsize}</p>
                    <p><strong>Preference:</strong> {transaction.preference}</p>
                    <p><strong>Confirmed:</strong> {new Date(transaction.confirmed).toLocaleString()}</p>
                    <p><strong>Received:</strong> {new Date(transaction.received).toLocaleString()}</p>
                    <p><strong>Version:</strong> {transaction.ver}</p>
                    <p><strong>Double Spend:</strong> {transaction.doubleSpend ? "Yes" : "No"}</p>
                    <p><strong>Inputs Size (vinSz):</strong> {transaction.vinSz}</p>
                    <p><strong>Outputs Size (voutSz):</strong> {transaction.voutSz}</p>
                    <p><strong>Data Protocol:</strong> {transaction.dataProtocol || "Unknown"}</p>
                    <p><strong>Confirmations:</strong> {transaction.confirmations}</p>
                    <p><strong>Confidence:</strong> {transaction.confidence}</p>

                    <h4>Inputs</h4>
                    {transaction.inputsDto.map((input, index) => (
                        <div key={index}>
                                <p><strong>Output Index:</strong> {input.outputIndex}</p>
                                <p><strong>Script Type:</strong> {input.scriptType}</p>
                                <p><strong>Script:</strong> {input.script}</p>
                                <p><strong>Sequence:</strong> {input.sequence}</p>
                                <p><strong>Age:</strong> {input.age}</p>
                        </div>
                    ))}

                    <h4>Outputs</h4>
                    {transaction.outputsDto.map((output, index) => (
                        <div key={index}>
                                <p><strong>Value:</strong> {output.value}</p>
                                <p><strong>Script:</strong> {output.script}</p>
                                <p><strong>Addresses:</strong> {output.addresses ? output.addresses.join(", ") : "N/A"}</p>
                                <p><strong>Script Type:</strong> {output.scriptType}</p>
                                <p><strong>Data Hex:</strong> {output.dataHex || "N/A"}</p>
                        </div>
                    ))}
            </div>
        );
}

export default BitcoinTransaction;
