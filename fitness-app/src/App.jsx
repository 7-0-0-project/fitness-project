import { useState, useEffect } from 'react'
import './App.css'
import API_KEY from './config'
import { handleFetch } from './utils';

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
            "36dd3cd46dmsheb990f286d91c4ap105ac5jsne5812b52a8d9", // Use your actual API key
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        // Trigger download
        // if (result.message === '400') return
        // const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
        // const href = URL.createObjectURL(blob);
        // const link = document.createElement('a');
        // link.href = href;
        // link.download = "myExercises.json"; // or any other filename
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
      } catch (error) {
        console.error(error);
      }
    };

    doFetch();
  }, []);

  console.log(data);
  return (
    <>


    </>
  )
}

export default App
