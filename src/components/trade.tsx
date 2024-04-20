import React from 'react';
import '../css/trade.css';

function Trade() {
  return (
    <div className="trade-detail-container">
      <a href="browse.html" className="back-link">← Back to Browse</a>
      <h1 className="trade-title">Trade Title</h1>
      <img src="../tradeImage.jpg" alt="Trade Image" className="trade-image" />
      <p className="trade-details">
        Here are the detailed descriptions of the trade. It can span multiple lines and include all necessary
        information that a potential trader would need to know.
      </p>
      <h3>Accepting Conditions:</h3>
      <ul className="accepting-conditions">
        <li>Condition 1</li>
        <li>Condition 2</li>
        {/* Add more conditions as needed */}
      </ul>
      <button className="offer-trade-btn">Offer Trade</button>
      <a href="#profileLink" className="profile-link">Visit Poster's Profile</a>
    </div>
  );
}

export default Trade;
