import React, { useState } from "react";
import "./accounts.css";
import Header from "../../../header";
import { useNavigate } from "react-router-dom";

function Accounts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blockchainToShow, setBlockchainToShow] = useState("Solana");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchTerm) return;
    console.log(`Blockchain: ${blockchainToShow}`)
    navigate(`/blockchain/accounts/${searchTerm}`, { state: { searchTerm, blockchainType: blockchainToShow } });
  };

  return (
      <div>
        <Header/>
          <div className={"account-list-container"}>
              <div className="blockchain-selector">
                  <label>Choose Blockchain:</label>
                  <select
                      value={blockchainToShow}
                      onChange={(e) => setBlockchainToShow(e.target.value)}
                  >
                      <option value="Solana">Solana</option>
                      <option value="Ethereum">Ethereum</option>
                      <option value="Bitcoin">Bitcoin</option>
                  </select>
              </div>
              <input
                  type="text"
                  className="search-bar"
                  placeholder="Search wallet address"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                          handleSearch();
                      }
                  }}
              />
              <button onClick={handleSearch}>Search</button>
          </div>

      </div>
  )
      ;
}

export default Accounts;
