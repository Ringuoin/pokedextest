import React from "react";
import '../App.css';


const Pokedex = (props) => {
    const {pokemons} = props;
    return (
        <div>
            <div className = "pokedex">
                {pokemons.map((pokemon, idx) => {
                    return (
                        <div>{pokemon.name}</div>
                    )
                })}

            </div>)
        </div>
    );
};

export default Pokedex;