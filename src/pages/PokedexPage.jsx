import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Pokeinfo from "../components/Pokeinfo";

const Main2 = () => {
    const [pokeData, setPokeData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [prevUrl, setPrevUrl] = useState();
    const [nextUrl, setNextUrl] = useState();
    const [pokeDex, setPokedex] = useState();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const pokeFun = async () => {
            setIsLoading(true);
            try {
                setUrl(url) 
                const res = await axios.get(url);
                const { next, previous, results } = res.data;
                setPrevUrl(previous);
                setNextUrl(next);
                setIsLoading(false);
                setPokeData([])
                await getPokemon(results);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        const getPokemon = async (res) => {
            const pokemonData = await Promise.all(
                res.map(async (item) => {
                    const result = await axios.get(item.url);
                    return result.data;
                })
            );
            setPokeData((prevData) => [...prevData, ...pokemonData]);
        };

        pokeFun();
    }, [url]);

    /* error when the name of the pokemon is added through the input the hole page is reactualises
     instead of just having the right side*/
    const handleSearch = async () => {
        console.error("Api called two time// reactualisation of the page")
        if (searchQuery.trim() === '') {
            console.log("nothing happened")
        } else {
            const searchUrl = `https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`;
            try {
                setIsLoading(true);
                const res = await axios.get(searchUrl);
                setPokedex(res.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
                setPokedex(null);
            }
        }
    };

    return (
        <div className="container">
            <div className="left-content">
                <Card pokemon={pokeData} loading={isLoading} infoPokemon={setPokedex} />
                <div className="btn-group">
                    {prevUrl && <button onClick={() => { setPokeData([]), setUrl(prevUrl) }}>Previous</button>}
                    {nextUrl && <button onClick={() => { setPokeData([]), setUrl(nextUrl) }}>Next</button>}
                </div>
            </div>
            <div className="right-content">
            <div className="search">
            <input
                        className="input"
                        placeholder="Search a pokemon name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                <button type="button" className="btn-submit" onClick={handleSearch}>Submit</button>
                </div>
                {<Pokeinfo data={pokeDex} />}
            </div>
        </div>
    );
};

export default Main2;