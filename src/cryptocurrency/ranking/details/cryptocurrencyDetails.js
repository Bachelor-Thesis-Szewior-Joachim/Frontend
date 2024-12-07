import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../header.js";
import AboutComponent from "./about/aboutComponent.js";
import ChartComponent from "./chart/chartComponent.js";
import btcImage from "./images/btcImage.png";
import tetherImage from './images/tether-usdt-logo.png';
import EthereumTokenBalance from "./ethereum/ethereumTokenBalance";
import EthereumErc20Transfers from "./ethereum/ethereumErc20Transfers";
import EthereumErc721Transfers from "./ethereum/ethereumErc721Transfers";
import "./cryptocurrencyDetails.css";
import BitcoinDetailsComponent from "./bitcoin/bitcoinDetailsComponent";
import EthereumMinedBlocks from "./ethereum/minedBlocks";
import BlockProductionComponent from "./solana/blockProduction";
import CommitmentComponent from "./solana/blockCommitment";
import MinimumBalanceForRentExemptionComponent from "./solana/mimimumBalanceForRentExemption";
import ClusterNodesComponent from "./solana/clusterNodes";
import TokenAccountByOwnerComponent from "./solana/tokenAccountsByOwner";
import TokenAccountBalanceComponent from "./solana/tokenAccountBalance";
import TokenSupplyComponent from "./solana/tokenSupply";
import TransactionSignatureComponent from "./solana/signatureStatuses";
import SignaturesForAddressComponent from "./solana/signaturesForAddress";
import axios from "axios";
import { getToken } from "../../../security"; // Import the getToken function

const CryptocurrencyDetails = () => {
  const [activeTab, setActiveTab] = useState("overview"); // State to track the active tab
  const [cryptoData, setCryptoData] = useState(null);
  const [bitcoinData, setBitcoinData] = useState(null);
  const [currentEpoch, setCurrentEpoch] = useState(null);
  const [genesisHash, setGenesisHash] = useState(null);
  const [firstAvailableBlock, setFirstAvailableBlock] = useState(null);
  const [minimumLedgerSlot, setMinimumLedgerSlot] = useState(null);

  const location = useLocation();
  const cmcId = location.state?.cmcId;

  useEffect(() => {
    const token = getToken(); // Get the token from localStorage
    const headers = { 'Authorization': `Bearer ${token}` };

    const fetchData = async () => {
      try {
        const cryptoResponse = await axios.get(`http://localhost:8080/cryptocurrency/${cmcId}`, { headers });
        setCryptoData(cryptoResponse.data);

        if (cmcId === 1) {
          const bitcoinResponse = await axios.get("http://localhost:8080/bitcoin/stats", { headers });
          setBitcoinData(bitcoinResponse.data);
        }

        if (cmcId === 5426) {
          const epochResponse = await axios.get("http://localhost:8080/solana/network/currentEpoch", { headers });
          setCurrentEpoch(epochResponse.data);

          const genesisHashResponse = await axios.get("http://localhost:8080/solana/network/genesisHash", { headers });
          setGenesisHash(genesisHashResponse.data);

          const firstBlockResponse = await axios.get("http://localhost:8080/solana/network/firstAvailableBlock", { headers });
          setFirstAvailableBlock(firstBlockResponse.data);

          const minimumSlotResponse = await axios.get("http://localhost:8080/solana/slot/minimum", { headers });
          setMinimumLedgerSlot(minimumSlotResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cmcId]);

  const renderContent = () => {
    if (!cryptoData) return <p>Loading...</p>;
    switch (activeTab) {
      case "about":
        return <AboutComponent name={cryptoData.name} />;
      case "chart":
        return <ChartComponent historicalData={cryptoData.historicalData} />;
      case "bitcoin":
        return <BitcoinDetailsComponent bitcoinData={bitcoinData} />;
      case "tokenBalance":
        return <EthereumTokenBalance />;
      case "erc20Transfers":
        return <EthereumErc20Transfers />;
      case "erc721Transfers":
        return <EthereumErc721Transfers />;
      case "minedBlocks":
        return <EthereumMinedBlocks />;
      case "blockProduction":
        return <BlockProductionComponent />;
      case "blockCommitment":
        return <CommitmentComponent />;
      case "minimumBalanceForExemption":
        return <MinimumBalanceForRentExemptionComponent />;
      case "clusterNodes":
        return <ClusterNodesComponent />;
      case "tokenAccountsByOwner":
        return <TokenAccountByOwnerComponent />;
      case "tokenAccountBalance":
        return <TokenAccountBalanceComponent />;
      case "tokenSupply":
        return <TokenSupplyComponent />;
      case "signatureStatuses":
        return <TransactionSignatureComponent />;
      case "signaturesForAddress":
        return <SignaturesForAddressComponent />;
      default:
        return <AboutComponent name={cryptoData.name} />;
    }
  };

  if (!cryptoData) {
    return <p>Loading...</p>;
  }

  return (
      <div>
        <Header />
        <div className="container">
          {/* Left Column */}
          <div className="left-column">
            <div className="profile">
              <img
                  src={cmcId === 1 ? btcImage : cmcId === 825 ? tetherImage : btcImage}
                  alt={cmcId === 1 ? "Bitcoin" : cmcId === 825 ? "Tether" : "Default"}
              />

              <h2>{cryptoData.name}</h2>
              <span className="badge">{cryptoData.category}</span>
              <span className="badge">{cryptoData.platformDto?.name}</span>
            </div>

            <div className="stats">
              <h3 className="price">${cryptoData.price.toFixed(2)}</h3>
              <p className="change">
              <span className={`change ${cryptoData.percentChange24h >= 0 ? "positive-change" : "negative-change"}`}>
                {cryptoData.percentChange24h.toFixed(2)}% (24h)
              </span>
              </p>

              <div className="stat-section">
                <div className="stat-item">
                  <span>Market Cap</span>
                  <span>${cryptoData.marketCap.toLocaleString()}</span>
                </div>

                <div className="stat-item">
                  <span>Volume (24h)</span>
                  <span>${cryptoData.volume24h.toLocaleString()}</span>
                </div>

                <div className="stat-item">
                  <span>Circulating Supply</span>
                  <span>{cryptoData.circulatingSupply} BTC</span>
                </div>
                {cmcId === 5426 && (<>

                      <div className="stat-item">
                        <span>Current Epoch</span>
                        {currentEpoch ? (
                            <div>
                              <p>Absolute Slot: {currentEpoch.absoluteSlot}</p>
                              <p>Block Height: {currentEpoch.blockHeight}</p>
                              <p>Epoch: {currentEpoch.epoch}</p>
                              <p>Slot Index: {currentEpoch.slotIndex}</p>
                              <p>Slots in Epoch: {currentEpoch.slotsInEpoch}</p>
                              <p>Transaction Count: {currentEpoch.transactionCount}</p>
                            </div>
                        ) : (
                            "Loading..."
                        )}
                      </div>

                      <div className="stat-item">
                        <span>Genesis Hash</span>
                        <span>{genesisHash || "Loading..."}</span>
                      </div>

                      <div className="stat-item">
                        <span>First Available Block</span>
                        <span>{firstAvailableBlock || "Loading..."}</span>
                      </div>

                      <div className="stat-item">
                        <span>Minimum Ledger Slot</span>
                        <span>{minimumLedgerSlot || "Loading..."}</span>
                      </div>

                    </>
                )}

              </div>

              <div className="network-info">
                <h4>Network Information</h4>
                <a href="#" className="network-btn">Chain Explorers</a>
                <a href="#" className="network-btn">Supported Wallets</a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <nav className="nav">
              <button className={activeTab === "about" ? "active-tab" : ""} onClick={() => setActiveTab("about")}>
                About
              </button>
              <button className={activeTab === "chart" ? "active-tab" : ""} onClick={() => setActiveTab("chart")}>
                Chart
              </button>
              {cmcId === 1 && (
                  <button className={activeTab === "bitcoin" ? "active-tab" : ""} onClick={() => setActiveTab("bitcoin")}>
                    Bitcoin Details
                  </button>
              )}
              {cmcId === 1027 && (
                  <>
                    <button className={activeTab === "tokenBalance" ? "active-tab" : ""}
                            onClick={() => setActiveTab("tokenBalance")}>
                      Token Balance
                    </button>
                    <button className={activeTab === "erc20Transfers" ? "active-tab" : ""}
                            onClick={() => setActiveTab("erc20Transfers")}>
                      ERC-20 Transfers
                    </button>
                    <button className={activeTab === "erc721Transfers" ? "active-tab" : ""}
                            onClick={() => setActiveTab("erc721Transfers")}>
                      ERC-721 Transfers
                    </button>
                    <button className={activeTab === "minedBlocks" ? "active-tab" : ""}
                            onClick={() => setActiveTab("minedBlocks")}>
                      Mined Blocks by Address
                    </button>
                  </>
              )}
              {cmcId === 5426 && (
                  <>
                    <button className={activeTab === "blockProduction" ? "active-tab" : ""}
                            onClick={() => setActiveTab("blockProduction")}>
                      Block Production
                    </button>
                    <button className={activeTab === "blockCommitment" ? "active-tab" : ""}
                            onClick={() => setActiveTab("blockCommitment")}>
                      Block Commitment
                    </button>
                    <button className={activeTab === "minimumBalanceForExemption" ? "active-tab" : ""}
                            onClick={() => setActiveTab("minimumBalanceForExemption")}>
                      Exemption
                    </button>
                    <button className={activeTab === "clusterNodes" ? "active-tab" : ""}
                            onClick={() => setActiveTab("clusterNodes")}>
                      Cluster Nodes
                    </button>
                    <button className={activeTab === "tokenAccountsByOwner" ? "active-tab" : ""}
                            onClick={() => setActiveTab("tokenAccountsByOwner")}>
                      Token Accounts By Owner
                    </button>
                    <button className={activeTab === "tokenAccountBalance" ? "active-tab" : ""}
                            onClick={() => setActiveTab("tokenAccountBalance")}>
                      Token Account Balance
                    </button>
                    <button className={activeTab === "tokenSupply" ? "active-tab" : ""}
                            onClick={() => setActiveTab("tokenSupply")}>
                      Token Supply
                    </button>
                    <button className={activeTab === "signatureStatuses" ? "active-tab" : ""}
                            onClick={() => setActiveTab("signatureStatuses")}>
                      Signature Statuses
                    </button>
                    <button className={activeTab === "signaturesForAddress" ? "active-tab" : ""}
                            onClick={() => setActiveTab("signaturesForAddress")}>
                      Signatures For Address
                    </button>
                  </>
              )}
            </nav>

            <div className="content">{renderContent()}</div>
          </div>
        </div>
      </div>
  );
};

export default CryptocurrencyDetails;
