import {
  CHANGE_SEARCHING,
  REQ_POKEMON_PENDING,
  REQ_POKEMON_SUCCESS,
  REQ_POKEMON_FAILED
} from "./constants";

import * as actions from "./actions.js";

//Configuration for npm redux-mock-store
import configReduxMockStore from "redux-mock-store";
import thunkAsyncMiddleware from "redux-thunk";
const mockStore = configReduxMockStore([thunkAsyncMiddleware]); //Redux Thunk Expects a function to be returned

//Jest testing actions from redux

//Test 1
it("Actions to setSearching w/ type: CHANGE_SEARCHING", () => {
  const search = 'bulbasaur';

  const expectedAction = {
    type: CHANGE_SEARCHING,
    payload: search
  };

  expect(actions.setSearching(search)).toEqual(expectedAction);
});

//Test 2
it("Actions to requestPokemon w/ type: REQ_POKEMON_PENDING", () => {
  //Using configured mockStore() for dispatches with requestPokemon since Async Fetch call is made
  const testStore = mockStore(); 
  testStore.dispatch(actions.requestPokemon());
  const getActions = testStore.getActions();
  const expectedAction2 = {
    type: REQ_POKEMON_PENDING
  };

  expect(getActions[0]).toEqual(expectedAction2);
});