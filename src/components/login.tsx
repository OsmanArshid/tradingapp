import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './authcontext';
import '../css/login.css';
import '../css/signup.css';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.username);
            
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Please try again.');
      }
    } 
    
    catch (networkError) {
      console.error('Login Error:', networkError);
    }
  };

  return (
    <div className="login-page">
      <Link to="/" className="back-button">Back</Link>
      <div className="login-header">LogIn to Trade</div>
      <form className='form' onSubmit={handleLogin}>
      <div>
          <input className="user-inp" type='username' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <input
            className="pass-inp"
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div>
          <button className="sub-button" type="submit">Login</button>
        </div>
      </form>
      <div className="question">
        Don't have an account?{' '}
        <span><a href="signup">Signup</a></span>
      </div>
    </div>
  );
};

export default Login;
