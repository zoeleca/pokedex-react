import React from "react";

const HomePage = () => {
    return (
        <>
        <div className="home-container">
                <div className="logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemonLogo" />
                </div>
            <div className="title">
            <h1>Choose your adventure : </h1>
            </div>
            <div className="links-group">
            <a href="/pokedex"><button className="home-btn">Pokedex</button></a>
            <a href="/pokedex-quiz"><button className="home-btn">Test tes connaissances</button></a>
            </div>
            </div>
        </>
    )
}

export default HomePage;