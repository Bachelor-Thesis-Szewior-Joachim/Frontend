import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../../../security'; // Import the getToken function

const CommitmentComponent = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCommitmentData = async () => {
        setLoading(true);
        const token = getToken(); // Get the token from localStorage
        const headers = { 'Authorization': `Bearer ${token}` };

        try {
            const response = await axios.get(`http://localhost:8080/solana/block/commitment/${value}`, { headers });
            setData(response.data);
        } catch (error) {
            console.error("Error fetching commitment data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h3>Solana Block Commitment Data</h3>

            <input
                type="text"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={fetchCommitmentData}>Fetch Data</button>

            {loading && <p>Loading...</p>}
            {data && (
                <div>
                    <h4>Commitment Data</h4>
                    {Object.entries(data).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key}</strong>: {key === "commitment" && value === "null" ? "Block hasn't been confirmed" : value || "N/A"}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommitmentComponent;
