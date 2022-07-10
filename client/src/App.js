import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Navbar from './components/Navbar';
import Home from './Home';
import './app.css';

function App() {

  return (
    <div className="app">
      <Router>
        <div className='staticNavbar'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
