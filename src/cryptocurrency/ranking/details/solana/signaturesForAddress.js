import React, { useState } from 'react';

const SignaturesForAddressComponent = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSignaturesForAddress = () => {
        setLoading(true);
        fetch(`http://localhost:8080/solana/transaction/signaturesForAddress/${value}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching signatures for address:", error);
                setLoading(false);
            });
    };

    return (
        <div>
            <h3>Solana Signatures for Address</h3>

            {/* Input Field for Address */}
            <input
                type="text"
                placeholder="Enter address"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <button onClick={fetchSignaturesForAddress}>Fetch Signatures</button>

            {/* Display Loading or Data */}
            {loading && <p>Loading...</p>}
            {data.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h4>Transaction Signatures</h4>
                    {data.map((transaction, index) => (
                        <div key={index} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
                            <p><strong>Signature:</strong> {transaction.signature}</p>
                            <p><strong>Block Time:</strong> {transaction.blockTime}</p>
                            <p><strong>Confirmation Status:</strong> {transaction.confirmationStatus}</p>
                            <p><strong>Slot:</strong> {transaction.slot}</p>
                            <p><strong>Error:</strong> {transaction.err !== null ? transaction.err : "N/A"}</p>
                            <p><strong>Memo:</strong> {transaction.memo !== null ? transaction.memo : "N/A"}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SignaturesForAddressComponent;
