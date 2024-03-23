import { useState } from "react";
import { Link } from 'react-router-dom';
import GifContainer from "./gifContainer";

function Buttons({ bodyParts }) {

    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);
    const [muscleGroupData, setMuscleGroupData] = useState(null);

    const muscleGroupsUrls = {
        "back": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
        "cardio": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio",
        "chest": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest",
        "lower arms": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20arms",
        "lower legs": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs",
        "neck": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck",
        "shoulders": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders",
        "upper arms": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms"
    }


    const fetchData = async (url) => {
        try {
            const response = await fetch(url, {
                headers: {
                    "X-RapidAPI-Key": "36dd3cd46dmsheb990f286d91c4ap105ac5jsne5812b52a8d9",
                    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                }
            });
            const data = await response.json();
            setMuscleGroupData(data);
        } catch (error) {
            console.error(error);
        }
    };


    const handleButtonClick = (muscleGroup) => {
        setSelectedMuscleGroup(muscleGroup);
        const url = muscleGroupsUrls[muscleGroup.toLowerCase()];
        fetchData(url);
    };

    return (
        <div>
            <h1>Welcome to Explore Fitness</h1>
            <h2>Choose a muscle group:</h2>
            <div>
                {bodyParts.map((bodyPart, index) => (
                    <button className="button" key={index} onClick={() => handleButtonClick(bodyPart)}>
                        {bodyPart}
                    </button>
                ))}
            </div>
            {selectedMuscleGroup && muscleGroupData && (
                <GifContainer gifs={muscleGroupData} />
            )}
        </div>
    );
}

export default Buttons;
