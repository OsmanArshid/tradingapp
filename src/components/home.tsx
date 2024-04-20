import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/home.css';

const Home: React.FC = () => {
  return (
    <div>
      <section className="hero" style={{backgroundImage: `url('../backgroundImage.jpg')`}}>
        <div className="hero-overlay">
          <h1>Welcome to TradeBiz!</h1>
          <p>Your Trading Partner for Life.</p>
          
          <div className="login-button-container">
            <Link to="/login" className="login-button">LogIn</Link>
          </div>
        
        </div>
      </section>
    </div>
  );
}

export default Home;
