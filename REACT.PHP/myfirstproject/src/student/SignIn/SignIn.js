import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ onSwitch }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple client-side validation
    const usernameRegex = /^[A-Za-z]+/; // Regex for letters only
    if (!credentials.username || !usernameRegex.test(credentials.username)) {
      setError('Please enter a valid username .');
      return;
    }

    if (credentials.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setLoading(true); // Set loading to true before the request

    try {
      const response = await fetch('http://localhost/php-backend/signin.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (data.message) {
        alert('Sign-in successful!');
        setError('');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Error signing in, please try again.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required // Ensures input is not empty
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required // Ensures input is not empty
          />
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Signing In...' : 'Sign In'}</button>
        <p>
          Already have an account? <a href="#" onClick={onSwitch}>Log In</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;



