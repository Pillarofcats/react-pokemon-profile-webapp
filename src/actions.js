import {
  CHANGE_SEARCHING,
  REQ_POKEMON_PENDING,
  REQ_POKEMON_SUCCESS,
  REQ_POKEMON_FAILED 
} from "./constants";

export const setSearching = (text) => ({
  type: CHANGE_SEARCHING,
  payload: text
});

//Higher order function returns a function
//Redux Thunk middleware listens to actions
export const requestPokemon = () => (dispatch) => {
  dispatch({type: REQ_POKEMON_PENDING});

  fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => dispatch({type: REQ_POKEMON_SUCCESS, payload: data.results}))
    .catch(error => dispatch({type: REQ_POKEMON_FAILED, payload: error}));
}