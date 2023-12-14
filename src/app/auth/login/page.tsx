// components/Login.tsx
"use client"
import React from 'react';
import { useState } from 'react';

const Login = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return false;
    }

    // You can add more complex validation logic here, such as email format validation.

    return true;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Perform your login logic here
      console.log('Logging in...');

      // Call the onLoginSuccess callback
      onLoginSuccess();
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;