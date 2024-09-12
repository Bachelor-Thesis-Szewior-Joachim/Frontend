import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../header.js";
import "./categories.css";

const Categories = () => {
  const [categoriesPerPage, setCategoriesPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 822778;
  const navigate = useNavigate();

  const categories = [
    {
      rank: 1,
      name: "Gambling",
      avgPriceChange: "+76.11%",
      topGainers: {
        name: "BetU",
        symbol: "BETU",
        change: "+3130.87%",
      },
      marketCap: "$400,043,808",
      dominance: "0.02%",
      volume: "$8,869,933",
      gainersLosersNumber: {
        gainers: 31,
        gainersPercentage: "74%",
        losers: 11,
        losersPercentage: "26%",
      },
    },
    {
      rank: 2,
      name: "Sports",
      avgPriceChange: "+43.37%",
      topGainers: {
        name: "BetU",
        symbol: "BETU",
        change: "+3130.87%",
      },
      marketCap: "$774,514,437",
      dominance: "0.04%",
      volume: "$52,864,535",
      gainersLosersNumber: {
        gainers: 38,
        gainersPercentage: "53%",
        losers: 34,
        losersPercentage: "47%",
      },
    },
    {
      rank: 3,
      name: "Circle Ventures Portfolio",
      avgPriceChange: "+19.35%",
      topGainers: {
        name: "Multichain",
        symbol: "MULTI",
        change: "+181.93%",
      },
      marketCap: "$7,971,730,351",
      dominance: "0.39%",
      volume: "$317,509,999",
      gainersLosersNumber: {
        gainers: 8,
        gainersPercentage: "80%",
        losers: 2,
        losersPercentage: "20%",
      },
    },
    {
      rank: 4,
      name: "Metaverse",
      avgPriceChange: "+15.21%",
      topGainers: {
        name: "BetU",
        symbol: "BETU",
        change: "+3130.87%",
      },
      marketCap: "$13,740,528,033",
      dominance: "0.67%",
      volume: "$805,427,234",
      gainersLosersNumber: {
        gainers: 152,
        gainersPercentage: "68%",
        losers: 72,
        losersPercentage: "32%",
      },
    },
    {
      rank: 5,
      name: "SUI Ecosystem",
      avgPriceChange: "+14.25%",
      topGainers: {
        name: "Suicune",
        symbol: "HSUI",
        change: "+79.46%",
      },
      marketCap: "$5,391,014,148",
      dominance: "0.26%",
      volume: "$4,943,686,031",
      gainersLosersNumber: {
        gainers: 21,
        gainersPercentage: "91%",
        losers: 2,
        losersPercentage: "9%",
      },
    },
    {
      rank: 6,
      name: "Play To Earn",
      avgPriceChange: "+13.65%",
      topGainers: {
        name: "BetU",
        symbol: "BETU",
        change: "+3130.87%",
      },
      marketCap: "$7,561,609,846",
      dominance: "0.37%",
      volume: "$562,884,062",
      gainersLosersNumber: {
        gainers: 142,
        gainersPercentage: "60%",
        losers: 95,
        losersPercentage: "40%",
      },
    },
    {
      rank: 7,
      name: "Algorithmic Stablecoin",
      avgPriceChange: "+12.88%",
      topGainers: {
        name: "TOR",
        symbol: "TOR",
        change: "+155.94%",
      },
      marketCap: "$1,024,929,266",
      dominance: "0.05%",
      volume: "$11,640,744",
      gainersLosersNumber: {
        gainers: 5,
        gainersPercentage: "42%",
        losers: 7,
        losersPercentage: "58%",
      },
    },
    {
      rank: 8,
      name: "Atomicals Ecosystem",
      avgPriceChange: "+11.02%",
      topGainers: {
        name: "AVM (Atomicals)",
        symbol: "AVM",
        change: "+76.28%",
      },
      marketCap: "$0",
      dominance: "0.00%",
      volume: "$2,090,170",
      gainersLosersNumber: {
        gainers: 3,
        gainersPercentage: "50%",
        losers: 3,
        losersPercentage: "50%",
      },
    },
    {
      rank: 9,
      name: "Moonriver Ecosystem",
      avgPriceChange: "+10.46%",
      topGainers: {
        name: "Multichain",
        symbol: "MULTI",
        change: "+181.93%",
      },
      marketCap: "$170,131,947,893",
      dominance: "8.32%",
      volume: "$53,111,073,962",
      gainersLosersNumber: {
        gainers: 13,
        gainersPercentage: "72%",
        losers: 5,
        losersPercentage: "28%",
      },
    },
    {
      rank: 10,
      name: "Transport",
      avgPriceChange: "+10.16%",
      topGainers: {
        name: "Aeron",
        symbol: "ARNX",
        change: "+20.48%",
      },
      marketCap: "$64",
      dominance: "0.00%",
      volume: "$185,025",
      gainersLosersNumber: {
        gainers: 1,
        gainersPercentage: "50%",
        losers: 1,
        losersPercentage: "50%",
      },
    },
    {
      rank: 11,
      name: "Gaming",
      avgPriceChange: "+9.34%",
      topGainers: {
        name: "BetU",
        symbol: "BETU",
        change: "+3130.87%",
      },
      marketCap: "$16,409,484,567",
      dominance: "0.80%",
      volume: "$1,126,362,446",
      gainersLosersNumber: {
        gainers: 296,
        gainersPercentage: "60%",
        losers: 199,
        losersPercentage: "40%",
      },
    },
  ];

  const handleCategoriesName = (name) => {
    navigate(`/resources/categories/${name}`);
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
              value={categoriesPerPage}
              onChange={(e) => setCategoriesPerPage(Number(e.target.value))}
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
            <div id="table-categories-preview">#</div>
            <div id="table-categories-name">Name</div>
            <div id="table-categories-avg-price-change">Avg. Price Change</div>
            <div id="table-categories-top-gainers">Top Gainers</div>
            <div id="table-categories-market-cap">Market cap</div>
            <div id="table-categories-dominance">Dominance</div>
            <div id="table-categories-volume">Volume</div>
            <div id="table-categories-graph">Gainers/Losers</div>
          </div>

          <div className="table-body">
            {categories.map((category, index) => (
              <div key={index} className="table-row">
                <div id="table-categories-preview">{category.rank}</div>
                <div id="table-categories-name">
                  <span
                    className="clickable"
                    onClick={() => handleCategoriesName(category.name)}
                  >
                    {category.name}
                  </span>
                </div>
                <div id="table-categories-avg-price-change">
                  {category.avgPriceChange}
                </div>
                <div id="table-categories-top-gainers">
                  <span
                    className="clickable"
                    onClick={() => handleTopGainers(category.topGainers.name)}
                  >
                    {category.topGainers.name}, {category.topGainers.change},{" "}
                    {category.topGainers.symbol}
                  </span>
                </div>
                <div id="table-categories-market-cap">{category.marketCap}</div>
                <div id="table-categories-dominance">{category.dominance}</div>
                <div id="table-categories-volume">{category.volume}</div>
                <div id="table-categories-graph"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
