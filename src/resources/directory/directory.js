import { React, useState, useEffect } from "react";
import "./directory.css";
import { useNavigate } from "react-router-dom";
import Header from "../../header";

const Directory = () => {
  const navigate = useNavigate();

  const handleCryptoExchange = (exchange) => {
    navigate(`/resources/directory/exchange/${exchange}`);
  };

  const handleWallet = (wallet) => {
    navigate(`/resources/directory/wallet/${wallet}`);
  };
  const handleListingAndPrices = (listingAndPrices) => {
    navigate(`/resources/directory/listingAndPrices/${listingAndPrices}`);
  };

  const handleNewsAndForums = (type) => {
    navigate(`/resources/directory/newsAndForums/${type}`);
  };
  const handleEvents = (type) => {
    navigate(`/resources/directory/events/${type}`);
  };

  const handleLearningResources = (type) => {
    navigate(`/resources/directory/learningResources/${type}`);
  };
  const handleSmartContracts = (type) => {
    navigate(`/resources/directory/smartContracts/${type}`);
  };
  const handleMining = (type) => {
    navigate(`/resources/directory/mining/${type}`);
  };

  const handleOthers = (type) => {
    navigate(`/resources/directory/others/${type}`);
  };

  return (
    <div>
      <Header />
      <div class="grid-container">
        <div class="card">
          <h3>Exchanges</h3>
          <p>Places to buy and sell cryptocurrencies</p>
          <div class="card-buttons">
            <button onClick={() => handleCryptoExchange("crypto")}>
              Crypto Exchanges
            </button>
            <button onClick={() => handleCryptoExchange("dex")}>DEX</button>
            <button onClick={() => handleCryptoExchange("fiat")}>
              Fiat Exchanges
            </button>
          </div>
        </div>

        <div class="card">
          <h3>Wallet</h3>
          <p>Used to receive and spend crypto assets</p>
          <div class="card-buttons">
            <button onClick={() => handleWallet("gui")}>GUI Wallets</button>
            <button onClick={() => handleWallet("hardaware")}>
              Hardware Wallets
            </button>
          </div>
        </div>

        <div class="card">
          <h3>Listing And Prices</h3>
          <p>Listing and Prices for Projects and Tokens</p>
          <div class="card-buttons">
            <button onClick={() => handleListingAndPrices("listing")}>
              Benchmark Listing
            </button>
            <button onClick={() => handleListingAndPrices("prices")}>
              Price Watch
            </button>
          </div>
        </div>

        <div class="card">
          <h3>News and Forums</h3>
          <p>Get close to the community</p>
          <div class="card-buttons">
            <button onClick={() => handleNewsAndForums("news")}>
              Crypto News
            </button>
            <button onClick={() => handleNewsAndForums("forums")}>
              Forums
            </button>
          </div>
        </div>

        <div class="card">
          <h3>Events</h3>
          <p>Find the events near you</p>
          <div class="card-buttons">
            <button onClick={() => handleEvents("upcoming")}>
              Upcoming Events
            </button>
            <button onClick={() => handleEvents("past")}>Past Events</button>
          </div>
        </div>

        <div class="card">
          <h3>Learning Resources</h3>
          <p>Learn more about blockchain basics</p>
          <div class="card-buttons">
            <button onClick={() => handleLearningResources("blockchain")}>
              Blockchain
            </button>
            <button onClick={() => handleLearningResources("ethereum")}>
              Ethereum
            </button>
            <button onClick={() => handleLearningResources("solana")}>
              Solana
            </button>
          </div>
        </div>

        <div class="card">
          <h3>Smart Contracts</h3>
          <p>For more advanced users</p>
          <div class="card-buttons">
            <button onClick={() => handleSmartContracts("services")}>
              Services
            </button>
            <button onClick={() => handleSmartContracts("smartContracts")}>
              Smart Contracts Audit
            </button>
            <button onClick={() => handleSmartContracts("factory")}>
              Factory{" "}
            </button>
          </div>
        </div>

        <div class="card">
          <h3>Mining</h3>
          <p>Join a pool and start mining</p>
          <div class="card-buttons">
            <button onClick={() => handleMining("pools")}>Mining Pools</button>
            <button onClick={() => handleMining("talk")}>Mining Talk</button>
          </div>
        </div>

        <div class="card">
          <h3>Others</h3>
          <p>Extra resources</p>
          <div class="card-buttons">
            <button onClick={() => handleOthers("carrer")}>Career</button>
            <button onClick={() => handleOthers("grant")}>Grant</button>
            <button onClick={() => handleOthers("tools")}>Tools</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
