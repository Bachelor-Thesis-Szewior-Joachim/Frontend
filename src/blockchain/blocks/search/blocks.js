import React, { useState } from "react";
import "./blocks.css";
import Header from "../../../header";

function Blocks() {
  const [blocksPerPage, setBlocksPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 822778; // Example total pages

  const blocks = [
    {
      blockNumber: "20569435",
      slot: "9777341",
      age: "15 secs ago",
      txt: "126",
      feeRecipient: "beaverbuild",
      gasUsed: "9,186,638 (30.62% | -39%)",
      gasLimit: "30,000,000",
      baseFee: "1.6 Gwei",
      reward: "0.02551 ETH",
      burntFees: "0.014731 (36.60%)",
    },
    {
      blockNumber: "20569434",
      slot: "9777340",
      age: "30 secs ago",
      txt: "120",
      feeRecipient: "owlbuild",
      gasUsed: "9,500,000 (31.67% | -35%)",
      gasLimit: "30,000,000",
      baseFee: "1.5 Gwei",
      reward: "0.02600 ETH",
      burntFees: "0.015000 (37.50%)",
    },
    {
      blockNumber: "20569433",
      slot: "9777339",
      age: "45 secs ago",
      txt: "110",
      feeRecipient: "foxbuild",
      gasUsed: "8,800,000 (29.33% | -42%)",
      gasLimit: "30,000,000",
      baseFee: "1.7 Gwei",
      reward: "0.02400 ETH",
      burntFees: "0.014500 (35.25%)",
    },
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

  return (
    <div>
      <Header />
      <div className="big-info-container">
        <div className="small-info-container">
          <div className="info-box">
            <div className="info-title">NETWORK UTILIZATION (24H)</div>
            <div className="info-value">50.5%</div>
          </div>
          <div className="info-box">
            <div className="info-title">LAST SAFE BLOCK</div>
            <div className="info-value">20572016</div>
          </div>
          <div className="info-box">
            <div className="info-title">PRODUCED BY MEV BUILDERS (24H)</div>
            <div className="info-value">91.5%</div>
          </div>
        </div>

        <div className="list-of-blocks-header">
          <div id="amount-of-blocks">Total amount of blocks: {100000}</div>
          <div id="amount-per-page-div">
            Blocks per page:
            <select
              value={blocksPerPage}
              onChange={(e) => setBlocksPerPage(Number(e.target.value))}
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
            <div id="table-block-number">Block</div>
            <div id="table-slot">Slot</div>
            <div id="table-age">Age</div>
            <div id="table-txt">Txn</div>
            <div id="table-fee-recipient">Fee Recipient</div>
            <div id="table-total-gas-used">Gas Used</div>
            <div id="table-total-gas-limit">Gas Limit</div>
            <div id="table-base-fee">Base Fee</div>
            <div id="table-reward">Reward</div>
            <div id="table-burnt-fees">Burnt Fees (ETH)</div>
          </div>
          <div className="table-body">
            {blocks.map((block, index) => (
              <div key={index} className="table-row">
                <div id="table-block-number">{block.blockNumber}</div>
                <div id="table-slot">{block.slot}</div>
                <div id="table-age">{block.age}</div>
                <div id="table-txt">{block.txt}</div>
                <div id="table-fee-recipient">{block.feeRecipient}</div>
                <div id="table-total-gas-used">{block.gasUsed}</div>
                <div id="table-total-gas-limit">{block.gasLimit}</div>
                <div id="table-base-fee">{block.baseFee}</div>
                <div id="table-reward">{block.reward}</div>
                <div id="table-burnt-fee">{block.burntFees}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blocks;
