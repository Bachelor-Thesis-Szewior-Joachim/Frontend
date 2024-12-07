import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../../security"; // Import the getToken function
import "./nftStatisticsDetails.css";
import Header from "../../../header";

const NFTStatisticsDetails = () => {
    const [nftData, setNftData] = useState([]);
    const location = useLocation();
    const { searchOption, value } = location.state || {};

    useEffect(() => {
        if (!searchOption || !value) return;

        const endpointMap = {
            Contract: `contract/${value}`,
            Identifier: `identifier/${value}`,
            Name: `name/${value}`,
            Collection: `collection/${value}`,
        };

        const endpoint = endpointMap[searchOption];
        if (!endpoint) return;

        const fetchData = async () => {
            const token = getToken(); // Get the token from localStorage
            const headers = { Authorization: `Bearer ${token}` };

            try {
                const response = await axios.get(
                    `http://localhost:8080/nft-statistics/${endpoint}`,
                    { headers }
                );
                if (searchOption === "Identifier") {
                    setNftData([response.data]); // Wrap data in an array for consistent rendering
                } else {
                    setNftData(response.data);
                }
            } catch (error) {
                console.error("Error fetching NFT data:", error);
            }
        };

        fetchData();
    }, [searchOption, value]);

    if (!nftData.length) {
        return <p>Loading or no data available...</p>;
    }

    return (
        <div>
            <Header />
            <div className="nftStatistics-container">
                {nftData.map((nft) => (
                    <div key={nft.id} className="nftStatistics-item">
                        <h3>{nft.name || "Unnamed NFT"}</h3>
                        <p><strong>Contract:</strong> {nft.contract}</p>
                        <p><strong>Identifier:</strong> {nft.identifier}</p>
                        {nft.description && (
                            <p>
                                <strong>Description:</strong> {nft.description}
                            </p>
                        )}
                        <div className="nftStatistics-image-container">
                            {nft.imageUrl ? (
                                <video
                                    src={nft.imageUrl}
                                    controls
                                    alt={nft.name}
                                    className="nftStatistics-image"
                                />
                            ) : (
                                <p>No video available</p>
                            )}
                        </div>
                        <a
                            href={nft.openseaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nftStatistics-opensea-link"
                        >
                            View on OpenSea
                        </a>
                        <p className="nftStatistics-last-updated">
                            Last updated:{" "}
                            {nft.updatedAt
                                ? new Date(nft.updatedAt).toLocaleString()
                                : "Unknown"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NFTStatisticsDetails;
