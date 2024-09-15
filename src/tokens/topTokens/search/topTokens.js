import { React, useState } from "react";
import "./topTokens.css";
import Header from "../../../header";
import { useNavigate } from "react-router-dom";

function TopTokens() {
  const [tokensPerPage, setTokensPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [blockchainToShow, setBlockchainToShow] = useState("Solana");

  const totalPages = 822778;
  const navigate = useNavigate();

  const tokens = [
    {
      name: "Tether USD (USDT)",
      price: "$1.001",
      change: "0.16%",
      volume: "$51,246,858,537.00",
      circulatingMarketCap: "$118,197,798,732.00",
      onchainMarketCap: "$54,035,711,850.12",
      holders: "5,985,116",
    },
    {
      name: "BNB (BNB)",
      price: "$509.6888",
      change: "-2.47%",
      volume: "$1,884,302,311.00",
      circulatingMarketCap: "$74,381,288,711.00",
      onchainMarketCap: "$200,260,793.00",
      holders: "296,633",
    },
    {
      name: "USDC (USDC)",
      price: "$1.001",
      change: "0.11%",
      volume: "$6,323,012,952.00",
      circulatingMarketCap: "$34,784,617,433.00",
      onchainMarketCap: "$25,540,038,960.44",
      holders: "2,275,749",
    },
    {
      name: "XRP (IBC) (XRP)",
      price: "$0.5623",
      change: "0.60%",
      volume: "$1,308,147,220.00",
      circulatingMarketCap: "$31,598,865,323.00",
      onchainMarketCap: "$5.62",
      holders: "3",
    },
    {
      name: "stETH (stETH)",
      price: "$2,451.86",
      change: "0.63%",
      volume: "$63,790,049.00",
      circulatingMarketCap: "$24,067,143,344.00",
      onchainMarketCap: "$24,045,055,115.18",
      holders: "465,521",
    },
    {
      name: "Wrapped TON Coin (TONCOIN)",
      price: "$4.69",
      change: "-3.78%",
      volume: "$535,624,561.00",
      circulatingMarketCap: "$11,886,789,756.00",
      onchainMarketCap: "$57,178,632.14",
      holders: "32,532",
    },
    {
      name: "Wrapped liquid staked ETH (wstETH)",
      price: "$2,885.65",
      change: "0.27%",
      volume: "$189,859,783.00",
      circulatingMarketCap: "$10,080,561,684.00",
      onchainMarketCap: "$10,095,466,724.55",
      holders: "13,883",
    },
    {
      name: "Wrapped BTC (WBTC)",
      price: "$58,148.00",
      change: "0.82%",
      volume: "$231,818,731.00",
      circulatingMarketCap: "$8,893,677,062.00",
      onchainMarketCap: "$8,906,819,900.00",
      holders: "100,351",
    },
  ];

  const handleTokenName = (name) => {
    navigate(`/resources/ranking/${name}`);
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
          <div id="amount-of-blocks">Total amount of blocks: {100000}</div>
          <div id="amount-per-page-div">
            Blocks per page:
            <select
              value={tokensPerPage}
              onChange={(e) => setTokensPerPage(Number(e.target.value))}
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
            <div id="table-token-preview">Preview</div>
            <div id="table-token-token-name">Token name</div>
            <div id="table-token-price">Price</div>
            <div id="table-token-change">Change</div>
            <div id="table-token-volume">Volume</div>
            <div id="table-token-circulating-market-cap">
              Circulating Market Cap
            </div>
            <div id="table-token-onchain-market-cap">Onchain Market Cap</div>
            <div id="table-token-holders">Holder</div>
          </div>
          <div className="table-body">
            {tokens.map((token, index) => (
              <div key={index} className="table-row">
                <div id="table-token-preview">icon</div>
                <div id="table-token-token-name">
                  <span
                    className="clickable"
                    onClick={() => handleTokenName(token.name)}
                  >
                    {token.name}
                  </span>
                </div>
                <div id="table-token-price">{token.price}</div>
                <div id="table-token-change">{token.change}</div>
                <div id="table-token-volume">{token.volume}</div>
                <div id="table-token-circulating-market-cap">
                  {token.circulatingMarketCap}
                </div>
                <div id="table-token-onchain-market-cap">
                  {token.onchainMarketCap}
                </div>
                <div id="table-token-holders">{token.holders}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTokens;
