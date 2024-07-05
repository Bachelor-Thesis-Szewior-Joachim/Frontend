import React from "react";
import "./mainpage.css";
import Header from "../header";

function Mainpage() {
  return (
    <div>
      <Header />
      <div className="Mainpage">
        <main className="main">
          <div className="left-section">
            <section className="welcome-section">
              <p>
                Welcome to <span className="brand-name">[Your Brand Name]</span>
                , your gateway to seamless blockchain transactions and real-time
                insights across Ethereum, Solana, and our custom blockchain.
                Connect your wallet, explore the blockchain, and make secure
                transactions all in one place.
              </p>
            </section>
          </div>
          <div className="right-section"></div>
        </main>
      </div>
    </div>
  );
}

export default Mainpage;
