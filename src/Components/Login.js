// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username,password);
    
    // Check if the entered username and password match the default values
    
  };
  function login(username,password) {
    axios.post('http://localhost:3000/api/login', {
      email: username,
      password: password
    })
    .then(function (response) {
      console.log(response);
      if(response.status === 200){
        navigate('/dashboard');

      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
