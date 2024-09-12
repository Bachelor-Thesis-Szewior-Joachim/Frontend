import { React, useState } from "react";
import "./topTokenDetails.css";
import Header from "../../../header";
import { useNavigate } from "react-router-dom";

function TopTokenDetails() {
  const [transactionsPerPage, setTransactionsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [blockchainToShow, setBlockchainToShow] = useState("Solana");

  const totalPages = 822778;
  const navigate = useNavigate();

  const transactions = [
    {
      transactionHash: "0x003b678569...",
      method: "Transfer",
      block: "20572939",
      age: "12 secs ago",
      from: "beaverbuild",
      to: "0x72FDdC4...5eFa04141",
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

  const handleTransactionHash = (address) => {
    navigate(`/blockchain/transactions/${address}`);
  };

  const handleAccountAddress = (address) => {
    navigate(`/blockchain/accounts/${address}`);
  };

  const handleBlockAddress = (address) => {
    navigate(`/blockchain/blocks/:${address}`);
  };

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
      <div className="big-info-container">
        <div className="small-info-container">
          <div className="info-box">
            <div className="info-title">Max Total Supply</div>
            <div className="info-value">53,981,730,120.39639 USDT</div>

            <div className="info-title">Holders</div>
            <div className="info-value">
              5,988,040 <span className="info-change">(+0.110%)</span>
            </div>

            <div className="info-title">Total Transfers</div>
            <div className="info-value">251,230,948</div>
          </div>

          <div className="info-box">
            <div className="info-title">Price</div>
            <div className="info-value">$1.00 @ 0.000408 ETH (+0.05%)</div>

            <div className="info-title">Onchain Market Cap</div>
            <div className="info-value">$53,972,175,354.17</div>

            <div className="info-title">Circulating Supply Market Cap</div>
            <div className="info-value">$118,120,289,054.00</div>
          </div>

          <div className="info-box">
            <div className="info-title">Token Contract (With 6 Decimals)</div>
            <div className="info-value">
              <a href="#">0xdac17f958d2ee523a2206206994597c13d831ec7</a>
            </div>
            <img
              src="your-ad-image-url.png"
              alt="Advertisement"
              className="ad-image"
            />
          </div>
        </div>

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
            <div id="table-transaction-preview">Preview</div>
            <div id="table-transaction-transaction-hash">Transaction Hash</div>
            <div id="table-transaction-method">Method</div>
            <div id="table-transaction-block">Block</div>
            <div id="table-transaction-transaction-age">Transaction Age</div>
            <div id="table-transaction-from">From</div>
            <div id="table-transaction-to">To</div>
            <div id="table-transaction-amount">Amount</div>
            <div id="table-transaction-transaction-fee">Transaction Fee</div>
          </div>

          <div className="table-body">
            {transactions.map((transaction, index) => (
              <div key={index} className="table-row">
                <div id="table-transaction-preview">icon</div>
                <div id="table-transaction-transaction-hash">
                  <span
                    className="clickable"
                    onClick={() =>
                      handleTransactionHash(transaction.transactionHash)
                    }
                  >
                    {transaction.transactionHash}
                  </span>
                </div>
                <div id="table-transaction-method">{transaction.method}</div>
                <div id="table-transaction-block">{transaction.block}</div>
                <div id="table-transaction-transaction-age">
                  {transaction.age}
                </div>
                <div id="table-transaction-from">
                  <span
                    className="clickable"
                    onClick={() => handleAccountAddress(transaction.from)}
                  >
                    {transaction.from}
                  </span>
                </div>
                <div id="table-transaction-to">
                  <span
                    className="clickable"
                    onClick={() => handleAccountAddress(transaction.to)}
                  >
                    {transaction.to}
                  </span>
                </div>
                <div id="table-transaction-amount">{transaction.amount}</div>
                <div id="table-transaction-transaction-fee">
                  {transaction.txnFee}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTokenDetails;
