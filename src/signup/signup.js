import React, { useState } from "react";
import "./signup.css";
import Header from "../header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/client/register", {
        username,
        password
      });
      navigate("/");
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  };
  return (
    <div>
      <Header />
      <div className="auth-container">
        <form onSubmit={handleSignUp} className="signup-form">
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
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button id="sign-up-user" type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
