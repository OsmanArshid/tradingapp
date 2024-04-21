import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../css/signup.css';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');


  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const signupEndpoint = 'http://localhost:3000/signup';
    try {
      const response = await fetch(signupEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setError('Signup successful. Please login.');
      }
    } 
    
    catch (error) 
    {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <Link to="/" className="back-button">Back</Link>
      <div className="signup-header">Signup</div>
      <form className='form' onSubmit={handleSignup}>
        
        <div>
          <label>Name:</label>
          <input type='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
        <label>Username:</label>
          <input type='username' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        
        <div>
          <label>Password:</label>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>

        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
