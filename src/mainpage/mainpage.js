import React from "react";
import "./mainpage.css";

function Mainpage() {
  return (
    <div className="Mainpage">
      <header className="Mainpage-header">
        <div className="logo">LOGO</div>
        <div>
          <nav>
            <ul className="nav-links">
              <div>
                <li className="nav-item">
                  Wallet
                  <ul className="dropdown">
                    <li>Find by Id</li>
                  </ul>
                </li>
              </div>
              <div>
                <li className="nav-item">
                  Transactions
                  <ul className="dropdown">
                    <li>Find by Hash</li>
                    <li>All transactions</li>
                  </ul>
                </li>
              </div>
              <div>
                <li>Blockchain</li>
              </div>
              <div>
                <li>Login</li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="left-section">
          <section className="welcome-section">
            <p>
              Welcome to <span className="brand-name">[Your Brand Name]</span>,
              your gateway to seamless blockchain transactions and real-time
              insights across Ethereum, Solana, and our custom blockchain.
              Connect your wallet, explore the blockchain, and make secure
              transactions all in one place.
            </p>
          </section>
        </div>
        <div className="right-section">
          {/* Add any content for the right section here */}
        </div>
      </main>
    </div>
  );
}

export default Mainpage;
