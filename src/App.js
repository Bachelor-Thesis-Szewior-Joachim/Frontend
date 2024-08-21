import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./mainpage/mainpage";
import Accounts from "./blockchain/accounts/search/accounts";
import Blocks from "./blockchain/blocks/search/blocks";
import Transactions from "./blockchain/transactions/search/transactions";
import Login from "./login/login";
import SignUp from "./signup/signup";
import Charts from "./resources/charts/charts";
import Leaderboard from "./resources/leaderboard/leaderboard";
import News from "./resources/news/news";
import Stats from "./resources/stats/stats";
import TopStats from "./resources/topStats/topStats";
import TopTokens from "./tokens/topTokens";
import AccountDetails from "./blockchain/accounts/details/accountDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/blockchain/accounts" element={<Accounts />} />
        <Route path="/blockchain/address" element={<AccountDetails />} />
        <Route path="/blockchain/blocks" element={<Blocks />} />
        <Route path="/blockchain/transactions" element={<Transactions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resources/charts" element={<Charts />} />
        <Route path="/resources/leaderboard" element={<Leaderboard />} />
        <Route path="/resources/news" element={<News />} />
        <Route path="/resources/stats" element={<Stats />} />
        <Route path="/resources/top-statistics" element={<TopStats />} />
        <Route path="/tokens/top-tokens" element={<TopTokens />} />
      </Routes>
    </Router>
  );
};

export default App;
