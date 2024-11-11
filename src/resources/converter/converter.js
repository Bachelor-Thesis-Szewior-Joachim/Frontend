import React, { useState, useEffect } from "react";
import "./converter.css";
import Header from "../../header";

function Converter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("Bitcoin (BTC)");
  const [toCurrency, setToCurrency] = useState("USD");
  const [conversionResult, setConversionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:8080/converter";

  const currencyOptions = ["USD", "EUR", "GBP", "PLN", "KRW", "JPY", "AUD", "CAD"];

  const cryptoCurrenciesMap = {
    "Bitcoin (BTC)": { cmcId: 1, symbol: "BTC" },
    "Ethereum (ETH)": { cmcId: 1027, symbol: "ETH" },
    "Tether (USDT)": { cmcId: 825, symbol: "USDT" },
    "BNB (BNB)": { cmcId: 1839, symbol: "BNB" },
    "Solana (SOL)": { cmcId: 5426, symbol: "SOL" },
    "USDC (USDC)": { cmcId: 3408, symbol: "USDC" },
    "XRP (XRP)": { cmcId: 52, symbol: "XRP" },
    "Dogecoin (DOGE)": { cmcId: 74, symbol: "DOGE" },
    "Toncoin (TON)": { cmcId: 11419, symbol: "TON" },
    "TRON (TRX)": { cmcId: 1958, symbol: "TRX" },
  };

  useEffect(() => {
    const fetchConversion = async () => {
      setLoading(true);
      try {
        const baseCurrencyId = cryptoCurrenciesMap[fromCurrency].cmcId;

        const response = await fetch(
            `${API_URL}?baseCurrency=${baseCurrencyId}&targetCurrency=${toCurrency}&amount=${amount}`
        );
        const data = await response.text();

        setConversionResult(data);
      } catch (error) {
        console.error("Error fetching conversion:", error);
        setConversionResult("Error");
      }
      setLoading(false);
    };

    fetchConversion();
  }, [fromCurrency, toCurrency, amount]);

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
                {Object.keys(cryptoCurrenciesMap).map((crypto, index) => (
                    <option key={index} value={crypto}>
                      {crypto}
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
                : `${amount} ${fromCurrency} = ${Number(conversionResult || 0).toFixed(2)} ${toCurrency}`}
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
