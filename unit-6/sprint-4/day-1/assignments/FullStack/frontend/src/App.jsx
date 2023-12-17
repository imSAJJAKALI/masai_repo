import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [signup, setSignup] = useState({
    userName: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  console.log(token);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignup((prevSignup) => ({
      ...prevSignup,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    fetch('https://drab-plum-deer-vest.cyclic.app/signup', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(signup)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "something ......");
        setLoading(false);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    setLoading(true);
    fetch('https://drab-plum-deer-vest.cyclic.app/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(signup)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.token);
        setToken(data.token); // Just set the token without JSON.stringify
        localStorage.setItem('token', data.token); // Store the token in local storage
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "something ......");
        setLoading(false);
      });
  };

  const handleLogout = () => {
    // Simulate logout by removing the token from local storage and state
    fetch('https://drab-plum-deer-vest.cyclic.app/logout', {
      method: "GET",
      headers: {
        Authorization: `${token}`
      
        // Pass the token directly without JSON.stringify
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    localStorage.removeItem('token');
    setToken('');
  };

  const handleHome = () => {
    fetch('https://drab-plum-deer-vest.cyclic.app/home', {
      method: "GET",
      headers: {
        Authorization: `${token}` // Pass the token directly without JSON.stringify
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App" style={{ width: "50%", margin: "auto" }}>
      <form action="" style={{ display: "flex", flexDirection: "column", margin: "30px" }} onSubmit={handleSubmit}>
        {/* Rest of the form inputs... */}
        <label>
          Username:
          <input
            type="text"
            name='userName'
            value={signup.userName}
            placeholder='Username'
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name='email'
            value={signup.email}
            placeholder='Email'
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name='password'
            value={signup.password}
            placeholder='Password'
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          {loading ? 'Loading...' : 'Signup'}
        </button>
        <button type="button" disabled={loading} onClick={handleLogin}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        {token && <button type="button" onClick={handleLogout}>Logout</button>}
      </form>
      <button onClick={handleHome}>Home</button>
    </div>
  );
}

export default App;
