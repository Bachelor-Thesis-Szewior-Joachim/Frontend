import React from "react";
import "./nftsComponent.css";

const NftsComponent = () => {
  const nftData = [
    {
      name: "NodeMonkes",
      volume: "6.865 BTC",
      floorPrice: "0.26 BTC",
      avgPrice: "0.1312 BTC",
      sales: "48",
    },
    {
      name: "Bitcoin Puppets",
      volume: "2.1555 BTC",
      floorPrice: "--",
      avgPrice: "0.09372 BTC",
      sales: "23",
    },
    {
      name: "Runestone",
      volume: "1.9435 BTC",
      floorPrice: "0.006888 BTC",
      avgPrice: "0.006757 BTC",
      sales: "273",
    },
    {
      name: "Quantum Cats",
      volume: "1.8665 BTC",
      floorPrice: "--",
      avgPrice: "0.2666 BTC",
      sales: "7",
    },
    {
      name: "Ordinal Maxi Biz",
      volume: "0.9107 BTC",
      floorPrice: "1 BTC",
      avgPrice: "0.2277 BTC",
      sales: "4",
    },
  ];

  return (
    <div className="nfts-container">
      <h2>NFTs on Bitcoin</h2>
      <table className="nft-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Volume (24h)</th>
            <th>Floor Price</th>
            <th>Avg. Price (24h)</th>
            <th>Sales (24h)</th>
          </tr>
        </thead>
        <tbody>
          {nftData.map((nft, index) => (
            <tr key={index}>
              <td>{nft.name}</td>
              <td>{nft.volume}</td>
              <td>{nft.floorPrice}</td>
              <td>{nft.avgPrice}</td>
              <td>{nft.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NftsComponent;
