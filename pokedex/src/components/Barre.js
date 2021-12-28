import React from "react";
import {searchPokemon} from '../api'
import '../App.css';

const {useState} = React;

const Barre = () => {
    const [Barre, setBarre] = useState('');
    const [pokemon, setPokemon] = useState();
    const onChange = (e) =>{
        setBarre(e.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(Barre);
        setPokemon(data);
        
    }

    
    return (
        <div className = 'Header'>
            <h1>POKEDEX</h1>
            <div>
                <input placeholder='Chercher un Pokemon'
                onChange={onChange}
                />
            </div>
            <div>
                <button onClick={onClick}>Chercher</button>
            </div>
            <div>
                {pokemon &&
                <div className = "Recherche">
                    <div>{pokemon.name}</div>
                    <img src={pokemon.sprites.front_default}/>
                    <div>Type : {pokemon.types[0].type.name}</div>
                    <div>HP : {pokemon.stats[0].base_stat}</div>
                    <div>Attaque : {pokemon.stats[1].base_stat}</div>
                    <div>Defense : {pokemon.stats[2].base_stat}</div>
                    <div>Attaque Speciale : {pokemon.stats[3].base_stat}</div>
                    <div>Defense Speciale : {pokemon.stats[4].base_stat}</div>
                    <div>Vitesse : {pokemon.stats[5].base_stat}</div>
                    <div>Poids : {pokemon.weight}</div>
                    <div>Taille : {pokemon.height}</div>
                </div>
                }
            </div>
        </div>
        
    );
};

export default Barre;