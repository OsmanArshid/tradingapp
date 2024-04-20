import React from 'react';
import '../css/submitoffer.css';
import Navbar from './navbar'; // Import the Navbar component

function SubmitOffer() {
  return (
      <div className="create-offer-container">
      <a href="#" className="back-link">← Back</a>
      <form id="create-offer-form">
        <h1>Submit Your Offer</h1>
        <label htmlFor="commodity">Commodity:</label>
        <select name="commodity" id="commodity">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows={4} required></textarea>

        <label htmlFor="cash">Cash Offer ($):</label>
        <input type="number" id="cash" name="cash" min="1" step="any" required />

        <button type="submit" className="submit-btn">Submit Offer</button>
      </form>
    </div>
  );
}

export default SubmitOffer;
