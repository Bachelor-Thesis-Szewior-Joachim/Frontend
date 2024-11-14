import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../header";
import SolanaDetails from "./SolanaDetails";
import EthereumDetails from "./EthereumDetails";
import BitcoinDetails from "./BitcoinDetails";
import "./accountDetails.css";
import axios from "axios";
import {getToken} from "../../../security";

function AccountDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm, blockchainType } = location.state || {};
  const [accountData, setAccountData] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let smallLetter = blockchainType.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm || !blockchainType) {
        setError("Missing search term or blockchain type");
        setLoading(false);
        return;
      }

      try {
        let response = "";
        let transactionResponse = ""
        const token = getToken();
        const headers = {
          'Authorization': `Bearer ${token}`
        }

        if (smallLetter === 'ethereum') {
          response = await axios.get(`http://localhost:8080/${smallLetter}/account/data/${searchTerm}`, { headers });
        } else if (smallLetter === 'bitcoin') {
          response = await axios.get(`http://localhost:8080/${smallLetter}/account/data/${searchTerm}`, { headers });
        } else if (smallLetter === 'solana') {
          response = await axios.get(`http://localhost:8080/${smallLetter}/account/${searchTerm}`, { headers });
          transactionResponse = await axios.get(`http://localhost:8080/${smallLetter}/transaction/signaturesForAddress/${searchTerm}`, { headers });
          setTransactions(transactionResponse.data);
        }

        if (!response.ok) {
          throw new Error("Failed to retrieve account data");
        }
        const data = await response.json();
        console.log(`Ethereum response: `, data);
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

  let DetailsComponent;

  switch (smallLetter) {
    case "solana":
      DetailsComponent = (
          <SolanaDetails
              data={accountData}
              transactions={transactions}
          />
      );
      break;
    case "ethereum":
      DetailsComponent = (
          <EthereumDetails
              data={accountData}
          />
      );
      break;
    case "bitcoin":
      DetailsComponent = (
          <BitcoinDetails
              data={accountData}
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
