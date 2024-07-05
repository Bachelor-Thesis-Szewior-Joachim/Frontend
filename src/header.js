import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="Mainpage-header">
      <div className="logo" onClick={() => navigate("/")}>
        LOGO
      </div>
      <div>
        <nav>
          <ul className="nav-links">
            <div>
              <li className="nav-item">
                Blockchain
                <ul className="dropdown">
                  <li onClick={() => navigate("/blockchain/accounts")}>
                    Accounts
                  </li>
                  <li onClick={() => navigate("/blockchain/blocks")}>
                    View Blocks
                  </li>
                  <li onClick={() => navigate("/blockchain/transactions")}>
                    Transactions
                  </li>
                </ul>
              </li>
            </div>
            <div>
              <li className="nav-item">
                Tokens
                <ul className="dropdown">
                  <li onClick={() => navigate("/tokens/top-tokens")}>
                    Top tokens
                  </li>
                </ul>
              </li>
            </div>
            <div>
              <li className="nav-item">
                Resources
                <ul className="dropdown">
                  <li onClick={() => navigate("/resources/charts")}>Charts</li>
                  <li onClick={() => navigate("/resources/stats")}>Stats</li>
                  <li onClick={() => navigate("/resources/top-statistics")}>
                    Top statistics
                  </li>
                  <li onClick={() => navigate("/resources/leaderboard")}>
                    Leaderboard
                  </li>
                  <li onClick={() => navigate("/resources/news")}>News</li>
                </ul>
              </li>
            </div>
            <div>
              <li onClick={() => navigate("/login")}>Login</li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
