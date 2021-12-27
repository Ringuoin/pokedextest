import React, {Component} from "react";
import Card from "./Card";
import axios from 'axios';

export default class PokeList extends Component {
    state= {
        url: "https://pokeapi.co/api/v2/pokemon/",
        poke: null
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['results']});
    }

    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ?(
                <div className="row">
                    {this.state.pokemon.map(pokemon => (
                        <Card />
                    ))}
                </div>
        ) : (
            <h1>Chargement</h1>
        )}
            </React.Fragment>
        );
    }
}
