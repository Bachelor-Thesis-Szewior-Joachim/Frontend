import React, { useState } from "react";
import "./transactions.css";
import Header from "../../header";

function Transactions() {
  const [transactionsPerPage, setTransactionsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 822778;

  const transactions = [
    {
      transactionHash: "0x003b678569...",
      method: "Transfer",
      block: "20572939",
      age: "12 secs ago",
      from: "beaverbuild",
      to: "0x72FDdC41...5eFa04141",
      amount: "0.034985734 ETH",
      txnFee: "0.00001741",
    },
    {
      transactionHash: "0x955d55cf321...",
      method: "Transfer",
      block: "20572939",
      age: "12 secs ago",
      from: "0x284Ac5B1...04aa4df15",
      to: "0x90535ff9...f0ed16F8e",
      amount: "0.000386328 ETH",
      txnFee: "0.00001743",
    },
    {
      transactionHash: "0x60e147c70d...",
      method: "Approve",
      block: "20572939",
      age: "12 secs ago",
      from: "0xaac5619E...8BF6852F0",
      to: "Pepe: PEPE Token",
      amount: "0 ETH",
      txnFee: "0.00002433",
    },
  ];

  // Example of how to display this data in the console
  transactions.forEach((transaction) => {
    console.log(`Transaction Hash: ${transaction.transactionHash}`);
    console.log(`Method: ${transaction.method}`);
    console.log(`Block: ${transaction.block}`);
    console.log(`Age: ${transaction.age}`);
    console.log(`From: ${transaction.from}`);
    console.log(`To: ${transaction.to}`);
    console.log(`Amount: ${transaction.amount}`);
    console.log(`Txn Fee: ${transaction.txnFee}`);
    console.log("----------------------------");
  });

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <Header />
      <div className="block-info-container">
        <div className="small-info-container">
          <div className="info-box">
            <div className="info-title">Transactions(24H)</div>
            <div className="info-value">1,042,000</div>
          </div>
          <div className="info-box">
            <div className="info-title">Network transactions</div>
            <div className="info-value">20572016</div>
          </div>
          <div className="info-box">
            <div className="info-title">AVG. Transactions fee (24H)</div>
            <div className="info-value">1.12USD</div>
          </div>
        </div>

        <div className="list-of-blocks-header">
          <div id="amount-of-blocks">
            Total amount of transactions: {100000}
          </div>
          <div id="amount-per-page-div">
            Transactions per page:
            <select
              value={transactionsPerPage}
              onChange={(e) => setTransactionsPerPage(Number(e.target.value))}
            >
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={60}>60</option>
            </select>
          </div>
          <div id="button-first-div">
            <button id="button-first">First</button>
          </div>
          <div className="pagination">
            <button
              className="pagination-button"
              disabled={currentPage === 1}
              onClick={goToPreviousPage}
            >
              &lt;
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="pagination-button"
              disabled={currentPage === totalPages}
              onClick={goToNextPage}
            >
              &gt;
            </button>
          </div>
          <div id="button-last-div">
            <button id="button-last">Last</button>
          </div>
        </div>

        <div className="table">
          <div className="table-header">
            <div id="table-preview">Preview</div>
            <div id="table-transaction-hash">Transaction hash</div>
            <div id="table-method">Method</div>
            <div id="table-block">Block</div>
            <div id="table-transaction-age">Transaction age</div>
            <div id="table-from">From</div>
            <div id="table-to">To</div>
            <div id="table-amount">Amount</div>
            <div id="table-transaction-fee">Transaction Fee</div>
          </div>
          <div className="table-body">
            {transactions.map((transaction, index) => (
              <div key={index} className="table-row">
                <div id="table-preview">icon</div>
                <div id="table-transaction-hash">
                  {transaction.transactionHash}
                </div>
                <div id="table-method">{transaction.method}</div>
                <div id="table-block">{transaction.block}</div>
                <div id="table-transaction-age">{transaction.age}</div>
                <div id="table-from">{transaction.from}</div>
                <div id="table-to">{transaction.to}</div>
                <div id="table-amount">{transaction.amount}</div>
                <div id="table-transaction-fee">{transaction.txnFee}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
