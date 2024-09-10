// Activity.js
import React, { useState } from "react";
import "../nftStatisticsDetails.css";
import "./activity.css";

const Activity = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTransactionType, setSelectedTransactionType] = useState(
    "All transaction types"
  );

  const transactions = [
    {
      id: 1374,
      type: "Sale",
      from: "0x1cb6...",
      to: "0x738a...",
      price: "0.000076 ETH",
      gas: "0.051041 ETH",
      date: "1h ago",
    },
    {
      id: 681,
      type: "Sale",
      from: "0xb121...",
      to: "0x738a...",
      price: "0.000098 ETH",
      gas: "0.051243 ETH",
      date: "1h ago",
    },
    {
      id: 3812,
      type: "Sale",
      from: "0xb121...",
      to: "0x738a...",
      price: "0.0002 ETH",
      gas: "0.051052 ETH",
      date: "1h ago",
    },
    // Add more transactions here...
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      (transaction.id.toString().includes(searchTerm) || searchTerm === "") &&
      (selectedTransactionType === "All transaction types" ||
        transaction.type === selectedTransactionType)
    );
  });

  return (
    <div className="activity-table-container">
      <div className="activity-search-bar">
        <div className="search-bar">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search by token ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-dropdown">
          <select
            value={selectedTransactionType}
            onChange={(e) => setSelectedTransactionType(e.target.value)}
          >
            <option value="All transaction types">All transaction types</option>
            <option value="Sale">Sale</option>
            <option value="Mint">Mint</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>
      </div>

      <div className="table">
        <div className="table-header">
          <div id="activity-table-item">Item</div>
          <div id="activity-table-transaction-type">Transaction type</div>
          <div id="activity-table-from">From</div>
          <div id="activity-table-to">To</div>
          <div id="activity-table-price">Price</div>
          <div id="activity-table-gas-amount">Gas Amount</div>
          <div id="activity-table-date">Date</div>
        </div>
        <div className="table-body">
          {filteredTransactions.map((transaction) => (
            <div className="table-row" key={transaction.id}>
              <div id="activity-table-item">{transaction.id}</div>
              <div id="activity-table-transaction-type">{transaction.type}</div>
              <div id="activity-table-from">
                {transaction.from}{" "}
                <button
                  className="copy-btn"
                  onClick={() =>
                    navigator.clipboard.writeText(transaction.from)
                  }
                >
                  📋
                </button>
              </div>
              <div id="activity-table-to">
                {transaction.to}{" "}
                <button
                  className="copy-btn"
                  onClick={() =>
                    navigator.clipboard.writeText(transaction.from)
                  }
                >
                  📋
                </button>
              </div>
              <div id="activity-table-price">{transaction.price}</div>
              <div id="activity-table-gas-amount">{transaction.gas}</div>
              <div id="activity-table-date">{transaction.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
