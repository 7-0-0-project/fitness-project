import { useState } from "react";
import { Link } from 'react-router-dom';

function Buttons({ bodyParts }) {
    return (
        <div>
            <h1>Welcome to Fitness Catalog</h1>
            <h2>Choose a muscle group:</h2>
            <div>
                {bodyParts.map((bodyPart, index) => (
                    <Link key={index}>
                        <button>{bodyPart}</button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Buttons;
