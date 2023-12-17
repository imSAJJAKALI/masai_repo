import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import Signup from './Signup';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
