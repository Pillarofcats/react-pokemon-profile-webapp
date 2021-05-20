import {
  CHANGE_SEARCHING,
  REQ_POKEMON_PENDING,
  REQ_POKEMON_SUCCESS,
  REQ_POKEMON_FAILED
} from "./constants";

//INITIAL STATE FOR searchPokemon(state,action)
const initialStateSearch = {
  searching: ""
};

export const searchPokemon = (state = initialStateSearch, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCHING:
      return Object.assign({}, state, {searching: action.payload})
    default:
      return state;
  }
};

//INITIAL STATE FOR requestPokemon(state,action)
const initialStatePokemon = {
  pokemon_list: [],
  isPending: false
};

export const requestPokemon = (state = initialStatePokemon, action = {}) => {
  switch(action.type) {
    case REQ_POKEMON_PENDING:
      return Object.assign({}, state, {isPending: true});
    case REQ_POKEMON_SUCCESS:
      return Object.assign({}, state, {pokemon_list: action.payload, isPending: false});
    case REQ_POKEMON_FAILED:
      return Object.assign({}, state, {error: action.payload});
    default:
      return state;
  }
};

