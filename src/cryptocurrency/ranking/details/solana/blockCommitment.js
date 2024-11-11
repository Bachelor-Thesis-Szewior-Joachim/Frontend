import React, { useState } from 'react';

const CommitmentComponent = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCommitmentData = () => {
        setLoading(true);
        fetch(`http://localhost:8080/solana/block/commitment/${value}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching commitment data:", error);
                setLoading(false);
            });
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
