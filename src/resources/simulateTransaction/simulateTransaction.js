import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../security'; // Assume you have a getToken function to fetch token
import Header from '../../header';
import './airdropAndSimulatePage.css';

const AirdropAndSimulatePage = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Retrieve publicKey and token from localStorage
    const publicKey = localStorage.getItem('publicKey');
    const token = getToken();
    const headers = { 'Authorization': `Bearer ${token}` };

    // Function to request airdrop
    const handleAirdrop = async () => {
        setLoading(true);
        setMessage('');
        try {
            const response = await axios.post(
                `http://localhost:8080/client/requestAirdrop?publicKey=${publicKey}`,
                {},
                { headers }
            );
            setMessage(`Airdrop Successful: ${response.data.message || response.data}`);
        } catch (error) {
            setMessage(`Airdrop Failed: ${error.response ? error.response.data.message : error.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Function to simulate transaction
    const handleSimulateTransaction = async () => {
        setLoading(true);
        setMessage('');
        try {
            const response = await axios.get(
                `http://localhost:8080/client/simulateTransaction?publicKey=${publicKey}`,
                { headers }
            );
            setMessage(`Transaction Simulation Result: ${response.data.message || JSON.stringify(response.data)}`);
        } catch (error) {
            setMessage(`Transaction Simulation Failed: ${error.response ? error.response.data.message : error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <div className="feature-container">
                <h2>Airdrop & Simulate Transaction</h2>
                <p className="info-text">Use the options below to perform an airdrop or simulate a transaction.</p>

                <div className="button-container">
                    <button onClick={handleAirdrop} className="action-button" disabled={loading}>
                        {loading ? 'Processing...' : 'Request Airdrop'}
                    </button>
                    <button onClick={handleSimulateTransaction} className="action-button" disabled={loading}>
                        {loading ? 'Processing...' : 'Simulate Transaction'}
                    </button>
                </div>

                {message && <div className="message-box">{message}</div>}
            </div>
        </div>
    );
};

export default AirdropAndSimulatePage;
