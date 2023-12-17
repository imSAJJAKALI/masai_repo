import axios from 'axios';
import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.gender && formData.password) {
      
      alert('Signup Successful!');
       axios.post('https://drab-plum-deer-vest.cyclic.app/users/register',formData)
       .then((res)=>console.log(res))
      setFormData({
        name: '',
        email: '',
        gender: '',
        password: '',
      });
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
