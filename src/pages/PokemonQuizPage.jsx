import React from "react";

const PokemonQuizPage = () => {
    return (
        <>
        <div className="home-container">
            <div className="logo">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemonLogo"/>
            </div>
            <div className="title">
            <h1>Choose your adventure : </h1>
            </div>
            <div className="links-group">
                <button className="home-btn"><a href="/pokedex">Pokedex</a></button>
                <button className="home-btn">Cartes</button>
                <button className="home-btn"><a href="/pokedex-quiz">Test tes connaissances</a></button>
            </div>
            </div>
        </>
    )
}

export default PokemonQuizPage;