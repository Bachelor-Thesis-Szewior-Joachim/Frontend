import React, { useState, useEffect } from "react";
import "./converter.css";
import Header from "../../header";

function Converter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("Bitcoin (BTC)");
  const [toCurrency, setToCurrency] = useState("USD");
  const [conversionRate, setConversionRate] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.coingecko.com/api/v3/simple/price";

  // Available crypto and fiat currencies for both sides
  const currencyOptions = [
    "Bitcoin (BTC)",
    "Ethereum (ETH)",
    "Tether (USDT)",
    "BNB (BNB)",
    "Solana (SOL)",
    "USDC (USDC)",
    "XRP (XRP)",
    "Dogecoin (DOGE)",
    "Toncoin (TON)",
    "TRON (TRX)",
    "USD",
    "EUR",
    "GBP",
    "PLN",
    "KRW",
    "JPY",
    "AUD",
    "CAD",
  ];

  // Function to get the correct symbol for the API
  const getCurrencySymbol = (currency) => {
    if (currency.includes("(")) {
      return currency.split("(")[1].replace(")", "").toLowerCase(); // Ex: 'Bitcoin (BTC)' -> 'btc'
    }
    return currency.toLowerCase(); // For fiat currencies like 'USD'
  };

  // Function to fetch conversion rates from the API
  useEffect(() => {
    const fetchConversionRate = async () => {
      setLoading(true);
      try {
        const fromSymbol = getCurrencySymbol(fromCurrency);
        const toSymbol = getCurrencySymbol(toCurrency);

        console.log(`Fetching conversion from ${fromSymbol} to ${toSymbol}`); // Debugging

        const response = await fetch(
          `${API_URL}?ids=${fromSymbol}&vs_currencies=${toSymbol}`
        );
        const data = await response.json();

        console.log("API response: ", data); // Check what the API returns

        setConversionRate(data[fromSymbol]?.[toSymbol] || 1);
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
        setConversionRate(1); // Fallback to 1 in case of error
      }
      setLoading(false);
    };

    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  const handleConversion = () => {
    if (!conversionRate) return "Loading...";
    const convertedAmount = (amount * conversionRate).toFixed(2); // Calculate converted amount
    return convertedAmount;
  };

  return (
    <div>
      <Header />
      <div className="converter-container">
        <h2>Cryptocurrency Converter Calculator</h2>
        <div className="converter-box">
          <div className="converter-input">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
            />
          </div>

          <div className="converter-select">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencyOptions.map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="converter-arrow">⇆</div>

          <div className="converter-select">
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencyOptions.map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="conversion-result">
          {loading
            ? "Loading..."
            : `${amount} ${fromCurrency} = ${handleConversion()} ${toCurrency}`}
        </div>

        <div className="converter-buttons">
          <button
            className="refresh-btn"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
          <button className="save-btn">Save This Conversion</button>
        </div>
      </div>
    </div>
  );
}

export default Converter;
