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
                <div>
                    <div>Nom : {pokemon.name}</div>
                    <div>Poids : {pokemon.weight}</div>
                    <img src={pokemon}/>
                </div>
                }
            </div>
        </div>
        
    );
};

export default Barre;