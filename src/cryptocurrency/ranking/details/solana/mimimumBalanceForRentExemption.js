import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../../../security'; // Import the getToken function

const MinimumBalanceForRentExemptionComponent = () => {
    const [size, setSize] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchMinimumBalance = async () => {
        setLoading(true);
        const token = getToken(); // Get the token from localStorage
        const headers = { 'Authorization': `Bearer ${token}` };

        try {
            const response = await axios.get(`http://localhost:8080/solana/network/minimumBalanceForRentExemption`, {
                params: { size },
                headers
            });
            setData(response.data);
        } catch (error) {
            console.error("Error fetching minimum balance for rent exemption:", error);
        } finally {
            setLoading(false);
        }
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
