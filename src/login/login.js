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
          {
            username: username,
            password: password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
      );

      console.log("Full Response:", response);

      if (response && response.data && response.data.accessToken) {
        console.log('Response: ', response)
        const token = response.data.accessToken;
        const publicKey = response.data.publicKey;
        const privateKey = response.data.privateKey;
        localStorage.setItem('token', token);
        localStorage.setItem('publicKey', publicKey);
        localStorage.setItem('privateKey', privateKey);
        console.log("Login successful, token:", token);
        console.log("Login successful, token:", publicKey);
        console.log("Login successful, token:", privateKey);
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
          <button
              id="login"
              type="button"
              className="submit-button"
              onClick={() => handleLogin(username, password)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
