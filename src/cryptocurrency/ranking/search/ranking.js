import React, { useState, useEffect } from "react";
import Header from "../../../header.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../../security";
import "./ranking.css";

function Ranking() {
  const [currenciesPerPage, setCurrenciesPerPage] = useState(10); // 10 items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [coins, setCoins] = useState([]); // Data from the API
  const [totalPages, setTotalPages] = useState(10); // Set based on total items

  const navigate = useNavigate();

  // Function to fetch cryptocurrencies based on pagination
  const fetchCryptocurrencies = async (page, limit) => {
    const startIndex = (page - 1) * limit + 1;
    const lastIndex = page * limit;
    const token = getToken(); // Get the token from localStorage
    const headers = { 'Authorization': `Bearer ${token}` };

    try {
      const response = await axios.get(`http://localhost:8080/cryptocurrency/ranking`, {
        headers,
        params: { startIndex, lastIndex },
      });
      setCoins(response.data); // Set the fetched coins to display
    } catch (error) {
      console.error("Error fetching cryptocurrencies:", error);
    }
  };

  // Fetch data whenever the page or items per page changes
  useEffect(() => {
    fetchCryptocurrencies(currentPage, currenciesPerPage);
  }, [currentPage, currenciesPerPage]);

  const handleCryptocurrencyName = (cmcId) => {
    console.log("cmcId: ", cmcId);
    navigate(`/resources/ranking/${cmcId}`, { state: { cmcId: cmcId } });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
      <div>
        <Header />
        <div className="big-info-container">
          <div className="list-of-blocks-header">
            <div id="amount-of-blocks">Total amount of blocks: {100000}</div>
            <div id="amount-per-page-div">
              Blocks per page:
              <select
                  value={currenciesPerPage}
                  onChange={(e) => setCurrenciesPerPage(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
            <div id="button-first-div">
              <button id="button-first" onClick={() => setCurrentPage(1)}>
                First
              </button>
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
              <button id="button-last" onClick={() => setCurrentPage(totalPages)}>
                Last
              </button>
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
              {coins.map((coin) => (
                  <div key={coin.id} className="table-row">
                    <div id="table-cryptocurrency-number">{coin.cmcRank}</div>
                    <div id="table-cryptocurrency-name">
                  <span onClick={() => handleCryptocurrencyName(coin.cmcId)}>
                    {coin.name}
                  </span>
                    </div>
                    <div id="table-cryptocurrency-price">${coin.price.toFixed(2)}</div>
                    <div id="table-cryptocurrency-change-1h">{coin.percentChange1h}%</div>
                    <div id="table-cryptocurrency-change-24h">{coin.percentChange24h}%</div>
                    <div id="table-cryptocurrency-change-7d">{coin.percentChange7d}%</div>
                    <div id="table-cryptocurrency-market-cap">${coin.marketCap.toLocaleString()}</div>
                    <div id="table-cryptocurrency-volume">${coin.volume24h.toLocaleString()}</div>
                    <div id="table-cryptocurrency-circulating-supply">
                      {Number(coin.circulatingSupply).toLocaleString()} {coin.symbol}
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
