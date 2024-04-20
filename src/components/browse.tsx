import React from 'react';
import '../css/browse.css';

function Browse() {
  return (
    <div>
      <nav>
        <div className="left-menu">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="browse.html">Browse</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </div>
        <div className="right-menu">
          <ul>
            <li><a href="#login">Login</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </div>
      </nav>

      <section className="search-section">
        <input type="text" id="searchBar" placeholder="Search trades..." />
      </section>
      
      <section className="trades-list">
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
            <p className="profile-name">Posted by: Profile Name</p>
          </div>
          <button className="send-offer-btn">Send Offer</button>
        </div>
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
            <p className="profile-name">Posted by: Profile Name</p>
          </div>
          <button className="send-offer-btn">Send Offer</button>
        </div>
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
            <p className="profile-name">Posted by: Profile Name</p>
          </div>
          <button className="send-offer-btn">Send Offer</button>
        </div>
        {/* Add more trade items as needed */}
      </section>
    </div>
  );
}

export default Browse;
