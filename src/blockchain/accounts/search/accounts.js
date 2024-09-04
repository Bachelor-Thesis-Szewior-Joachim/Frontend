import React, { useState } from "react";
import "./accounts.css";
import Header from "../../../header";
import { useNavigate } from "react-router-dom";

function Accounts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsToShow, setRowsToShow] = useState(20);
  const [blockchainToShow, setBlockchainToShow] = useState("Solana");
  const navigate = useNavigate();

  const accounts = [
    // Example data - replace with actual account data
    {
      id: 1,
      address: "0x00000000...3453543",
      nameTag: "Beacon Deposit",
      balance: "49,586,951.44 ETH",
      percentage: "41.22%",
      totalCount: 523662,
    },
    {
      id: 2,
      address: "0x00000002...4355345",
      nameTag: "Wrapped Ether",
      balance: "2,887,829.87 ETH",
      percentage: "2.40%",
      totalCount: 17664072,
    },
    // Add more accounts here
  ];

  const filteredAccounts = accounts.filter(
    (account) =>
      account.address.includes(searchTerm) ||
      account.nameTag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAccountAddress = (address) => {
    navigate(`/blockchain/accounts/${address}`);
  };

  return (
    <div>
      <Header />
      <div className="account-list-container">
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
        />

        <div className="rows-selector">
          <label>Show rows:</label>
          <select
            value={rowsToShow}
            onChange={(e) => setRowsToShow(parseInt(e.target.value))}
          >
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
          </select>
        </div>

        <div className="table">
          <div className="table-header">
            <div id="table-id">ID</div>
            <div id="table-address">Address</div>
            <div id="table-name-tag">Name Tag</div>
            <div id="table-balance">Balance</div>
            <div id="table-percentage">Percentage</div>
            <div id="table-total-count">Txt Amount</div>
          </div>
          <div className="table-body">
            {filteredAccounts.slice(0, rowsToShow).map((account) => (
              <div className="table-row" key={account.id}>
                <div id="table-id">{account.id}</div>
                <div id="table-address">
                  <span
                    className="clickable"
                    onClick={() => handleAccountAddress(account.address)}
                  >
                    {account.address}
                  </span>
                </div>
                <div id="table-name-tag">{account.nameTag}</div>
                <div id="table-balance">{account.balance}</div>
                <div id="table-percentage">{account.percentage}</div>
                <div id="table-total-count">{account.totalCount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
