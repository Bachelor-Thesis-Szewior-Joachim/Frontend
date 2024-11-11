import React, { useState } from 'react';

const EthereumMinedBlocks = () => {
    const [address, setAddress] = useState('');
    const [blocks, setBlocks] = useState([]);

    const fetchBlocks = () => {
        fetch(`http://localhost:8080/ethereum/block/minedBlocks/${address}`)
            .then(response => response.json())
            .then(data => setBlocks(data))
            .catch(error => console.error('Error fetching mined blocks:', error));
    };

    return (
        <div>
            <h3>Enter Ethereum Address</h3>
            <input
                type="text"
                placeholder="Enter Ethereum Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={fetchBlocks}>Get Mined Blocks</button>

            <div>
                {blocks.length > 0 ? (
                    blocks.map((block, index) => (
                        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                            <h4>Block Number: {block.number}</h4>
                            <ul>
                                {Object.entries(block).map(([key, value]) => (
                                    value !== null && (
                                        <li key={key}>
                                            <strong>{key}</strong>: {value}
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No blocks to display</p>
                )}
            </div>
        </div>
    );
};

export default EthereumMinedBlocks;
