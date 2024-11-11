import React from "react";
import "./aboutComponent.css";

const AboutComponent = ({ name }) => {
  return (
      <div className="about-container">
        <h2>About {name}</h2>
        <div className="about-content">
          <p className="intro">
            <strong>What is {name}?</strong>
          </p>
          <p className="description">
            {name} is a decentralized cryptocurrency with unique features and market behaviors. It offers value in peer-to-peer transactions without intermediaries.
          </p>
          <div className="about-footer">
            <a href="https://bitcoin.org/bitcoin.pdf" className="whitepaper-link" target="_blank" rel="noopener noreferrer">
              Read the Original Whitepaper &rarr;
            </a>
          </div>
        </div>
      </div>
  );
};

export default AboutComponent;
