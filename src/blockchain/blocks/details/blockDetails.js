import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../header";
import SolanaBlockDetails from "./SolanaBlockDetails";
import EthereumBlockDetails from "./EthereumBlockDetails";
import BitcoinBlockDetails from "./BitcoinBlockDetails";
import axios from "axios";
import { getToken } from "../../../security"; // Import the getToken function
import "./blockDetails.css"
function BlockDetails() {
  const location = useLocation();
  const { address, blockchainType } = location.state || {};
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    if (!address || !blockchainType) return;

    let url;
    switch (blockchainType.toLowerCase()) {
      case "solana":
        url = `http://localhost:8080/solana/block/${address}`;
        break;
      case "ethereum":
        url = `http://localhost:8080/ethereum/block/${address}`;
        break;
      case "bitcoin":
        url = `http://localhost:8080/bitcoin/block/data/${address}`;
        break;
      default:
        console.error("Invalid blockchain type");
        return;
    }

    const fetchBlockData = async () => {
      try {
        const token = getToken(); // Get the token from localStorage
        const headers = {
          'Authorization': `Bearer ${token}`
        };

        const response = await axios.get(url, { headers });
        setBlockData(response.data);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchBlockData();
  }, [address, blockchainType]);

  if (!blockData) return <p>Loading block data...</p>;

  return (
      <div>
        <Header />
        {blockchainType.toLowerCase() === "solana" && <SolanaBlockDetails data={blockData} />}
        {blockchainType.toLowerCase() === "ethereum" && <EthereumBlockDetails data={blockData} />}
        {blockchainType.toLowerCase() === "bitcoin" && <BitcoinBlockDetails data={blockData} />}
      </div>
  );
}

export default BlockDetails;
