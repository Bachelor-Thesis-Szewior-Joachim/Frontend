import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./mainpage/mainpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
