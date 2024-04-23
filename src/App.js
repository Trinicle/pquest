import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login.js';
import Home from './components/Home.js';
import Register from './components/Register.js'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
