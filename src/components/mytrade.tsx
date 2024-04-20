import React from 'react';
import '../css/mytrade.css';

function MyTrade() {
  return (
    <div className="trade-detail-container">
      <a href="#" className="back-link">← Back</a>
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
      <div className="offers-section">
        <h3>Offers</h3>
        <div className="offer">
          <div className="offer-top">
            <img src="../userImage.jpg" alt="User Image" className="user-image" />
            <div className="user-info">
              <h4 className="user-name">User Name</h4>
              <p className="user-username">@username</p>
            </div>
          </div>
          <div className="offer-details">
            <h4 className="commodity-name">Commodity Name</h4>
            <p className="commodity-quantity">Quantity: 10</p>
            <p className="offer-cash">Cash Offer: $100</p>
          </div>
          <div className="offer-actions">
            <button className="offer-accept-btn">Accept</button>
            <button className="offer-reject-btn">Reject</button>
          </div>
        </div>
        {/* Duplicate the above div for more offers as needed */}
      </div>
    </div>
  );
}

export default MyTrade;
