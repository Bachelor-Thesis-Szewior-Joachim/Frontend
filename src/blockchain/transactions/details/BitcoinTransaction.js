import React from "react";
import './transactionDetails.css'


function BitcoinTransaction({ transaction }) {
    return (
        <div className="bitcoinTransactionDetails-container">
            <div className="bitcoinTransactionDetails-group">
                <p className="bitcoinTransactionDetails-item"><strong>Block Hash:</strong> {transaction.blockHash}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Block Height:</strong> {transaction.blockHeight}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Block Index:</strong> {transaction.blockIndex}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Transaction Hash:</strong> {transaction.hash}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Addresses:</strong> {transaction.addresses.join(", ")}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Total:</strong> {transaction.total}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Fees:</strong> {transaction.fees}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Size:</strong> {transaction.size}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Virtual Size (vsize):</strong> {transaction.vsize}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Preference:</strong> {transaction.preference}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Confirmed:</strong> {new Date(transaction.confirmed).toLocaleString()}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Received:</strong> {new Date(transaction.received).toLocaleString()}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Version:</strong> {transaction.ver}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Double Spend:</strong> {transaction.doubleSpend ? "Yes" : "No"}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Inputs Size (vinSz):</strong> {transaction.vinSz}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Outputs Size (voutSz):</strong> {transaction.voutSz}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Data Protocol:</strong> {transaction.dataProtocol || "Unknown"}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Confirmations:</strong> {transaction.confirmations}</p>
                <p className="bitcoinTransactionDetails-item"><strong>Confidence:</strong> {transaction.confidence}</p>
            </div>

            <h3 className="bitcoinTransactionDetails-section-title">Inputs</h3>
            <div className="bitcoinTransactionDetails-group">
                {transaction.inputsDto.map((input, index) => (
                    <div key={index} className="bitcoinTransactionDetails-item-group">
                        <p className="bitcoinTransactionDetails-item"><strong>Output Index:</strong> {input.outputIndex}</p>
                        <p className="bitcoinTransactionDetails-item"><strong>Script Type:</strong> {input.scriptType}</p>
                        <p className="bitcoinTransactionDetails-item"><strong>Script:</strong> {input.script}</p>
                        <p className="bitcoinTransactionDetails-item"><strong>Sequence:</strong> {input.sequence}</p>
                        <p className="bitcoinTransactionDetails-item"><strong>Age:</strong> {input.age}</p>
                    </div>
                ))}
            </div>

            <h3 className="bitcoinTransactionDetails-section-title">Outputs</h3>
            <div className="bitcoinTransactionDetails-group">
                {transaction.outputsDto.map((output, index) => (
                    <div key={index} className="bitcoinTransactionDetails-item-group">
                        <p className="bitcoinTransactionDetails-item"><strong>Value:</strong> {output.value}</p>
                        <p className="bitcoinTransactionDetails-item"><strong>Script:</strong> {output.script}</p>
                        <p className="bitcoinTransactionDetails-item">
                            <strong>Addresses:</strong> {output.addresses ? output.addresses.join(", ") : "N/A"}
                        </p>
                        <p className="bitcoinTransactionDetails-item"><strong>Script Type:</strong> {output.scriptType}</p>
                        <p className="bitcoinTransactionDetails-item"><strong>Data Hex:</strong> {output.dataHex || "N/A"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BitcoinTransaction;
