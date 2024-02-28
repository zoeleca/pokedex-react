import React from "react";

const Pokeinfo = ({ data }) => {
    if (!data) {
        return "";
    }

    const { name, abilities, stats } = data;
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`;
    const abilityOne = abilities[0]?.ability.name;
    const abilityTwo = abilities[1]?.ability.name;
    const hp = stats.find(stat => stat.stat.name === "hp")?.base_stat || "";
    const attack = stats.find(stat => stat.stat.name === "attack")?.base_stat || "";
    const defense = stats.find(stat => stat.stat.name === "defense")?.base_stat || "";
    const specialAttack = stats.find(stat => stat.stat.name === "special-attack")?.base_stat || "";
    const speed = stats.find(stat => stat.stat.name === "speed")?.base_stat || "";

    return (
        <>
            <div className="title-img">
                <h1>{name}</h1>
                <img src={imageSrc} alt="" />
            </div>
            <div className="abilities">
                <div className="group">
                    <h2>{abilityOne}</h2>
                </div>
                <div className="group">
                    <h2>{abilityTwo}</h2>
                </div>
            </div>
            <div className="base_stat">
                <h3>HP: {hp}</h3>
                <h3>attack: {attack}</h3>
                <h3>defense: {defense}</h3>
                <h3>Special Attack: {specialAttack}</h3>
                <h3>Speed: {speed}</h3>
            </div>
        </>
    );
};

export default Pokeinfo;