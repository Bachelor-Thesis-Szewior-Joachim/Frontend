import React, { useEffect, useState } from "react";
import {useParams, useNavigate, useLocation} from "react-router-dom";
import SolanaTransaction from "./SolanaTransaction";
import EthereumTransaction from "./EthereumTransaction";
import BitcoinTransaction from "./BitcoinTransaction";
import Header from "../../../header";

function TransactionDetails() {
  const location = useLocation();
  const { address, blockchainType } = location.state || {};
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();
  console.log("Blockchain type: ",blockchainType);
  useEffect(() => {
    let url;
    switch (blockchainType.toLowerCase()) {
      case "solana":
        url = `http://localhost:8080/solana/transaction/${address}`;
        break;
      case "ethereum":
        url = `http://localhost:8080/ethereum/transaction/normal/${address}`;
        break;
      case "bitcoin":
        url = `http://localhost:8080/bitcoin/transaction/data/${address}`;
        break;
      default:
        navigate("/error");
        return;
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => setTransaction(data))
        .catch((error) => console.error("Error fetching transaction data:", error));
  }, [blockchainType, address, navigate]);

  if (!transaction) return <p>Loading transaction data...</p>;
  console.log(transaction);
  return (
      <div>
        <Header></Header>
        <h2>Transaction Details for {blockchainType.charAt(0).toUpperCase() + blockchainType.slice(1)}</h2>
        {blockchainType.toLowerCase() === "solana" && <SolanaTransaction transaction={transaction} />}
        {blockchainType.toLowerCase() === "ethereum" && <EthereumTransaction transaction={transaction} />}
        {blockchainType.toLowerCase() === "bitcoin" && <BitcoinTransaction transaction={transaction} />}
      </div>
  );
}

export default TransactionDetails;
