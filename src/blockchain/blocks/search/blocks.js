import React, { useState } from "react";
import "./blocks.css";
import Header from "../../../header";
import { useNavigate } from "react-router-dom";

function Blocks() {

  const [address, setAddress] = useState("");
  const handleSearch = async () => {
    if (!address) return;
    navigate(`/blockchain/blocks/${address}`, { state: { address, blockchainType: blockchainToShow } });
  };

  const [blockchainToShow, setBlockchainToShow] = useState("solana");

  const navigate = useNavigate();


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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

      </div>
  );
}

export default Blocks;
