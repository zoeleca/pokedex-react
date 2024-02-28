import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
    return (
        <>
            {
                loading ? <h1>Loading...</h1> : pokemon.map((item, index) => (
                    <div className="card" key={item.id + '-' + index} onClick={() => infoPokemon(item)}>
                        <h2>{item.id}</h2>
                        <img src={item.sprites.front_default} alt={item.name} />
                        <h2>{item.name}</h2>
                    </div>
                ))
            }
        </>
    )
}

export default Card;