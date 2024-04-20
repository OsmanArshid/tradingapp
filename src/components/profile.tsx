import React from 'react';
import '../css/profile.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  return (
    
    <div>
      <nav>
        <div className="left-menu">
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="browse">Browse</a></li>
            <li><a href="profile">Profile</a></li>
          </ul>
        </div>
        <div className="right-menu">
          <ul>
            <li><a href="login">Login</a></li>
            <li><a href="logout">Logout</a></li>
          </ul>
        </div>
      </nav>

      <section className="profile-content">
        <div className="top-section">
          <div className="user-info">
            <img src="../userImage.jpg" alt="User Image" className="user-image" />
            <div>
              <h1>User's Name</h1>
              <p className="user-username">@username</p>
              <button className="update-password-btn">Update Password</button>
              <button className="create-offer-btn">Create Trade Offer</button>
            </div>
          </div>
          <div className="cash-counter">
            <p>Cash: $1,000</p>
          </div>
        </div>

        <h2>My Trades</h2>
        <div className="trade-item">
          <img src="../tradeImage.jpg" alt="Trade Image" className="trade-image" />
          <div className="trade-info">
            <h3 className="trade-title">Trade Title</h3>
            <p className="trade-description">This is a brief description of the trade.</p>
            <div className="trade-conditions">
              Conditions:
              <span className="condition-badge">Condition 1</span>
              <span className="condition-badge">Condition 2</span>
            </div>
          </div>
          <div className="trade-action">
            <button className="see-trade-status-btn">See Trade Status →</button>
          </div>
        </div>
        {/* Repeat trade items as needed */}

        <h2>Offers Sent</h2>
        <div className="offers-sent-container">
          <a href="link-to-offer-details.html" className="offer-tile">
            <div className="offer-image-container">
              <img src="../offerImage.jpg" alt="Offer Image" className="offer-image" />
            </div>
            <div className="offer-info">
              <h3 className="offer-title">Offer Title</h3>
              <p className="offer-description">This is a brief description of the offer.</p>
            </div>
            <div className="offer-status">SENT</div>
          </a>
          {/* Repeat for other offers */}
        </div>
        {/* Repeat offers as needed */}

        <h2>Inventory of Items</h2>
        <div className="inventory-tile">
          <h3 className="inventory-title">Item Title</h3>
          <p className="inventory-description">This is a brief description of the inventory item, providing essential details that
            the user should know.</p>
          <p className="inventory-quantity">Quantity: <span>5</span></p>
        </div>
      </section>
    </div>
  );
}

export default Profile;
