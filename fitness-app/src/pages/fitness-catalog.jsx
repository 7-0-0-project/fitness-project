import React, { useState } from 'react';
import GifContainer from '../components/gifContainer';
import { API_KEY } from '../../config';

function FitnessCatalog() {
    const [name, setName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const url = `https://exercisedb.p.rapidapi.com/exercises/name/${name}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
                },
            };

            const response = await fetch(url, options);
            const data = await response.json();

            if (response.ok) {
                setSearchResults(data);
            } else {
                throw new Error(data.message || 'Failed to fetch exercises.');
            }
        } catch (error) {
            setError(error.message || 'Error fetching exercises.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Fitness Catalog</h1>
            <form onSubmit={handleSearch} className="search-form-container">
                <input
                    type="text"
                    placeholder="Search exercises"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className='search-button'>Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <GifContainer gifs={searchResults} />
        </div>
    );
}

export default FitnessCatalog;
