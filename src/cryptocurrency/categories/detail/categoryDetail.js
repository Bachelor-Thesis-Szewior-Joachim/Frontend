import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../header.js";
import "./categoryDetail.css";

const CategoryDetail = () => {
  const [tokensPerPage, setTokensPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 822778;
  const navigate = useNavigate();

  const tokens = [
    {
      rank: 213,
      name: "Rollbit Coin",
      symbol: "RLB",
      price: "$0.1021",
      "1h_change": "+1.37%",
      "24h_change": "-4.16%",
      "7d_change": "+31.90%",
      market_cap: "$272,236,460",
      volume_24h: "$2,865,371",
      volume_24h_units: "28,048,464 RLB",
      circulating_supply: "2,666,952,570 RLB",
      last_7_days: "positive",
    },
    {
      rank: 551,
      name: "Shuffle",
      symbol: "SHFL",
      price: "$0.2992",
      "1h_change": "-0.20%",
      "24h_change": "+2.33%",
      "7d_change": "-8.64%",
      market_cap: "$42,517,090",
      volume_24h: "$1,625,558",
      volume_24h_units: "5,440,821 SHFL",
      circulating_supply: "142,104,827 SHFL",
      last_7_days: "negative",
    },
    {
      rank: 595,
      name: "FUNToken",
      symbol: "FUN",
      price: "$0.003405",
      "1h_change": "+0.05%",
      "24h_change": "+1.62%",
      "7d_change": "+8.50%",
      market_cap: "$36,920,870",
      volume_24h: "$660,854",
      volume_24h_units: "194,102,730 FUN",
      circulating_supply: "10,843,201,660 FUN",
      last_7_days: "positive",
    },
    {
      rank: 689,
      name: "BFG Token",
      symbol: "BFG",
      price: "$0.02312",
      "1h_change": "+0.30%",
      "24h_change": "-0.22%",
      "7d_change": "+7.48%",
      market_cap: "$25,960,089",
      volume_24h: "$10,276",
      volume_24h_units: "444,429 BFG",
      circulating_supply: "1,122,808,916 BFG",
      last_7_days: "positive",
    },
    {
      rank: 824,
      name: "TG Casino",
      symbol: "TGC",
      price: "$0.2023",
      "1h_change": "-0.26%",
      "24h_change": "+0.14%",
      "7d_change": "+18.30%",
      market_cap: "$15,951,241",
      volume_24h: "$51,365",
      volume_24h_units: "253,625 TGC",
      circulating_supply: "78,841,521 TGC",
      last_7_days: "positive",
    },
    {
      rank: 1358,
      name: "Hamster",
      symbol: "HAM",
      price: "$0.000081502",
      "1h_change": "+3.35%",
      "24h_change": "+13.99%",
      "7d_change": "+19.58%",
      market_cap: "$3,581,119",
      volume_24h: "$904,854",
      volume_24h_units: "616,056,823,988,266 HAM",
      circulating_supply: "2,384,230,000HAM",
      last_7_days: "positive",
    },
    {
      rank: 1438,
      name: "Wownero",
      symbol: "WOW",
      price: "$0.04164",
      "1h_change": "+1.41%",
      "24h_change": "+3.39%",
      "7d_change": "-3.58%",
      market_cap: "$2,754,005",
      volume_24h: "$1,377,406",
      volume_24h_units: "33,165,458 WOW",
      circulating_supply: "66,139,439 WOW",
      last_7_days: "negative",
    },
  ];

  const handleTokenName = (name) => {
    navigate(`/resources/ranking/${name}`);
  };

  const handleAccountAddress = (address) => {
    navigate(`/blockchain/accounts/${address}`);
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
  const handleTopGainers = (name) => {
    navigate(`/resources/cryptocurrency/${name}`);
  };

  return (
    <div>
      <Header />
      <div className="big-info-container">
        <div className="list-of-blocks-header">
          <div id="amount-of-blocks">Total amount of categories: {100000}</div>
          <div id="amount-per-page-div">
            Categories per page:
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
            <div id="table-category-token-preview">#</div>
            <div id="table-category-token-name">Name</div>
            <div id="table-category-token-price">Price</div>
            <div id="table-category-token-symbol">Symbol</div>
            <div id="table-category-token-1h-change">1h</div>
            <div id="table-category-token-24h-change">24h</div>
            <div id="table-category-token-7d-change">7d</div>
            <div id="table-category-token-market-cap">Market cap</div>
            <div id="table-category-token-volume">Valume 24h</div>
            <div id="table-category-token-volume-units">Valume 24h Units</div>
            <div id="table-category-circulating-supply">Circulating Supply</div>
            <div id="table-category-token-last-7-days">Last 7 days</div>
          </div>

          <div className="table-body">
            {tokens.map((token, index) => (
              <div key={index} className="table-row">
                <div id="table-category-token-preview">{token.rank}</div>
                <div id="table-category-token-name">
                  <span
                    className="clickable"
                    onClick={() => handleTokenName(token.name)}
                  >
                    {token.name}
                  </span>
                </div>
                <div id="table-category-token-price">{token.price}</div>
                <div id="table-category-token-symbol">{token.symbol}</div>
                <div id="table-category-token-1h-change">
                  {token["1h_change"]}
                </div>
                <div id="table-category-token-24h-change">
                  {token["24h_change"]}
                </div>
                <div id="table-category-token-7d-change">
                  {token["7d_change"]}
                </div>

                <div id="table-category-token-market-cap">
                  {token.market_cap}
                </div>
                <div id="table-category-token-volume">{token.volume_24h}</div>
                <div id="table-category-token-volume-units">
                  {token.volume_24h_units}
                </div>
                <div id="table-category-circulating-supply">
                  {token.circulating_supply}
                </div>
                <div
                  id="table-category-token-last-7-days"
                  className={
                    token.last_7_days.includes("negative")
                      ? "negative"
                      : "positive"
                  }
                >
                  {token.last_7_days}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
