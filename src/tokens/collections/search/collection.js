import React, { useState, useEffect } from "react";
import "./collection.css";
import Header from "../../../header";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Collection() {
  const [tokensPerPage, setTokensPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [blockchainToShow, setBlockchainToShow] = useState("Solana");
  const [solanaCollections, setSolanaCollections] = useState([]);
  const [ethereumCollections, setEthereumCollections] = useState([]);
  const [klaytnCollections, setKlaytnCollections] = useState([]);


  const navigate = useNavigate();

  // Fetch collections based on the blockchain selected
  useEffect(() => {
    const fetchCollections = async (blockchain, setCollections) => {
      try {
        const response = await axios.get(`http://localhost:8080/collections/${blockchain}`);
        setCollections(response.data);
      } catch (error) {
        console.error(`Failed to fetch collections for ${blockchain}`, error);
      }
    };

    if (blockchainToShow === "Solana" && solanaCollections.length === 0) {
      fetchCollections("solana", setSolanaCollections);
    } else if (blockchainToShow === "Ethereum" && ethereumCollections.length === 0) {
      fetchCollections("ethereum", setEthereumCollections);
    } else if (blockchainToShow === "Klaytn" && klaytnCollections.length === 0) {
      fetchCollections("klaytn", setKlaytnCollections);
    }
  }, [blockchainToShow, solanaCollections, ethereumCollections, klaytnCollections]);

  const handleCollectionClick = (slug) => {
    navigate(`/token/collection/details/${slug}`, {state: {slug: slug}});
  };

  // Select the appropriate collections list to show based on blockchain selection
  const collectionsToShow = blockchainToShow === "Solana"
      ? solanaCollections
      : blockchainToShow === "Ethereum"
          ? ethereumCollections
          : klaytnCollections;

  return (
      <div>
        <Header />
        <div className="big-info-container">
          <div className="blockchain-selector">
            <label>Choose Blockchain:</label>
            <select
                value={blockchainToShow}
                onChange={(e) => setBlockchainToShow(e.target.value)}
            >
              <option value="Solana">Solana</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Klaytn">Klaytn</option>
            </select>
          </div>

          <div className="list-of-blocks-header">
            <div id="amount-of-blocks">Total amount of blocks: {collectionsToShow.length}</div>
            <div id="amount-per-page-div">
              Collections per page:
              <select
                  value={tokensPerPage}
                  onChange={(e) => setTokensPerPage(Number(e.target.value))}
              >
                <option value={20}>20</option>
                <option value={40}>40</option>
                <option value={60}>60</option>
              </select>
            </div>
          </div>

          <div className="table">
            <div className="table-header">
              <div id="table-collection-preview">Preview</div>
              <div id={"table-collection-slug"}>Slug</div>
              <div id="table-collection-name">Collection Name</div>
              <div id="table-collection-total-supply">Total Supply</div>
              <div id="table-collection-blockchain">Blockchain</div>
              <div id="table-collection-owner">Owner</div>
              <div id="table-collection-opensea-url">OpenSea URL</div>
            </div>
            <div className="table-body">
              {collectionsToShow.map((collection, index) => (
                  <div key={index} className="table-row">
                    <div id="table-collection-preview">
                      {collection.imageUrl ? (
                          <img src={collection.imageUrl} alt={collection.name} className="collection-image" />
                      ) : (
                          "No Image"
                      )}
                    </div>
                    <div id={"table-collection-slug"}><span
                        className="clickable"
                        onClick={() => handleCollectionClick(collection.slug)}
                    >{collection.slug}</span></div>
                    <div id="table-collection-name">
                      {collection.name}
                  </div>
                    <div id="table-collection-total-supply">{collection.totalSupply}</div>
                    <div id="table-collection-blockchain">{collection.blockchain}</div>
                    <div id="table-collection-owner">{collection.owner}</div>
                    <div id="table-collection-opensea-url">
                      <a href={collection.openseaUrl} target="_blank" rel="noopener noreferrer">
                        OpenSea
                      </a>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Collection;
