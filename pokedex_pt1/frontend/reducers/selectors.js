export const selectAllPokemon = (state) => {
    return Object.values(state.entities.pokemon).map( pokemon => {
        return pokemon;
    })
}