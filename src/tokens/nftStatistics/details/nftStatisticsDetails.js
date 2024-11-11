import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

        let isMounted = true;


        fetch(`http://localhost:8080/nft-statistics/${endpoint}`)
            .then(response => response.json())
            .then(data => {
                if (isMounted) {
                    if (searchOption === "Identifier") {
                        setNftData([data])
                    } else {
                        setNftData(data);
                    }
                }
            })
            .catch(error => console.error("Error fetching NFT data:", error));

        return () => {
            isMounted = false; // Cleanup
        };
    }, [searchOption, value]);

    console.log("NFT Data: ",nftData);

    if (!nftData.length) {
        return <p>Loading or no data available...</p>;
    }

    return (
        <div>
            <Header/>
            <div className="nft-statistics-container">
                {nftData.map((nft) => (
                    <div key={nft.id} className="nft-item">
                        <h3>{nft.name || "Unnamed NFT"}</h3>
                        <p><strong>Contract:</strong> {nft.contract}</p>
                        <p><strong>Identifier:</strong> {nft.identifier}</p>
                        {nft.description && <p><strong>Description:</strong> {nft.description}</p>}
                        <div className="nft-image-container">
                            {nft.imageUrl && (
                                <video
                                    src={nft.imageUrl}
                                    controls
                                    width="250"
                                    alt={nft.name}
                                    className="nft-image"
                                />
                            )}
                        </div>
                        <a href={nft.openseaUrl} target="_blank" rel="noopener noreferrer">
                            View on OpenSea
                        </a>
                        <p><small>Last updated: {new Date(nft.updatedAt).toLocaleString()}</small></p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default NFTStatisticsDetails;
