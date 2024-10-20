// src/components/ItemsList.js

import React from 'react';
import {useNavigate } from 'react-router-dom';

const ItemsList = () => {
  const navigate = useNavigate();

  // Temporary test array of items
  const items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' },
    { id: 4, name: 'Item Four' },
    { id: 5, name: 'Item Five' },
    { id: 6, name: 'Item Six' },
    { id: 7, name: 'Item Seven' },
    { id: 8, name: 'Item Eight' },
  ];

  const handleItemClick = (id) => {
    navigate(`/item-details/${id}`); // Navigate to item details
  };

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };

  const handleAddUser = () => {
    navigate('/add-user'); // Redirect to add user screen
  };

  return (
    <div className="items-list-container">
      <button onClick={handleLogout} className="logout-button">Logout</button>

      <div className="items-grid">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="item-box"
            onClick={() => handleItemClick(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <button onClick={handleAddUser} className="add-user-button">Add User</button>
    </div>
  );
};

export default ItemsList;
