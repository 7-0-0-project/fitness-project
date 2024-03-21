import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/nav-bar';
import Home from './pages/Home';
import About from './pages/about';
import FitnessCatalog from './pages/fitness-catalog';
import { handleFetch } from './utils';
import GifContainer from './components/gifContainer';
import Buttons from './components/Buttons';
import { API_KEY } from '../config';

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  //fetch data
  useEffect(() => {
    const doFetch = async () => {
      const url =
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            API_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        setData(result)
      } catch (error) {
        console.error(error);
      }
    };

    doFetch();
  }, []);

  console.log(data);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Buttons bodyParts={data} />} />
        <Route path='/fitness-catalog' element={<FitnessCatalog />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
