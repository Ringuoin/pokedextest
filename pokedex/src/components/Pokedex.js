import React from "react";
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const {pokemons} = props;
    return (
        <div>
            <div className = "pokedex">
                {pokemons.map((pokemon, idx) => {
                    return (
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>);
                })}

            </div>
        </div>
    );
};

export default Pokedex;