import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming token is saved as "token" in localStorage
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page after logout
  };

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
                    onClick={() => navigate("/tokens/collection")}
                  >
                    Collection
                  </li>
                  <li
                    id="list-elem"
                    onClick={() =>
                      navigate("/resources/general-nft-statistics")
                    }
                  >
                    General NFT statistics
                  </li>
                </ul>
              </li>
            </div>
            <div>
              <li className="nav-item">
                <FontAwesomeIcon icon={faChevronDown} className="nav-icon" />
                Cryptocurrency
                <ul className="dropdown">
                  <li
                    id="list-elem"
                    onClick={() => navigate("/resources/ranking")}
                  >
                    Ranking
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/resources/categories")}
                  >
                    Categories
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/cryptocurrency/globalMarket")}
                  >
                    Global market
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/cryptocurrency/historicalData")}
                  >
                    Historical data
                  </li>

                  <li
                    id="list-elem"
                    onClick={() => navigate("/cryptocurrency/gainersAndLosers")}
                  >
                    Gainers & Losers
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
                    onClick={() => navigate("/resources/converter")}
                  >
                    Converter
                  </li>
                  <li
                    id="list-elem"
                    onClick={() => navigate("/resources/directory")}
                  >
                    Directory
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
              {isLoggedIn ? (
                  <>
                    <li onClick={ () => {navigate("/simulateTransaction")}}>
                      Simulate Transaction
                    </li>
                    <li onClick={ () => {navigate("/predictPrices")}}>
                      Predict Prices
                    </li>
                    <li>
                      <button onClick={handleLogout} className="logout-button">
                        Logout
                      </button>
                    </li>
                  </>
              ) : (
                  <li onClick={ () => {navigate("/login")}}>
                  Login
                  </li>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
