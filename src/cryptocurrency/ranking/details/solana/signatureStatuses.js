import React, { useState } from 'react';

const TransactionSignatureComponent = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchTransactionSignature = () => {
        setLoading(true);
        fetch(`http://localhost:8080/solana/transaction/signatures?signatures=${value}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching transaction signature data:", error);
                setLoading(false);
            });
    };

    return (
        <div>
            <h3>Solana Transaction Signature</h3>

            <input
                type="text"
                placeholder="Enter signature value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <button onClick={fetchTransactionSignature}>Fetch Signature</button>

            {loading && <p>Loading...</p>}
            {data && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
                    <h4>Transaction Signature Data</h4>
                    <p><strong>Confirmation Status:</strong> {data.confirmationStatus}</p>
                    <p><strong>Slot:</strong> {data.slot}</p>
                </div>
            )}
        </div>
    );
};

export default TransactionSignatureComponent;
