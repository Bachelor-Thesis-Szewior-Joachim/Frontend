import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SolanaTransaction from "./SolanaTransaction";
import EthereumTransaction from "./EthereumTransaction";
import BitcoinTransaction from "./BitcoinTransaction";
import Header from "../../../header";
import axios from "axios";
import { getToken } from "../../../security"; // Import the getToken function

function TransactionDetails() {
  const location = useLocation();
  const { address, blockchainType } = location.state || {};
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let url;
    switch (blockchainType.toLowerCase()) {
      case "solana":
        url = `http://localhost:8080/solana/transaction/${address}`;
        break;
      case "ethereum":
        url = `http://localhost:8080/ethereum/transaction/${address}`;
        break;
      case "bitcoin":
        url = `http://localhost:8080/bitcoin/transaction/data/${address}`;
        break;
      default:
        navigate("/error");
        return;
    }

    const fetchTransactionData = async () => {
      try {
        const token = getToken(); // Get the token from localStorage
        const headers = {
          'Authorization': `Bearer ${token}`
        };

        const response = await axios.get(url, { headers });
        setTransaction(response.data);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransactionData();
  }, [blockchainType, address, navigate]);

  if (!transaction) return <p>Loading transaction data...</p>;

  return (
      <div>
        <Header />
        <h2>Transaction Details for {blockchainType.charAt(0).toUpperCase() + blockchainType.slice(1)}</h2>
        {blockchainType.toLowerCase() === "solana" && <SolanaTransaction transaction={transaction} />}
        {blockchainType.toLowerCase() === "ethereum" && <EthereumTransaction transaction={transaction} />}
        {blockchainType.toLowerCase() === "bitcoin" && <BitcoinTransaction transaction={transaction} />}
      </div>
  );
}

export default TransactionDetails;
