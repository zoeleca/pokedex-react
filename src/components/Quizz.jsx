import React, { useState } from "react";

const Quizz = ({ quizzData, updateRandomUrl }) => {
    console.log(quizzData.name);
    if (!quizzData) {
        return null;
    }

    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${quizzData.id}.svg`;
    const pokemonName = quizzData.name;
    const [score, setScore] = useState(0); 
    const [searchQuery, setSearchQuery] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    const checkPokemonName = async (submittedQuery, pokemonName) => {
        if (submittedQuery.toLowerCase() === pokemonName.trim().toLowerCase()) {
            setScore(score + 1); 
            setTimeout(() => {
                updateRandomUrl();
            }, 1000);
        } else {
            console.log(pokemonName)
            console.log(submittedQuery)
            console.log("wrong pokemon name")
            setScore(0); 
        }
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleButtonClick = () => {
        checkPokemonName(searchQuery,pokemonName);
    };

    const getAnswer = () => {
        setShowAnswer(true);
    };

    return (
        <>
            <h2>Score : {score}</h2> {/* Display score directly */}
            <div className="imagepokemon">
                <img src={imgSrc} alt={quizzData.name} />
            </div>
            <div className="searchbox">
                <input
                    name="searchinput"
                    className="search"
                    type="text"
                    placeholder="find pokemon"
                    value={searchQuery} 
                    onChange={handleInputChange}
                />
                <button
                    type="button"
                    className="btn-submit"
                    onClick={handleButtonClick}
                >
                    Submit
                </button>
            </div>
            <div className="get-answer">
                {showAnswer && <p id="answer">{quizzData.name}</p>}
                <button
                    type="button"
                    className="btn-submit"
                    onClick={getAnswer}
                >
                    Get answer
                </button>
            </div>
        </>
    );
};

export default Quizz;
