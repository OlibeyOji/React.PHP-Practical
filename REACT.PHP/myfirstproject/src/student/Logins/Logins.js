import React, { useState } from 'react';
import './Logins.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple client-side validation
    if (!credentials.username || !credentials.password) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true); // Set loading to true before the request

    try {
      const response = await fetch('http://localhost/php-backend/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (data.message) {
        setError(''); // Clear error on success
        onLogin(data.user); // Send user data instead of credentials
      } else {
        setError(data.error || 'Login failed. Please try again.'); // Improved error handling
      }
    } catch (err) {
      setError('Error logging in, please try again.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required
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
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;

