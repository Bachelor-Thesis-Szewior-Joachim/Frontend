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
                Welcome to <span className="brand-name">WonBlock</span>
                , your gateway to seamless blockchain transactions and real-time
                insights across Ethereum, Solana, and Bitcoin.
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
