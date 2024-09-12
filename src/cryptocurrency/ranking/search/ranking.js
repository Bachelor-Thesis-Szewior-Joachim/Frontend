import { React, useState } from "react";
import Header from "../../../header.js";
import { useNavigate } from "react-router-dom";
import "./ranking.css";

function Ranking() {
  const [currenciesPerPage, setCurrenciesPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 822778; // Example total pages

  const navigate = useNavigate();

  const coins = [
    {
      coinNumber: "1",
      name: "Bitcoin BTC",
      price: "$56,868.39",
      change1h: "1.36%",
      change24h: "0.35%",
      change7d: "-2.20%",
      marketCap: "$1,123,309,016,319",
      volume24h: "$35,817,720,717",
      circulatingSupply: "19,752,784 BTC",
    },
    {
      coinNumber: "2",
      name: "Ethereum ETH",
      price: "$2,331.70",
      change1h: "0.90%",
      change24h: "0.17%",
      change7d: "-4.97%",
      marketCap: "$280,568,564,320",
      volume24h: "$15,426,410,102",
      circulatingSupply: "120,328,140 ETH",
    },
    {
      coinNumber: "3",
      name: "Tether USDT",
      price: "$1.00",
      change1h: "0.03%",
      change24h: "0.01%",
      change7d: "0.01%",
      marketCap: "$118,390,699,960",
      volume24h: "$52,809,725,322",
      circulatingSupply: "118,376,416,506 USDT",
    },
    {
      coinNumber: "4",
      name: "BNB BNB",
      price: "$520.10",
      change1h: "0.94%",
      change24h: "0.94%",
      change7d: "2.35%",
      marketCap: "$75,900,287,950",
      volume24h: "$1,523,872,435",
      circulatingSupply: "145,934,277 BNB",
    },
    {
      coinNumber: "5",
      name: "Solana SOL",
      price: "$131.82",
      change1h: "1.44%",
      change24h: "-1.74%",
      change7d: "-1.22%",
      marketCap: "$61,681,271,228",
      volume24h: "$2,143,732,028",
      circulatingSupply: "467,933,630 SOL",
    },
    {
      coinNumber: "6",
      name: "USDC USDC",
      price: "$1.00",
      change1h: "0.01%",
      change24h: "0.00%",
      change7d: "0.00%",
      marketCap: "$35,335,750,006",
      volume24h: "$6,165,132,277",
      circulatingSupply: "35,333,402,808 USDC",
    },
    {
      coinNumber: "7",
      name: "XRP XRP",
      price: "$0.5331",
      change1h: "1.10%",
      change24h: "0.65%",
      change7d: "-5.14%",
      marketCap: "$30,028,200,533",
      volume24h: "$890,468,005",
      circulatingSupply: "56,329,375,591 XRP",
    },
  ];

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

  const handleCryptocurrencyName = (name) => {
    navigate(`/resources/ranking/${name}`);
  };

  return (
    <div>
      <Header />
      <div className="big-info-container">
        <div className="small-info-container">
          <div className="info-box">
            <div className="info-title">Trening (24H)</div>
            <ol>
              <li>
                <div className="info-value">Doge coin</div>
              </li>
              <li>
                {" "}
                <div className="info-value">Meme coin</div>
              </li>
              <li>
                {" "}
                <div className="info-value">Ethereum</div>
              </li>
            </ol>
          </div>
          <div className="info-box">
            <div className="info-title">Recently added </div>
            <ol>
              <li>
                <div className="info-value">Doge coin</div>
              </li>
              <li>
                {" "}
                <div className="info-value">Meme coin</div>
              </li>
              <li>
                {" "}
                <div className="info-value">Ethereum</div>
              </li>
            </ol>
          </div>
          <div className="info-box">
            <div className="info-title">Most visited</div>
            <ol>
              <li>
                <div className="info-value">Doge coin</div>
              </li>
              <li>
                {" "}
                <div className="info-value">Meme coin</div>
              </li>
              <li>
                {" "}
                <div className="info-value">Ethereum</div>
              </li>
            </ol>
          </div>
        </div>

        <div className="list-of-blocks-header">
          <div id="amount-of-blocks">Total amount of blocks: {100000}</div>
          <div id="amount-per-page-div">
            Blocks per page:
            <select
              value={currenciesPerPage}
              onChange={(e) => setCurrenciesPerPage(Number(e.target.value))}
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
            <div id="table-cryptocurrency-number">#</div>
            <div id="table-cryptocurrency-name">Name</div>
            <div id="table-cryptocurrency-price">Price</div>
            <div id="table-cryptocurrency-change-1h">1h %</div>
            <div id="table-cryptocurrency-change-24h">24h %</div>
            <div id="table-cryptocurrency-change-7d">7d %</div>
            <div id="table-cryptocurrency-market-cap">Market Cap</div>
            <div id="table-cryptocurrency-volume">Volume (24h)</div>
            <div id="table-cryptocurrency-circulating-supply">
              Circulating Supply
            </div>
          </div>

          <div className="table-body">
            {coins.map((coin, index) => (
              <div key={index} className="table-row">
                <div id="table-cryptocurrency-number">{coin.coinNumber}</div>
                <div id="table-cryptocurrency-name">
                  <span onClick={() => handleCryptocurrencyName(coin.name)}>
                    {coin.name}
                  </span>
                </div>
                <div id="table-cryptocurrency-price">{coin.price}</div>
                <div id="table-cryptocurrency-change-1h">{coin.change1h}</div>
                <div id="table-cryptocurrency-change-24h">{coin.change24h}</div>
                <div id="table-cryptocurrency-change-7d">{coin.change7d}</div>
                <div id="table-cryptocurrency-market-cap">{coin.marketCap}</div>
                <div id="table-cryptocurrency-volume">{coin.volume24h}</div>
                <div id="table-cryptocurrency-circulating-supply">
                  {coin.circulatingSupply}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
