import React, { useState } from 'react';

const MinimumBalanceForRentExemptionComponent = () => {
    const [size, setSize] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchMinimumBalance = () => {
        setLoading(true);
        fetch(`http://localhost:8080/solana/network/minimumBalanceForRentExemption?size=${size}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching minimum balance for rent exemption:", error);
                setLoading(false);
            });
    };

    return (
        <div>
            <h3>Solana Minimum Balance for Rent Exemption</h3>

            {/* Input Field for Size Parameter */}
            <input
                type="number"
                placeholder="Enter Size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
            />
            <button onClick={fetchMinimumBalance}>Fetch Minimum Balance</button>

            {/* Display Loading or Data */}
            {loading && <p>Loading...</p>}
            {data !== null && (
                <div>
                    <h4>Minimum Balance for Rent Exemption</h4>
                    <p><strong>Balance:</strong> {data} lamports</p>
                </div>
            )}
        </div>
    );
};

export default MinimumBalanceForRentExemptionComponent;
