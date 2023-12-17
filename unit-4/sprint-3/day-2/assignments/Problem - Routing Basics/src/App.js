import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<h1>Home Page</h1>}/>
    <Route path="/contact" element={<h1>Contact Page</h1>}/>
    <Route path="/about-us" element={<h1>About Page</h1>}/>
    <Route path="/services" element={<h1>Services Page</h1>}/>
    <Route path="/login" element={<h1>Login Page</h1>}/>
  </Routes>
  </BrowserRouter>;
}

export default App;
