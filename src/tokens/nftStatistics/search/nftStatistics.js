import React, {useEffect, useState} from "react";
import "./nftStatistics.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../../header";
import {getToken} from "../../../security";

function NftStatistics() {
  const [searchOption, setSearchOption] = useState("Contract");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchValue) {
      alert("Please enter a search value.");
      return;
    }

    try {
      navigate(`/tokens/nftStatistics/${searchValue}`, { state: { searchOption: searchOption, value: searchValue} });
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("No data found for the specified search.");
    }
  };

  const [tokens, setTokens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
            "http://localhost:8080/cryptocurrency/tokens?startIndex=1&lastIndex=56", {
  headers: {
    'Authorization': `Bearer ${getToken()}`
  }
}
        );
        setTokens(response.data);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    };
    fetchTokens();
  }, []);

  // Pagination calculations
  const tokensPerPage = 10;
  const totalPages = 6;

  // Get current page's tokens
  const indexOfLastToken = currentPage * tokensPerPage;
  const indexOfFirstToken = indexOfLastToken - tokensPerPage;
  const currentTokens =
      currentPage < totalPages
          ? tokens.slice(indexOfFirstToken, indexOfLastToken)
          : tokens.slice(indexOfFirstToken);

  // Pagination handlers
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  // Handle row click to navigate
  const handleRowClick = (name, cmcId) => {
    navigate(`/resources/ranking/${name}`, { state: { cmcId } });
  };

  return (
      <div>
        <Header/>
        <div className="nft-statistics">
          <h3>NFT Statistics Search</h3>
          <div className="search-bar">
            <select
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
                className="search-option"
            >
              <option value="Contract">Contract</option>
              <option value="Identifier">Identifier</option>
              <option value="Name">Name</option>
              <option value="Collection">Collection</option>
            </select>

            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={`Enter ${searchOption} value`}
                className="search-input"
            />

            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
        </div>
        <div className="token-table-container">
          <h2>Blockchain Tokens</h2>
          <table className="token-table">
            <thead>
            <tr>
              <th>CMC ID</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>24h Volume</th>
              <th>1h Change (%)</th>
              <th>24h Change (%)</th>
              <th>7d Change (%)</th>
            </tr>
            </thead>
            <tbody style={{textAlign: "center"}}>
            {currentTokens.map((token) => (
                <tr key={token.id}>
                  <td>
                <span
                    className="clickable"
                    onClick={() => handleRowClick(token.cryptocurrencyDto.name, token.cmcId)}
                >
                  {token.cmcId}
                </span>
                  </td>
                  <td style={{textAlign: "center"}}>{token.cryptocurrencyDto.name}</td>
                  <td style={{textAlign: "center"}}>{token.cryptocurrencyDto.symbol}</td>
                  <td style={{textAlign: "center"}}>{token.cryptocurrencyDto.price.toFixed(2)}</td>
                  <td style={{textAlign: "center"}}>{token.cryptocurrencyDto.marketCap.toLocaleString()}</td>
                  <td style={{textAlign: "center"}}>{token.cryptocurrencyDto.volume24h.toLocaleString()}</td>
                  <td style={{textAlign: "center"}}>{token.cryptocurrencyDto.percentChange1h.toFixed(2)}</td>
                  <td style={{textAlign: "center"}}>{token.cryptocurrencyDto.percentChange24h.toFixed(2)}</td>
                  <td style={{textAlign: "center"}}>{token.cryptocurrencyDto.percentChange7d.toFixed(2)}</td>
                </tr>
            ))}
            </tbody>
          </table>

          <div className="pagination-controls">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>

  );
}

export default NftStatistics;
