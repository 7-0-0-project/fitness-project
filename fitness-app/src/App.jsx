import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/nav-bar';
import Home from './pages/Home';
import About from './pages/about';
import FitnessCatalog from './pages/fitness-catalog';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fitness-catalog' element={<FitnessCatalog />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
