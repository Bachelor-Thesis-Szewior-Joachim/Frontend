import React from "react";
import "./aboutComponent.css";

const AboutComponent = () => {
  return (
    <div className="about-container">
      <h2>About Bitcoin (BTC)</h2>
      <div className="about-content">
        <p className="intro">
          <strong>What is Bitcoin (BTC)?</strong>
        </p>
        <p className="description">
          Bitcoin is a decentralized cryptocurrency originally described in a
          2008 whitepaper by a person, or group of people, using the alias
          Satoshi Nakamoto. It was launched in January 2009.
        </p>
        <p className="highlight">
          Bitcoin is a peer-to-peer online currency, allowing transactions to
          happen directly between equal, independent participants without
          needing intermediaries. It was created to enable “online payments to
          be sent directly from one party to another without involving a
          financial institution.”
        </p>
        <p className="description">
          Bitcoin holds the distinction of being the first-ever cryptocurrency
          to be used in actual financial transactions. Over the years, it has
          gained tremendous recognition, adoption, and market capitalization,
          solidifying its place as the most well-known digital asset.
        </p>
        <div className="about-footer">
          <a
            href="https://bitcoin.org/bitcoin.pdf"
            className="whitepaper-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Original Bitcoin Whitepaper &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
