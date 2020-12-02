import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util';


document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById('root')
    const store = configureStore();

    window.requestAllPokemon = requestAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.getState = store.getState;
    window.dispatch = store.dispatch; 

    
    ReactDOM.render(<h1>React is working</h1>, rootEl)
})