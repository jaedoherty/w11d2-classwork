import React from 'react';
import { Link } from "react-router-dom";

export const PokemonIndexItem = (props) => {
    console.log(props)
    return (
        
        <li key={props.pokemon.id}> 
        <Link to={`/pokemon/${props.pokemon.id}`}>
            {props.pokemon.name}
            <img src={props.pokemon.imageUrl}/> 
         </Link>
        </li>
    )
}
