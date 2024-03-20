import { useState } from "react"


function GifContainer({ gifs }) {
    return (
        <ul className="card">
            {gifs.map((exercise) => (
                <li key={exercise.id}>
                    <h2>{exercise.name.toUpperCase()}</h2>
                    <img src={exercise.gifUrl} alt={exercise.name} />
                    <p>{exercise.instructions.join(" ")}</p>
                </li>
            ))}
        </ul>
    );
}

export default GifContainer