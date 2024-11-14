import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../../../security'; // Import the getToken function

const BlockProductionComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlockProductionData = async () => {
            const token = getToken(); // Get the token from localStorage
            const headers = { 'Authorization': `Bearer ${token}` };

            try {
                const response = await axios.get("http://localhost:8080/solana/block/blockProduction", { headers });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching block production data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlockProductionData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!data) return <p>No data available.</p>;

    const { range, byIdentity } = data;

    return (
        <div>
            <h3>Block Production Data</h3>

            {/* Range Display */}
            <div>
                <h4>Range</h4>
                <p><strong>First Slot:</strong> {range.firstSlot}</p>
                <p><strong>Last Slot:</strong> {range.lastSlot}</p>
            </div>

            {/* By Identity Display */}
            <div>
                <h4>Block Production by Identity</h4>
                {Object.entries(byIdentity).map(([identity, values]) => (
                    <div key={identity} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ddd" }}>
                        <p><strong>Identity:</strong> {identity}</p>
                        <p><strong>Produced Blocks:</strong> {values[0]}</p>
                        <p><strong>Skipped Blocks:</strong> {values[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlockProductionComponent;
