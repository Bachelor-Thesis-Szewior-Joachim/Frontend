import { React, useState } from "react";
import Header from "../../header";
import "./gainersAndLosers.css";
import { useNavigate } from "react-router-dom";

const GainersAndLosers = () => {
  const [coinsPerPage, setCoinsPerPage] = useState("20");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const totalPages = 822778; // Example total pages

  const navigate = useNavigate();

  const coins = [
    {
      rank: 1,
      name: "Bitcoin",
      symbol: "BTC",
      marketCap: "$454,795,165,822.82",
      price: "$23,561.21",
      circulatingSupply: "19,302,706 BTC",
      volume24h: "$16,644,534,841.91",
      percent1h: "0.48%",
      percent24h: "1.66%",
      percent7d: "-3.15%",
    },
    {
      rank: 2,
      name: "Ethereum",
      symbol: "ETH",
      marketCap: "$200,793,139,093.29",
      price: "$1,640.82",
      circulatingSupply: "122,373,866 ETH *",
      volume24h: "$5,727,967,432.13",
      percent1h: "0.56%",
      percent24h: "2.88%",
      percent7d: "-2.42%",
    },
    {
      rank: 3,
      name: "Tether",
      symbol: "USDT",
      marketCap: "$70,853,056,161.10",
      price: "$1.0001",
      circulatingSupply: "70,846,878,838 USDT *",
      volume24h: "$23,103,836,401.25",
      percent1h: "0.00%",
      percent24h: "0.00%",
      percent7d: "-0.01%",
    },
    {
      rank: 4,
      name: "BNB",
      symbol: "BNB",
      marketCap: "$48,789,334,458.76",
      price: "$309.00",
      circulatingSupply: "157,895,783 BNB *",
      volume24h: "$312,320,210.89",
      percent1h: "0.33%",
      percent24h: "2.19%",
      percent7d: "-0.94%",
    },
    {
      rank: 5,
      name: "USD Coin",
      symbol: "USDC",
      marketCap: "$42,627,802,559.27",
      price: "$1.0001",
      circulatingSupply: "42,622,016,676 USDC *",
      volume24h: "$2,507,543,870.24",
      percent1h: "0.02%",
      percent24h: "-0.02%",
      percent7d: "0.02%",
    },
    {
      rank: 6,
      name: "XRP",
      symbol: "XRP",
      marketCap: "$19,261,559,273.94",
      price: "$0.378",
      circulatingSupply: "50,950,912,949 XRP *",
      volume24h: "$441,815,644.65",
      percent1h: "0.36%",
      percent24h: "-0.01%",
      percent7d: "-2.14%",
    },
    {
      rank: 7,
      name: "Cardano",
      symbol: "ADA",
      marketCap: "$12,788,186,746.65",
      price: "$0.369",
      circulatingSupply: "34,658,848,274 ADA *",
      volume24h: "$207,684,309.87",
      percent1h: "0.65%",
      percent24h: "1.82%",
      percent7d: "-7.78%",
    },
    {
      rank: 8,
      name: "Polygon",
      symbol: "MATIC",
      marketCap: "$11,190,260,041.65",
      price: "$1.2812",
      circulatingSupply: "8,734,317,475 MATIC *",
      volume24h: "$413,456,032.07",
      percent1h: "0.78%",
      percent24h: "2.59%",
      percent7d: "-13.35%",
    },
    {
      rank: 9,
      name: "Binance USD",
      symbol: "BUSD",
      marketCap: "$11,133,434,699.84",
      price: "$1.0004",
      circulatingSupply: "11,129,348,393 BUSD *",
      volume24h: "$4,351,628,127.70",
      percent1h: "0.01%",
      percent24h: "0.03%",
      percent7d: "0.02%",
    },
    {
      rank: 10,
      name: "Dogecoin",
      symbol: "DOGE",
      marketCap: "$10,905,805,148.02",
      price: "$0.0822",
      circulatingSupply: "132,670,764,300 DOGE",
      volume24h: "$218,231,641.66",
      percent1h: "0.41%",
      percent24h: "1.75%",
      percent7d: "-5.48%",
    },
    {
      rank: 11,
      name: "Solana",
      symbol: "SOL",
      marketCap: "$8,796,808,992.01",
      price: "$23.26",
      circulatingSupply: "378,258,319 SOL *",
      volume24h: "$370,371,590.92",
      percent1h: "0.97%",
      percent24h: "3.25%",
      percent7d: "-6.38%",
    },
    {
      rank: 12,
      name: "Polkadot",
      symbol: "DOT",
      marketCap: "$7,767,630,631.61",
      price: "$6.6896",
      circulatingSupply: "1,161,149,617 DOT *",
      volume24h: "$221,715,960.24",
      percent1h: "0.76%",
      percent24h: "2.28%",
      percent7d: "-10.13%",
    },
    {
      rank: 13,
      name: "Shiba Inu",
      symbol: "SHIB",
      marketCap: "$7,050,499,301.56",
      price: "$0.00001284",
      circulatingSupply: "549,063,278,876,302 SHIB *",
      volume24h: "$211,029",
      percent1h: "0.76%",
      percent24h: "2.28%",
      percent7d: "-10.13%",
    },
  ];

  // Function to handle sorting
  const sortCoins = (column) => {
    const newDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);
  };

  // Function to compare values
  const compareValues = (key, order = "asc") => {
    return function innerSort(a, b) {
      // Make sure the key exists
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      let varA = a[key];
      let varB = b[key];

      // Convert price, marketCap, and volume to numbers by removing $ and commas
      if (key === "volume24h" || key === "marketCap" || key === "price") {
        varA = parseFloat(varA.replace(/[$,]/g, "")) || 0; // Remove $ and , then convert to number
        varB = parseFloat(varB.replace(/[$,]/g, "")) || 0;
      }

      // Handle percentage fields (percent1h, percent24h, percent7d)
      if (key.includes("percent")) {
        varA = parseFloat(varA.replace(/[%]/g, "")) || 0; // Remove % and convert to number
        varB = parseFloat(varB.replace(/[%]/g, "")) || 0;
      }

      // Default comparison (works for strings and numbers)
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }

      return order === "desc" ? comparison * -1 : comparison;
    };
  };

  const sortedCoins = [...coins].sort(compareValues(sortColumn, sortDirection));

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
      <h1>Top Crypto Gainers and Losers</h1>
      <h4>
        This is the list of crypto coins and tokens who gained or lost the most
        in the period of 24 hours with volume &gt; 50 000USD
      </h4>

      <div className="gainers-and-losers-container">
        <div className="list-of-blocks-header">
          <div id="amount-of-blocks">Total amount of coins: {100000}</div>
          <div id="amount-per-page-div">
            Coins per page:
            <select
              value={coinsPerPage}
              onChange={(e) => setCoinsPerPage(Number(e.target.value))}
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
            <div
              id="table-cryptocurrency-number"
              onClick={() => sortCoins("rank")}
            >
              #
            </div>
            <div
              id="table-cryptocurrency-name"
              onClick={() => sortCoins("name")}
            >
              Name
            </div>
            <div
              id="table-cryptocurrency-symbol"
              onClick={() => sortCoins("symbol")}
            >
              Symbol
            </div>
            <div
              id="table-cryptocurrency-price"
              onClick={() => sortCoins("price")}
            >
              Price
            </div>
            <div
              id="table-cryptocurrency-change-1h"
              onClick={() => sortCoins("percent1h")}
            >
              1h %
            </div>
            <div
              id="table-cryptocurrency-change-24h"
              onClick={() => sortCoins("percent24h")}
            >
              24h %
            </div>
            <div
              id="table-cryptocurrency-change-7d"
              onClick={() => sortCoins("percent7d")}
            >
              7d %
            </div>
            <div
              id="table-cryptocurrency-volume"
              onClick={() => sortCoins("volume24h")}
            >
              Volume (24h)
            </div>
          </div>

          <div className="table-body">
            {sortedCoins.map((coin, index) => (
              <div key={index} className="table-row">
                <div id="table-cryptocurrency-number">{coin.rank}</div>
                <div id="table-cryptocurrency-name">{coin.name}</div>
                <div id="table-cryptocurrency-symbol">{coin.symbol}</div>
                <div id="table-cryptocurrency-price">{coin.price}</div>
                <div id="table-cryptocurrency-change-1h">{coin.percent1h}</div>
                <div id="table-cryptocurrency-change-24h">
                  {coin.percent24h}
                </div>
                <div id="table-cryptocurrency-change-7d">{coin.percent7d}</div>
                <div id="table-cryptocurrency-volume">{coin.volume24h}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GainersAndLosers;
