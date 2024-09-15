import React, { useState } from "react";
import "./login.css";
import Header from "../header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });

      // Assume JWT token is returned
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); // Redirect after successful login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <div className="auth-container">
        <form onSubmit={handleLogin} className="auth-form">
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            id="sign-up"
            type="submit"
            className="submit-button"
            onClick={() => handleSignUp()}
          >
            SignUp
          </button>
          <button id="login" type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
