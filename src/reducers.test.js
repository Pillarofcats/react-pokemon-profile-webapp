import {
  CHANGE_SEARCHING,
  REQ_POKEMON_PENDING,
  REQ_POKEMON_SUCCESS,
  REQ_POKEMON_FAILED
} from "./constants";

// With tih syntax we can use any reducers we have exported in the form of: 'reducers.searchPokemon(state, action)' or 'reducers.requestPokemon(state, action)'
import * as reducers from './reducers.js';

//Jest Test Suite with Describe() - Reducer searchPokemon(state, action)
describe('Using Reducer searchPokemon(state,action)', () => {
  
  //Test 1
  it('Should Return Empty Initial State of Search', () => {
    expect(reducers.searchPokemon(undefined, {})).toEqual({searching: ''})
  });

  //Test 2
  const initialStateSearch = {
    searching: ''
  }

  it('Should Return Initial State of Search', () => {
    //searchPokemon(state, {action})
    expect(reducers.searchPokemon(initialStateSearch, {
      type: CHANGE_SEARCHING,
      payload: 'bulbasaur'
    })).toEqual({searching: 'bulbasaur'})
  });
});


//Jest Test Suite with Describe() - Reducer requestPokemon(state, action)
describe('Using Reducer requestPokemon(state,action)', () => {
  
  
  const initialStatePokemon = {
    pokemon_list: [{
      name: 'bulbasaur',
      id: 0
    }],
    isPending: false  
  };

  //Test 1
  it('Should Return Initial State of Pokemon', () => {
    //requestPokemon(state, {action})
    expect(reducers.requestPokemon(initialStatePokemon, {})).toEqual(initialStatePokemon);
  });

  //Test 2
  it("Should Handle REQ_POKEMON_PENDING w/ isPending set to TRUE", () => {
    expect(reducers.requestPokemon(initialStatePokemon, {type: REQ_POKEMON_PENDING}))
      .toEqual({
        pokemon_list: [{
          name: 'bulbasaur',
          id: 0
        }],
        isPending: true
      });
  })

  //Test 3
  it("Should Handle REQ_POKEMON_SUCCESS w/ isPending set to FALSE", () => {
    expect(reducers.requestPokemon(initialStatePokemon, {
      type: REQ_POKEMON_SUCCESS,
      payload: [{
          name: 'bulbasaur',
          id: 0
      }]
    })).toEqual({
          pokemon_list: [{
            name: 'bulbasaur',
            id: 0
          }],
          isPending: false
      });
  })

  //Test 4
  it("Should Handle REQ_POKEMON_FAILED w/ isPending set to FALSE", () => {
    expect(reducers.requestPokemon(initialStatePokemon, {
      type: REQ_POKEMON_FAILED,
      //Give payload an error
      payload: "ERROR"
    })).toEqual({
          error: "ERROR",
          pokemon_list: [{
            name: 'bulbasaur',
            id: 0
          }],
          isPending: false
      });
  })
});