import React, { useState, useEffect } from 'react';

const ClusterNodesComponent = () => {
    const [nodes, setNodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/solana/node/getClusterNodes")
            .then(response => response.json())
            .then(data => {
                setNodes(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching cluster nodes data:", error);
                setLoading(false);
            });
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
