import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../../../../security'; // Import the getToken function

const ClusterNodesComponent = () => {
    const [nodes, setNodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClusterNodesData = async () => {
            const token = getToken(); // Get the token from localStorage
            const headers = { 'Authorization': `Bearer ${token}` };

            try {
                const response = await axios.get("http://localhost:8080/solana/node/getClusterNodes", { headers });
                setNodes(response.data);
            } catch (error) {
                console.error("Error fetching cluster nodes data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClusterNodesData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (nodes.length === 0) return <p>No nodes available.</p>;

    return (
        <div>
            <h3>Solana Cluster Nodes</h3>

            {nodes.map((node, index) => (
                <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                    <h4>Node {index + 1}</h4>
                    {Object.entries(node).map(([key, value]) =>
                        value !== null ? (
                            <p key={key}>
                                <strong>{key}</strong>: {value}
                            </p>
                        ) : null
                    )}
                </div>
            ))}
        </div>
    );
};

export default ClusterNodesComponent;
