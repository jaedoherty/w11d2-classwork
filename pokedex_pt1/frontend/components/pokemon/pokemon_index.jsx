import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        
        return (
            <ul>
                {this.props.pokemon.map( pokemon => {
                    return <li key={pokemon.id}> {pokemon.name}
                            <img src={pokemon.imageUrl}></img>
                        </li>
                })}
            </ul>
        )
    }
}

export default PokemonIndex; 