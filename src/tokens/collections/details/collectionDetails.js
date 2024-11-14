import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../../security"; // Import the getToken function
import "./collectionDetails.css";
import Header from "../../../header";

function CollectionDetails() {
  const [collection, setCollection] = useState(null);
  const [transactionsPerPage, setTransactionsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const slug = location.state?.slug;

  console.log("Slug:", slug);

  useEffect(() => {
    const fetchCollectionDetails = async () => {
      const token = getToken(); // Get the token from localStorage
      const headers = { 'Authorization': `Bearer ${token}` };

      try {
        const response = await axios.get(`http://localhost:8080/collections/collection/${slug}`, { headers });
        console.log("Collection details:", response.data);
        setCollection(response.data);
      } catch (error) {
        console.error("Error fetching collection details:", error);
      }
    };

    fetchCollectionDetails();
  }, [slug]);

  const handleTransactionHash = (address) => {
    navigate(`/blockchain/transactions/${address}`);
  };

  const handleAccountAddress = (address) => {
    navigate(`/blockchain/accounts/${address}`);
  };

  if (!collection) {
    return <div>Loading...</div>; // Show loading while data is being fetched
  }

  return (
      <div>
        <Header />
        <div className="big-info-container">
          <div className="small-info-container">
            <div className="info-box">
              <div className="info-title">Collection Name</div>
              <div className="info-value">{collection.name}</div>

              <div className="info-title">Description</div>
              <div className="info-value">{collection.description || "N/A"}</div>

              <div className="info-title">Blockchain</div>
              <div className="info-value">{collection.blockchain}</div>

              <div className="info-title">Owner</div>
              <div className="info-value">
              <span
                  className="clickable"
                  onClick={() => handleAccountAddress(collection.owner)}
              >
                {collection.owner}
              </span>
              </div>

              <div className="info-title">Total Supply</div>
              <div className="info-value">{collection.totalSupply}</div>
            </div>

            <div className="info-box">
              <div className="info-title">Trait Offers Enabled</div>
              <div className="info-value">{collection.traitOffersEnabled ? "Yes" : "No"}</div>

              <div className="info-title">Collection Offers Enabled</div>
              <div className="info-value">{collection.collectionOffersEnabled ? "Yes" : "No"}</div>

              <div className="info-title">Opensea URL</div>
              <div className="info-value">
                <a href={collection.openseaUrl} target="_blank" rel="noopener noreferrer">
                  OpenSea Link
                </a>
              </div>

              <div className="info-title">External URL</div>
              <div className="info-value">
                <a href={collection.externalUrl} target="_blank" rel="noopener noreferrer">
                  {collection.externalUrl || "N/A"}
                </a>
              </div>

              <div className="info-title">Created Date</div>
              <div className="info-value">{collection.createdDate}</div>
            </div>

            <div className="info-box">
              <div className="info-title">Token Contract(s)</div>
              <div className="info-value">
                {collection.contracts?.map((contract, index) => (
                    <div key={index}>
                      <a href={`/blockchain/contracts/${contract}`} className="contract-link">
                        {contract}
                      </a>
                    </div>
                )) || "N/A"}
              </div>

              <img
                  src={collection.imageUrl || "https://via.placeholder.com/150"}
                  alt={collection.name}
                  className="collection-image"
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default CollectionDetails;
