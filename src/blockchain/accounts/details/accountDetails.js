import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../header";
import SolanaDetails from "./SolanaDetails";
import EthereumDetails from "./EthereumDetails";
import BitcoinDetails from "./BitcoinDetails";
import "./accountDetails.css";

function AccountDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm, blockchainType } = location.state || {};
  const [accountData, setAccountData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm || !blockchainType) {
        setError("Missing search term or blockchain type");
        setLoading(false);
        return;
      }

      try {
        const smallLetter = blockchainType.toLowerCase();
        let response ="";
        if (smallLetter === 'ethereum' || smallLetter === 'bitcoin' ) {
          response = await fetch(`http://localhost:8080/${smallLetter}/account/data/${searchTerm}`);
        } else {
          response = await fetch(`http://localhost:8080/${smallLetter}/account/${searchTerm}`);
        }
        if (!response.ok) {
          throw new Error("Failed to retrieve account data");
        }
        const data = await response.json();
        setAccountData(data);
      } catch (error) {
        console.error("Error fetching account data:", error);
        setError("Error fetching account data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, blockchainType]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!accountData) {
    return <div>No account data available.</div>;
  }

  const handleTransactionHash = (address) => {
    navigate(`/blockchain/transactions/${address}`, { state: { address, blockchainType: blockchainType } });
  };

  const handleAccountAddress = (address) => {
    navigate(`/blockchain/accounts/${address}`, { state: { address, blockchainType: blockchainType } });
  };

  let DetailsComponent;

  switch (blockchainType) {
    case "Solana":
      DetailsComponent = (
          <SolanaDetails
              data={accountData}
              onNavigateToTransaction={handleTransactionHash}
              onNavigateToAccount={handleAccountAddress}
          />
      );
      break;
    case "Ethereum":
      DetailsComponent = (
          <EthereumDetails
              data={accountData}
              onNavigateToTransaction={handleTransactionHash}
              onNavigateToAccount={handleAccountAddress}
          />
      );
      break;
    case "Bitcoin":
      DetailsComponent = (
          <BitcoinDetails
              data={accountData}
              onNavigateToTransaction={handleTransactionHash}
              onNavigateToAccount={handleAccountAddress}
          />
      );
      break;
    default:
      DetailsComponent = <div>Unsupported blockchain type.</div>;
  }

  return (
      <div>
        <Header />
        <div className="account-details-container">
          <h1>Account Details</h1>
          {DetailsComponent}
        </div>
      </div>
  );
}

export default AccountDetails;
