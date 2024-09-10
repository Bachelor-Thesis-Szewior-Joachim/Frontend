// Items.js
import React, { useState } from "react";
import "../nftStatisticsDetails.css";
import "./items.css";

const Items = () => {
  const nftItems = [
    { id: 1, price: "0.000083 ETH", img: "/path-to-img1" },
    { id: 2, price: "0.00007761 ETH", img: "/path-to-img2" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Token ID");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div>
      <div className="search-filter-container">
        <div className="search-bar">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search by token ID"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="filter-dropdown">
          <select value={selectedFilter} onChange={handleFilterChange}>
            <option value="Token ID">Token ID</option>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
          </select>
        </div>
      </div>
      <div className="items-grid">
        {nftItems.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.img} alt={`NFT ${item.id}`} />
            <p>Last Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
