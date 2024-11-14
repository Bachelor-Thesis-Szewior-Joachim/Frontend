import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../../../security'; // Import the getToken function

const EthereumTokenBalance = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [balance, setBalance] = useState(null);

    const fetchBalance = async () => {
        const token = getToken(); // Get the token from localStorage
        const headers = { 'Authorization': `Bearer ${token}` };

        try {
            const response = await axios.get(`http://localhost:8080/ethereum/account/tokenBalance/${value1}/${value2}`, { headers });
            setBalance(response.data);
        } catch (error) {
            console.error('Error fetching token balance:', error);
        }
    };

    return (
        <div>
            <h3>Ethereum Token Balance</h3>
            <input
                type="text"
                placeholder="Enter Value 1"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Value 2"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
            />
            <button onClick={fetchBalance}>Get Balance</button>
            {balance !== null && <p>Balance: {balance}</p>}
        </div>
    );
};

export default EthereumTokenBalance;
