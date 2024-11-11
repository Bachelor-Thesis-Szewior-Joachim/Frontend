import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../header.js";
import "./categories.css";

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]); // Holds all categories data from API
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 10; // Fixed to 10 items per page

  const navigate = useNavigate();
  const totalPages = Math.ceil(allCategories.length / categoriesPerPage);

  useEffect(() => {
    // Fetch all categories from the API once
    const fetchCategories = async () => {
      try {
        const response = await fetch(`http://localhost:8080/categories`);
        const data = await response.json();
        setAllCategories(data); // Store the full list of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Slice the data to display only the current page
  const currentCategories = allCategories.slice(
      (currentPage - 1) * categoriesPerPage,
      currentPage * categoriesPerPage
  );

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
          <div className="list-of-blocks-header">
            <div id="amount-of-blocks">Total amount of categories: {allCategories.length}</div>
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
          </div>

          <div className="table">
            <div className="table-header">
              <div id="table-categories-category-id">Category ID</div>
              <div id="table-categories-name">Name</div>
              <div id="table-categories-title">Title</div>
              <div id="table-categories-description">Description</div>
              <div id="table-categories-number-of-tokens">Number of Tokens</div>
              <div id="table-categories-avg-price-change">Avg. Price Change</div>
              <div id="table-categories-market-cap">Market Cap</div>
              <div id="table-categories-market-cap-change">Market Cap Change</div>
              <div id="table-categories-volume">Volume</div>
              <div id="table-categories-volume-change">Volume Change</div>
            </div>

            <div className="table-body">
              {currentCategories.map((category, index) => (
                  <div key={index} className="table-row">
                    <div id="table-categories-category-id">
                      {category.categoryId.slice(0, 4) + "..."}
                    </div>
                    <div id="table-categories-name">
                    {category.name}
                    </div>
                    <div id="table-categories-title">{category.title}</div>
                    <div id="table-categories-description">{category.description}</div>
                    <div id="table-categories-number-of-tokens">{category.numberOfTokens}</div>
                    <div id="table-categories-avg-price-change">
                      {category.avgPriceChange}%
                    </div>
                    <div id="table-categories-market-cap">{category.marketCap}</div>
                    <div id="table-categories-market-cap-change">
                      {category.marketCapChange}%
                    </div>
                    <div id="table-categories-volume">{category.volume}</div>
                    <div id="table-categories-volume-change">
                      {category.volumeChange}%
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Categories;
