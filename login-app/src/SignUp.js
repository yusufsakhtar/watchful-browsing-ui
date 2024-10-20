// src/Signup.js

import React, { useState } from 'react';
import { useNavigate, Link, useHistory  } from 'react-router-dom';
import logo from './TrustHouseImage.webp'; // Import the logo image

const SERVER = "http://localhost:8080";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    const data = { userEmail: username, userPassword: password };

    try {
      const response = await fetch(`${SERVER}/newuser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      console.log(`username: ${username}, password ${password}, json stringified ${JSON.stringify(data)}`)


      if (response.ok) {
        navigate('/'); // Redirect to login after sign up
      } else {
        const result = await response.json();
        setErrorMessage(result.message || 'Sign up failed');
      }
    } catch (error) {
      setErrorMessage('Error making the request.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={logo} alt="Logo" className="auth-logo" /> {/* Display logo */}
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
