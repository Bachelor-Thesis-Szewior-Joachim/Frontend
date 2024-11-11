import React, { useState } from "react";
import "./login.css";
import Header from "../header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(username, password) {
    console.log("Logging in with username:", username);
    try {
      const response = await axios.post(
          'http://localhost:8080/client/login',
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
          }
      );

      console.log("Full Response:", response);

      if (response && response.data) {
        const token = response.data;
        localStorage.setItem('token', token);
        console.log("Login successful, token:", token);
        window.location.href = '/';
      }
    } catch (error) {
      if (error.response) {
        console.log("Error Status:", error.response.status);
        console.log("Error Data:", error.response.data);
      } else {
        console.log("Error Details:", error.message);
      }
      console.error("Login failed:", error);
    }

    // Confirm if the token was stored
    console.log("Stored Token:", localStorage.getItem("token"));
  }


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
