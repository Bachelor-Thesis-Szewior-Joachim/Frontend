import React, { useState } from 'react';

const TokenAccountByOwnerComponent = () => {
    const [value1, setValue1] = useState('');
    const [option, setOption] = useState('mint');
    const [value2, setValue2] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchTokenAccount = () => {
        setLoading(true);
        fetch(`http://localhost:8080/solana/token/tokenAccountByOwner/${value1}?option=${option}&pubkey=${value2}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching token account data:", error);
                setLoading(false);
            });
    };

    return (
        <div>
            <h3>Solana Token Account by Owner</h3>

            <input
                type="text"
                placeholder="Enter owner address (value1)"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                style={{ marginRight: '10px' }}
            />

            <select value={option} onChange={(e) => setOption(e.target.value)} style={{ marginRight: '10px' }}>
                <option value="mint">Mint</option>
                <option value="program">Program ID</option>
            </select>

            {/* Input for value2 */}
            <input
                type="text"
                placeholder={`Enter ${option} value (value2)`}
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                style={{ marginRight: '10px' }}
            />

            <button onClick={fetchTokenAccount}>Fetch Token Account</button>

            {loading && <p>Loading...</p>}
            {data && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
                    <h4>Token Account Data</h4>
                    {Object.entries(data).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key}</strong>: {value}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TokenAccountByOwnerComponent;
