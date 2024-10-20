// src/components/AddUser.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [email, setEmail] = useState(''); // State to store the input
  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle adding the user (for now, just logging)
  const handleAddUser = () => {
    console.log("Added email:", email); // Log the entered email
  };

  // Handle logout
  const handleLogout = () => {
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="add-user-container">
      {/* Logout button on top left */}
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>

      {/* Centered content */}
      <div className="input-section">
        <h2 className="input-label">Enter Email:</h2>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          className="email-input"
          placeholder="Enter email address"
        />
        <button onClick={handleAddUser} className="add-button">
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddUser;
