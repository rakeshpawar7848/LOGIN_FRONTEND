import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Check if login was successful
      if (response.data.success) {
        setLoginMessage(response.data.message);
      } else {
        setLoginMessage(response.data.message); // Display the error message
        console.error('Login unsuccessful:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{loginMessage}</p>
    </div>
  );
};

export default App;
