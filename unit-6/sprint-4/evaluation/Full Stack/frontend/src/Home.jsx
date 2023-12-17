import axios from 'axios';
import React, { useState } from 'react';

const Home = ({ onPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    device: '',
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
    axios.post('https://drab-plum-deer-vest.cyclic.app/post', formData)
      .then((res) => {
        console.log(res);
     
        onPost(res.data.post);
       
        setFormData({
          title: '',
          body: '',
          device: '',
        });
      })
      .catch((error) => {
        console.error(error);
       
      });
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div>
          <label>Device:</label>
          <input
            type="text"
            name="device"
            value={formData.device}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Home;
