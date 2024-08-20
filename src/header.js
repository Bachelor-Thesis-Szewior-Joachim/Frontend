import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
                <FontAwesomeIcon icon={faChevronDown} className="nav-icon" />
                Blockchain
                <ul className="dropdown">
                  <li
                    id="list-elem"
                    onClick={() => navigate("/blockchain/accounts")}
                  >
                    Accounts
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/blockchain/blocks")}
                  >
                    View Blocks
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/blockchain/transactions")}
                  >
                    Transactions
                  </li>
                </ul>
              </li>
            </div>
            <div>
              <li className="nav-item">
                <FontAwesomeIcon icon={faChevronDown} className="nav-icon" />
                Tokens
                <ul className="dropdown">
                  <li
                    id="list-elem"
                    onClick={() => navigate("/tokens/top-tokens")}
                  >
                    Top tokens
                  </li>
                </ul>
              </li>
            </div>
            <div>
              <li className="nav-item">
                <FontAwesomeIcon icon={faChevronDown} className="nav-icon" />
                Resources
                <ul className="dropdown">
                  <li
                    id="list-elem"
                    onClick={() => navigate("/resources/charts")}
                  >
                    Charts
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/resources/stats")}
                  >
                    Stats
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/resources/top-statistics")}
                  >
                    Top statistics
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/resources/leaderboard")}
                  >
                    Leaderboard
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/resources/news")}
                  >
                    News
                  </li>
                </ul>
              </li>
            </div>
            <div>
              <li className="nav-item" onClick={() => navigate("/login")}>
                Login
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
