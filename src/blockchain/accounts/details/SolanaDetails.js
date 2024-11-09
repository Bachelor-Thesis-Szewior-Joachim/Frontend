import { useNavigate } from 'react-router-dom';

function SolanaDetails({ data, transactions, onNavigateToAccount }) {
    const navigate = useNavigate();

    const handleTransactionClick = (signature) => {
        navigate(`/blockchain/transactions/solana/${signature}`);
    };

    return (
        <div>
            <h2>Solana Account Details</h2>
            <p><strong>Lamports:</strong> {data.lamports}</p>
            <p><strong>Slot:</strong> {data.slot}</p>
            <p><strong>Owner:</strong> {data.owner}</p>
            <p><strong>Data:</strong> {data.data}</p>
            <p><strong>Executable:</strong> {data.executable ? "Yes" : "No"}</p>
            <p><strong>Rent Epoch:</strong> {data.rentEpoch}</p>
            <p><strong>Space:</strong> {data.space}</p>
            <button onClick={() => onNavigateToAccount(data.owner)}>Go to Owner Account</button>

            <h3>Transactions</h3>
            {transactions.map((transaction) => (
                <div key={transaction.signature} style={{ marginBottom: '10px' }}>
                    <p><strong>Signature:</strong> {transaction.signature}</p>
                    <p><strong>Block Time:</strong> {transaction.blockTime}</p>
                    <p><strong>Confirmation Status:</strong> {transaction.confirmationStatus}</p>
                    <button onClick={() => handleTransactionClick(transaction.signature)}>
                        View Transaction Details
                    </button>
                </div>
            ))}
        </div>
    );
}

export default SolanaDetails;
