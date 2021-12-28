import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props;
    return (
        <div className="Card">
            <div className="Image">
                <img src = {pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div>
                <div>
                    <h3>{pokemon.name}</h3>
                </div>
                <div>
                    <div className="Type">
                        {pokemon.types.map((type, idx) => {
                            return <div key = {idx} className="Type">{type.type.name}</div>;
                        })}
                    </div>
                    <div className="HP">
                        HP : {pokemon.stats[0].base_stat}
                    </div>
                    <div className="Attaque">
                        Att : {pokemon.stats[1].base_stat}
                    </div>
                    <div className="Defense">
                        Def : {pokemon.stats[2].base_stat}
                    </div>
                    <div className="AttaqueS">
                        AttS : {pokemon.stats[3].base_stat}
                    </div>
                    <div className="DefenseS">
                        DefS : {pokemon.stats[4].base_stat}
                    </div>
                    <div className="Vitesse">
                        Vit : {pokemon.stats[5].base_stat}
                    </div>
                    <div className="Poids">
                        Vit : {pokemon.weight}
                    </div>
                    <div className="Taille">
                        Vit : {pokemon.height}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;