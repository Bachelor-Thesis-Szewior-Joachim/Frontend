import React, { useState } from 'react';

const EthereumErc721Transfers = () => {
    const [address, setAddress] = useState('');
    const [erc721Transfers, setErc721Transfers] = useState([]);

    const fetchErc721Transfers = () => {
        fetch(`http://localhost:8080/ethereum/account/erc721transfers/${address}`)
            .then(response => response.json())
            .then(data => setErc721Transfers(data))
            .catch(error => console.error('Error fetching ERC721 transfers:', error));
    };

    return (
        <div>
            <h3>Ethereum ERC-721 Transfers</h3>
            <input
                type="text"
                placeholder="Enter Ethereum Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={fetchErc721Transfers}>Get ERC-721 Transfers</button>
            {erc721Transfers.length > 0 ? (
                <ul>
                    {erc721Transfers.map((transfer, index) => (
                        <li key={index}>
                            <p>Token Name: {transfer.tokenName}</p>
                            <p>From: {transfer.from}</p>
                            <p>To: {transfer.to}</p>
                            <p>Token ID: {transfer.tokenId}</p>
                            <p>Transaction Hash: {transfer.hash}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No transfers found.</p>
            )}
        </div>
    );
};

export default EthereumErc721Transfers;
