import React, { useState, useEffect } from "react";
import Header from "../../header";
import "./gainersAndLosers.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../security"; // Import the getToken function

const GainersAndLosers = () => {
  const [coins, setCoins] = useState([]);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const navigate = useNavigate();

  // Fetch coins data from API
  const fetchCoins = async (page) => {
    try {
      const startIndex = (page - 1) * coinsPerPage + 1;
      const lastIndex = page * coinsPerPage;
      const token = getToken(); // Get the token from localStorage
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      const response = await axios.get(
          `http://localhost:8080/cryptocurrency/ranking?startIndex=${startIndex}&lastIndex=${lastIndex}`,
          { headers }
      );

      // Filter out records with volume < 50000
      const filteredData = response.data.filter((coin) => coin.volume24h >= 50000);
      setCoins(filteredData);
      setTotalPages(Math.ceil(100 / coinsPerPage)); // Assuming 100 total records
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data whenever page or coinsPerPage changes
  useEffect(() => {
    fetchCoins(currentPage);
  }, [currentPage, coinsPerPage]);

  // Sort coins by column
  const sortCoins = (column) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);
  };

  const compareValues = (key, order = "asc") => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

      let varA = a[key];
      let varB = b[key];

      if (key === "volume24h" || key === "marketCap" || key === "price" || key === "circulatingSupply") {
        varA = parseFloat(varA) || 0;
        varB = parseFloat(varB) || 0;
      }

      if (key.includes("percent")) {
        varA = parseFloat(varA) || 0;
        varB = parseFloat(varB) || 0;
      }

      let comparison = varA > varB ? 1 : varA < varB ? -1 : 0;
      return order === "desc" ? comparison * -1 : comparison;
    };
  };

  const sortedCoins = [...coins].sort(compareValues(sortColumn, sortDirection));

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
      <div>
        <Header />
        <h1>Top Crypto Gainers and Losers</h1>
        <h4>
          This is the list of crypto coins and tokens that gained or lost the most in 24 hours with volume &gt; 50,000 USD
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
              <button id="button-first" onClick={() => {setCurrentPage(1)}}>First</button>
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
              <button id="button-last" onClick={() => {setCurrentPage(10)}}>Last</button>
            </div>
          </div>
          <div className="table">
            <div className="table-header">
              <div onClick={() => sortCoins("cmcRank")}>#</div>
              <div onClick={() => sortCoins("name")}>Name</div>
              <div onClick={() => sortCoins("symbol")}>Symbol</div>
              <div onClick={() => sortCoins("price")}>Price</div>
              <div onClick={() => sortCoins("percentChange1h")}>1h %</div>
              <div onClick={() => sortCoins("percentChange24h")}>24h %</div>
              <div onClick={() => sortCoins("percentChange7d")}>7d %</div>
              <div onClick={() => sortCoins("volume24h")}>Volume (24h)</div>
              <div onClick={() => sortCoins("circulatingSupply")}>Circulating Supply</div>
              <div onClick={() => sortCoins("marketCap")}>Market Cap</div>
            </div>

            <div className="table-body">
              {sortedCoins.map((coin) => (
                  <div key={coin.id} className="table-row">
                    <div>{coin.cmcRank}</div>
                    <div>{coin.name}</div>
                    <div>{coin.symbol}</div>
                    <div>{`$${parseFloat(coin.price).toLocaleString()}`}</div>
                    <div>{`${coin.percentChange1h.toFixed(2)}%`}</div>
                    <div>{`${coin.percentChange24h.toFixed(2)}%`}</div>
                    <div>{`${coin.percentChange7d.toFixed(2)}%`}</div>
                    <div>{`$${parseFloat(coin.volume24h).toLocaleString()}`}</div>
                    <div>{`${parseFloat(coin.circulatingSupply).toLocaleString()} ${coin.symbol}`}</div>
                    <div>{`$${parseFloat(coin.marketCap).toLocaleString()}`}</div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default GainersAndLosers;
