import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/nav-bar';
import Home from './pages/Home';
import About from './pages/about';
import FitnessCatalog from './pages/fitness-catalog';
import API_KEY from './config'
import { handleFetch } from './utils';

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  //fetch data
  useEffect(() => {
    const doFetch = async () => {
      const headers = {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': API_KEY
      }
      const [data, error] = await handleFetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10`)
      console.log(data);
      if (data) setData(data);
      if (error) setError(error)
    }
    doFetch();
  }, []); //empty array will run only once 

  //code to render the data or the error
  console.log(data);

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
