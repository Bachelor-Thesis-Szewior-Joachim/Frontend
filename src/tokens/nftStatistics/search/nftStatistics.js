import React, { useState, useEffect } from "react";
import "./nftStatistics.css";
import Header from "../../../header";
import { useNavigate } from "react-router-dom";
import {
  createMarketCapChart,
  createSalesVolumeChart,
  createTotalSalesChart,
} from "./script";

function NftStatistics() {
  const [nftPerPage, setNftPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [blockchainToShow, setBlockchainToShow] = useState("All");

  const totalPages = 822778; // Example total pages

  const navigate = useNavigate();

  const nfts = [
    {
      name: "Based Zaza",
      chain: "ETH",
      volume_24h: "708.81 ETH",
      market_cap: "2,500 ETH",
      floor_price: "0.00006 ETH",
      avg_price_24h: "0.5 ETH",
      sales_24h: "956",
      assets: "5000",
      owners: "798",
      owners_percent: "15.96%",
    },
    {
      name: "Skies",
      chain: "MATIC",
      volume_24h: "3,908,037.44 MATIC",
      market_cap: "17,606,737.11 MATIC",
      floor_price: "40,624.25 MAT",
      avg_price_24h: "41,137.24 MATIC",
      sales_24h: "95",
      assets: "5000",

      owners: "31",
      owners_percent: "2.41%",
    },
    {
      name: "Vegetables",
      chain: "ETH",
      volume_24h: "519 ETH",
      market_cap: "768 ETH",
      floor_price: "3 ETH",
      avg_price_24h: "3 ETH",
      sales_24h: "173",
      assets: "5000",

      owners: "51",
      owners_percent: "19.92%",
    },
    // Continue formatting the remaining data similarly...
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

  const handleNFT = (name) => {
    navigate(`/tokens/nftStatistics/${name}`);
  };

  useEffect(() => {
    const marketCapCtx = document
      .getElementById("marketCapChart")
      .getContext("2d");
    const salesVolumeCtx = document
      .getElementById("salesVolumeChart")
      .getContext("2d");
    const totalSalesCtx = document
      .getElementById("totalSalesChart")
      .getContext("2d");

    createMarketCapChart(marketCapCtx);
    createSalesVolumeChart(salesVolumeCtx);
    createTotalSalesChart(totalSalesCtx);
  }, []);

  return (
    <div>
      <Header />
      <div className="big-info-container">
        <div className="small-info-container">
          <div className="info-box">
            <canvas id="marketCapChart" width="400" height="200"></canvas>
          </div>
          <div className="info-box">
            <canvas id="salesVolumeChart" width="400" height="200"></canvas>
          </div>
          <div className="info-box">
            <canvas id="totalSalesChart" width="400" height="200"></canvas>
          </div>
        </div>

        <div className="blockchain-selector">
          <label>Choose Blockchain:</label>
          <select
            value={blockchainToShow}
            onChange={(e) => setBlockchainToShow(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Solana">Solana</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Bitcoin">Bitcoin</option>
          </select>
        </div>

        <div className="list-of-nfts-header">
          <div id="amount-of-nfts">Total amount of nfts: {100000}</div>
          <div id="amount-per-page-div">
            Blocks per page:
            <select
              value={nftPerPage}
              onChange={(e) => setNftPerPage(Number(e.target.value))}
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
            <div id="table-nft-nft-number">#</div>
            <div id="table-nft-name">Name</div>
            <div id="table-nft-chain">Chain</div>
            <div id="table-nft-volume">Volume(24h)</div>
            <div id="table-nft-estimated-market-cap">Est. Market Cap</div>
            <div id="table-nft-floor-price">Floor price</div>
            <div id="table-nft-avg-price">Avg. Price(24h)</div>
            <div id="table-nft-sales">Sales(24h)</div>
            <div id="table-nft-assets">Assets</div>
            <div id="table-nft-owners">Owners</div>
            <div id="table-nft-owners-percent">Owners(%)</div>
          </div>
          <div className="table-body">
            {nfts.map((nft, index) => (
              <div key={index} className="table-row">
                <div id="table-nft-nft-number">{index}</div>
                <div id="table-nft-name" onClick={() => handleNFT(nft.name)}>
                  <span>{nft.name}</span>
                </div>
                <div id="table-nft-chain">{nft.chain}</div>
                <div id="table-nft-volume">{nft.volume_24h}</div>
                <div id="table-nft-estimated-market-cap">{nft.market_cap}</div>
                <div id="table-nft-floor-price">{nft.floor_price}</div>
                <div id="table-nft-avg-price">{nft.avg_price_24h}</div>
                <div id="table-nft-sales">{nft.sales_24h}</div>
                <div id="table-nft-assets">{nft.assets}</div>
                <div id="table-nft-owners">{nft.owners}</div>
                <div id="table-nft-owners-percent">{nft.owners_percent}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftStatistics;
