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
        const token = getToken();
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        let responseData = null;
        let transactionData = null;

        if (smallLetter === "ethereum" || smallLetter === "bitcoin") {
          const response = await axios.get(
              `http://localhost:8080/${smallLetter}/account/data/${searchTerm}`,
              { headers }
          );
          responseData = response.data;
        } else if (smallLetter === "solana") {
          const accountResponse = await axios.get(
              `http://localhost:8080/${smallLetter}/account/${searchTerm}`,
              { headers }
          );
          const transactionResponse = await axios.get(
              `http://localhost:8080/${smallLetter}/transaction/signaturesForAddress/${searchTerm}`,
              { headers }
          );
          responseData = accountResponse.data;
          transactionData = transactionResponse.data;
        }

        // Set data
        setAccountData(responseData);
        if (transactionData) setTransactions(transactionData);
      } catch (error) {
        console.error("Error fetching account data:", error);
        setError("Error fetching account data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, blockchainType, smallLetter]);


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
          {DetailsComponent}
        </div>
      </div>
  );
}

export default AccountDetails;
