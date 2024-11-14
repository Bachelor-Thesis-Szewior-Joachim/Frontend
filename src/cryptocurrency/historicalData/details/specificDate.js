import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../header";
import axios from "axios";
import { getToken } from "../../../security"; // Import the getToken function
import "./specificDate.css";

const SpecificDate = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "rank", direction: "ascending" });
  const selectedDate = "2022-11-02T00:00:00.000Z"; // Placeholder date for the API call

  // Fetch data from the API based on a specific date
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken(); // Get the token from localStorage
        const headers = {
          'Authorization': `Bearer ${token}`
        };

        // Fetch historical data based on the specific date
        const response = await axios.get(
            `http://localhost:8080/cryptocurrency/getSpecificDayHistoricalData/${selectedDate}`,
            { headers }
        );
        const data = response.data;

        // Update data with name and symbol from additional API call for each cryptocurrency
        const updatedData = await Promise.all(
            data.map(async (coin) => {
              const coinDetailResponse = await axios.get(
                  `http://localhost:8080/cryptocurrency/${coin.cmcId}`,
                  { headers }
              );
              const coinDetailData = coinDetailResponse.data;
              return {
                ...coin,
                name: coinDetailData.name,
                symbol: coinDetailData.symbol,
                price: `$${parseFloat(coin.price).toFixed(2)}`,
                marketCap: `$${parseFloat(coin.marketCap).toLocaleString()}`,
                volume24h: `$${parseFloat(coin.volume24h).toLocaleString()}`,
                circulatingSupply: `${parseFloat(coin.circulatingSupply).toLocaleString()} ${coinDetailData.symbol}`,
              };
            })
        );

        setCoins(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedDate]);

  // Handle sorting by column
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Sort coins array based on current sortConfig
  const sortedCoins = [...coins].sort((a, b) => {
    if (sortConfig.key === "price" || sortConfig.key === "marketCap") {
      const aValue = parseFloat(a[sortConfig.key].replace(/[$,]/g, ""));
      const bValue = parseFloat(b[sortConfig.key].replace(/[$,]/g, ""));
      return sortConfig.direction === "ascending" ? aValue - bValue : bValue - aValue;
    }
    return sortConfig.direction === "ascending"
        ? a[sortConfig.key] - b[sortConfig.key]
        : b[sortConfig.key] - a[sortConfig.key];
  });

  const handleCryptocurrencyName = (name) => {
    navigate(`/resources/ranking/${name}`);
  };

  return (
      <div>
        <Header />
        <div className="snapshot-ranking-container">
          <div className="snapshot-container">
            <h2 className="snapshot-title">Historical Snapshot - 26 February 2023</h2>
            <div className="filters-container">
              {/* Filter sections omitted for brevity */}
            </div>
          </div>
          <div className="table">
            <div className="table-header">
              <div id="table-cryptocurrency-number">#</div>
              <div id="table-cryptocurrency-name">Name</div>
              <div id="table-cryptocurrency-symbol">Symbol</div>
              <div id="table-cryptocurrency-price" onClick={() => handleSort("price")}>
                Price {sortConfig.key === "price" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </div>
              <div id="table-cryptocurrency-market-cap" onClick={() => handleSort("marketCap")}>
                Market Cap {sortConfig.key === "marketCap" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </div>
              <div id="table-cryptocurrency-volume">Volume (24h)</div>
              <div id="table-cryptocurrency-circulating-supply">Circulating Supply</div>
            </div>

            <div className="table-body">
              {sortedCoins.map((coin, index) => (
                  <div key={index} className="table-row">
                    <div id="table-cryptocurrency-number">{index + 1}</div>
                    <div id="table-cryptocurrency-name">
                      <span onClick={() => handleCryptocurrencyName(coin.name)}>{coin.name}</span>
                    </div>
                    <div id="table-cryptocurrency-symbol">{coin.symbol}</div>
                    <div id="table-cryptocurrency-price">{coin.price}</div>
                    <div id="table-cryptocurrency-market-cap">{coin.marketCap}</div>
                    <div id="table-cryptocurrency-volume">{coin.volume24h}</div>
                    <div id="table-cryptocurrency-circulating-supply">{coin.circulatingSupply}</div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default SpecificDate;
