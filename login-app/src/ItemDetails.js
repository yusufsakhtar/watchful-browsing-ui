// src/components/ItemDetails.js

import React from 'react';

const ItemDetails = () => {
  // Mock array of suspicious URLs
  const suspiciousUrls = [
    "http://example1-suspicious.com",
    "http://example2-malicious.com",
    "http://example3-fake-site.com",
    "http://example4-phishing.net",
    "http://example5-fraudsite.org"
  ];

  return (
    <div className="item-details-container">
      <h2 className="header">Potentially Suspicious URLs:</h2>
      
      <ul className="url-list">
        {suspiciousUrls.map((url, index) => (
          <li key={index} className="url-item">
            {url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDetails;
