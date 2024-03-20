import { useState } from "react"


function GifContainer({ gifs }) {
    return (
        <ul>
            {gifs.map((exercise) => (
                <li key={exercise.id}>
                    <h2>{exercise.name}</h2>
                    <img src={exercise.gifUrl} alt={exercise.name} />
                    <p>{exercise.instructions.join(' ')}</p>
                    <button>View Exercise</button>
                </li>
            ))}
        </ul>
    );
}

export default GifContainer