import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/nav-bar';
import Home from './pages/Home';
import About from './pages/about';
import FitnessCatalog from './pages/fitness-catalog';
import API_KEY from './config'
import { handleFetch } from './utils';
import GifContainer from './components/gifContainer';

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  //fetch data
  useEffect(() => {
    const doFetch = async () => {
      const url =
        'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest?limit=10';
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "36dd3cd46dmsheb990f286d91c4ap105ac5jsne5812b52a8d9", // Use your actual API key
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
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fitness-catalog' element={<FitnessCatalog />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <h1>Exercise 1</h1>
        <div><GifContainer gifs={data} />
        </div>
      </div>
    </Router>
  );
}

export default App
