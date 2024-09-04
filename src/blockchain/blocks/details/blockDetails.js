import React, { useState } from "react";
import "./blockDetails.css";
import "react-router-dom";
import Header from "../../../header";
import { useNavigate } from "react-router-dom";

function BlockDetails() {
  const navigate = useNavigate();

  const toggleAccordion = (sectionId) => {
    const sections = ["block-info", "slot-info", "blob-info"];

    sections.forEach((id) => {
      const content = document.getElementById(id);
      if (id === sectionId) {
        content.style.display = "block"; // Show the clicked section
      } else {
        content.style.display = "none"; // Hide the other sections
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="overview-container">
        {/* <span className="overview-icon">🔗</span> <!-- Icon representing a link or transaction --> */}
        <span className="overview-text">Overview of the Block:</span>
        <span className="transaction-hash">26</span>
      </div>

      <div className="outer-box">
        <div className="middle-box">
          <div className="inner-box">
            {/* Block Information */}
            <div className="accordion-item">
              <div id="buttons">
                <button
                  className="accordion-button"
                  onClick={() => toggleAccordion("block-info")}
                >
                  Block Information
                </button>
                <button
                  className="accordion-button"
                  onClick={() => toggleAccordion("slot-info")}
                >
                  Slot Information
                </button>
                <button
                  className="accordion-button"
                  onClick={() => toggleAccordion("blob-info")}
                >
                  Blob Information
                </button>
              </div>

              <div id="block-info" className="accordion-content">
                <div className="group-details">
                  <div className="group-detail">
                    <span className="label">Block number:</span>
                    <span className="value">26</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Status:</span>
                    <span className="value success">Success</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Timestamp:</span>
                    <span className="value">
                      30 mins ago (Aug-28-2024 04:51:59 PM UTC)
                    </span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Transactions</span>
                    <span className="value">List of transactions</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Withdrawals</span>
                    <span className="value">16 withdrawals in this block</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Fee recipient</span>
                    <span className="value">
                      0x62d4d3785f8117Be8d2eE8e1e81C9147098bC3fF
                    </span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Block reward</span>
                    <span className="value">
                      0.024449004582718483 ETH (0 + 0.042940985978030959 -
                      0.018491981395312476){" "}
                    </span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Total difficulty</span>
                    <span className="value">0</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Size</span>
                    <span className="value">0</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Gas used</span>
                    <span className="value">0 ETH</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Gas limit </span>
                    <span className="value">0247 | 78%</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Base fee per gas</span>
                    <span className="value">0 ETH</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Burnt fees</span>
                    <span className="value">0 ETH</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Extra data</span>
                    <span className="value">/Extra data</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Hash</span>
                    <span className="value">12345</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Parent Hash</span>
                    <span className="value">12345</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">State root</span>
                    <span className="value">1234456456</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Withdrawals root</span>
                    <span className="value">1234456456</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Nonce</span>
                    <span className="value">1234456456</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slot Information */}
            <div className="accordion-item">
              <div id="slot-info" className="accordion-content">
                <div className="group-details">
                  <div className="group-detail">
                    <span className="label">Slot:</span>
                    <span className="value">9848268</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Epoch:</span>
                    <span className="value">307758</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Proposer Index:</span>
                    <span className="value">1379184</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Slot Root Hash:</span>
                    <span className="value">
                      0x109b8313d66fb5a1315e7d8d184e775f2054456e26824d45cf6e5372ae36a41e
                    </span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Parent Root Hash:</span>
                    <span className="value">
                      0x2ceb523696cb8cfab3b92c569dee475ec7ea7903ba0853cb2bf0891564c90c
                    </span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Beacon Chain Deposit Count:</span>
                    <span className="value">1662446</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Slot Graffiti:</span>
                    <span className="value">0x (Hex:Null)</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Block Randomness:</span>
                    <span className="value">
                      0xcb5fa5256669c54e56958391f453a883c68cf69e8a88dab79d6046157c4e607d
                    </span>
                  </div>
                  <div id="rondo-reveal" className="group-detail">
                    <span className="label">Randao Reveal:</span>
                    <span className="value">
                      0x83a0dd8c5349f4c452a3385b34cf253029d6ae877ed13dd84a0ec6ee794301df319bab103fb476dda99463d3a5e7718505a8ccc3d4b2e734afb379b851e81de56e3be7c0c87271cd5be19e831cd8bc36776b2fea88343c053814a924bb314c6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blob Information */}
            <div className="accordion-item">
              <div id="blob-info" className="accordion-content">
                <div className="group-details">
                  <div className="group-detail">
                    <span className="label">Blob transaction: </span>
                    <span className="value">2 transactions</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Blob size: </span>
                    <span className="value">640KB</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Blob utilisation</span>
                    <span className="value">5.00 Blobs</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Blob Gas Price</span>
                    <span className="value">1 wei</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Blob Gas Used</span>
                    <span className="value">655,360</span>
                  </div>
                  <div className="group-detail">
                    <span className="label">Blob Gas Limit</span>
                    <span className="value">786,432</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockDetails;
