import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import Quizz from "../components/Quizz";

const PokemonQuizPage = () => {
    const [pokeQuizzData, setPokeQuizzData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [randomUrl, setRandomUrl] = useState('');

    const fetchRandomPokemon = async () => {
        setIsLoading(true);
        try {
            const random = Math.floor(Math.random() * (151 - 1) + 1);
            console.log("random : " , random)
            const randomUrl = `https://pokeapi.co/api/v2/pokemon/${random}`;
            setRandomUrl(randomUrl);
            const res = await axios.get(randomUrl);
            console.log("Response data:", res.data);
            setPokeQuizzData(res.data);
            setError(null); // Reset error state if request succeeds
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        console.warn("useffect launch twice")
        fetchRandomPokemon();
    }, [1]); // Empty dependency array means the effect runs only once on mount

    return (
        <div className="pokemonquizz_container">
            <img
                className="logo-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
                alt="PokemonLogo"/>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading && !error && <Quizz quizzData={pokeQuizzData} updateRandomUrl={fetchRandomPokemon} />}
        </div>
    );
};

export default PokemonQuizPage;