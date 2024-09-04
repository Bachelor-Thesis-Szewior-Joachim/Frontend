import React, { useState } from "react";
import "./transactionDetails.css";
import "react-router-dom";
import Header from "../../../header";
import { useNavigate } from "react-router-dom";

function TransactionDetails() {
  const [rowsToShow, setRowsToShow] = useState(20);
  const navigate = useNavigate();

  const handleAddress = (address) => {
    navigate(`/blockchain/accounts/${address}`);
  };

  const accounts = [
    {
      transfers: [
        {
          from: "0xFa45B14B...93ddE50D1",
          to: "0xb6613CC5...C1D485BE9",
          amount: "1.03702",
          token: "WETH",
          valueUSD: "$2,604.29",
        },
        {
          from: "0xb6613CC5...C1D485BE9",
          to: "0xFa45B14B...93ddE50D1",
          amount: "6,013.030677400823936431",
          token: "MATIC",
          valueUSD: "$2,624.00",
        },
        {
          from: "0xb6613CC5...C1D485BE9",
          to: "0x000000fe...05F2E7E1c",
          amount: "15.045546089143716433",
          token: "MATIC",
          valueUSD: "$6.57",
        },
        {
          from: "0xFa45B14B...93ddE50D1",
          to: "0xb6613CC5...C1D485BE9",
          amount: "1.03702",
          token: "WETH",
          valueUSD: "$2,604.29",
        },
        {
          from: "0xb6613CC5...C1D485BE9",
          to: "0xFa45B14B...93ddE50D1",
          amount: "6,013.030677400823936431",
          token: "MATIC",
          valueUSD: "$2,624.00",
        },
        {
          from: "0xb6613CC5...C1D485BE9",
          to: "0x000000fe...05F2E7E1c",
          amount: "15.045546089143716433",
          token: "MATIC",
          valueUSD: "$6.57",
        },
        {
          from: "0xFa45B14B...93ddE50D1",
          to: "0xb6613CC5...C1D485BE9",
          amount: "1.03702",
          token: "WETH",
          valueUSD: "$2,604.29",
        },
        {
          from: "0xb6613CC5...C1D485BE9",
          to: "0xFa45B14B...93ddE50D1",
          amount: "6,013.030677400823936431",
          token: "MATIC",
          valueUSD: "$2,624.00",
        },
        {
          from: "0xb6613CC5...C1D485BE9",
          to: "0x000000fe...05F2E7E1c",
          amount: "15.045546089143716433",
          token: "MATIC",
          valueUSD: "$6.57",
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div className="overview-container">
        {/* <span className="overview-icon">🔗</span> <!-- Icon representing a link or transaction --> */}
        <span className="overview-text">Overview of the Transaction:</span>
        <span className="transaction-hash">0x93467213471237461</span>
      </div>

      <div className="outer-box">
        <div className="middle-box">
          <div className="inner-box">
            <div className="group-details">
              <div className="group-detail">
                <span className="label">Transaction Hash:</span>
                <span className="value">
                  0xfd8025d568af852973f102ea074be619...
                </span>
              </div>
              <div className="group-detail">
                <span className="label">Status:</span>
                <span className="value success">Success</span>
              </div>
              <div className="group-detail">
                <span className="label">Block:</span>
                <span className="value">20628396</span>
              </div>
              <div className="group-detail">
                <span className="label">Timestamp:</span>
                <span className="value">
                  30 mins ago (Aug-28-2024 04:51:59 PM UTC)
                </span>
              </div>
              <div className="group-detail">
                <span className="label">Transaction Action</span>
                <span className="value">
                  Call 0x98b2165d Method by 0x873849cE...6ccd04208 on
                  0xb6613CC5...C1D485BE9
                </span>
              </div>
              <div className="group-detail">
                <span className="label">From</span>
                <span className="value">
                  0x873849cE4d22aF36aad57C300d6d3446ccd04208
                </span>
              </div>
              <div className="group-detail">
                <span className="label">Interacted to/To</span>
                <span className="value">
                  0xb6613CC55866E282638006455390207C1D485BE9
                </span>
              </div>
              <div className="group-detail">
                <span className="label">ERC-20 Tokens Transferred</span>
                <span id="list-ERC-20" className="value">
                  <div className="small-table-body">
                    {accounts.slice(0, rowsToShow).map((account) => (
                      <div className="transfers">
                        <div className="transfer-details">
                          {account.transfers.map((transfer, index) => (
                            <div className="transfer-row" key={index}>
                              <span
                                className="transfer-from"
                                onClick={() => handleAddress(transfer.from)}
                              >
                                From {transfer.from}
                              </span>
                              To{" "}
                              <span
                                className="transfer-to"
                                onClick={() => handleAddress(transfer.to)}
                              >
                                {transfer.to}
                              </span>
                              For {transfer.amount}{" "}
                              <span className="transfer-token">
                                {transfer.token}
                              </span>
                              <span className="transfer-value">
                                ({transfer.valueUSD})
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="transfer-header">
                    <button className="transfer-button active">
                      All Transfers
                    </button>
                    <button className="transfer-button">Net Transfers</button>
                  </div>
                </span>
              </div>

              <div className="group-detail">
                <span className="label">Total value</span>
                <span className="value">0 ETH</span>
              </div>
              <div className="group-detail">
                <span className="label">Transaction fee</span>
                <span className="value">0 ETH</span>
              </div>
              <div className="group-detail">
                <span className="label">Gas Price</span>
                <span className="value">0 ETH</span>
              </div>
              <div className="group-detail">
                <span className="label">Gas limit & Usage by txn</span>
                <span className="value">0247 | 78%</span>
              </div>
              <div className="group-detail">
                <span className="label">Gas fees</span>
                <span className="value">0 ETH</span>
              </div>
              <div className="group-detail">
                <span className="label">Burnt fees</span>
                <span className="value">0 ETH</span>
              </div>
              <div className="group-detail">
                <span className="label">Transaction type</span>
                <span className="value">Legacy</span>
              </div>
              <div className="group-detail">
                <span className="label">Nonce</span>
                <span className="value">12345</span>
              </div>
              <div className="group-detail">
                <span className="label">Position in the block</span>
                <span className="value">0</span>
              </div>
              <div className="group-detail">
                <span className="label">Data</span>
                <span className="value">1234456456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
