import React from 'react';
import {shallow} from 'enzyme';
import MainPage from "./MainPage.js";


//Test 1
let wrapper;

//Runs function before tests are run and initializes props for <MainPage {...mockProps} />
beforeEach(() => {
  const mockProps = {
    onRequestPokemon: jest.fn(),
    pokemon_list: [],
    searching: '',
    isPending: false
  }

  //Set Enzyme shallow function to wrapper to be tested with Jest expect assertion tests
  wrapper = shallow(<MainPage {...mockProps}/>)
});

//Test render the wrapper function with 'shallow(<MainPage {...mockProps}/>'
it("Renders MainPage without Crashing", ()=> {
  expect(wrapper).toMatchSnapshot();
});


//Test 2
let wrapper2;

it("Filter Pokemon Correctly", () => {

  const mockProps2 = {
    onRequestPokemon: jest.fn(),
    pokemon_list: [
      {
        name: 'bulbasaur',
        id: 0
      }
    ],
    searching: 'bulb',
    isPending: false
  }

  //Set Enzyme shallow function to wrapper to be tested with Jest expect assertion tests
  wrapper2 = shallow(<MainPage {...mockProps2}/>)

  expect(wrapper2.instance().filteredPokemon()).toEqual([
    {
      name: 'bulbasaur',
      id: 0
    }]);
});


//Test 3
let wrapper3;

it("Filter Pokemon Correctly Again", () => {

  const mockProps3 = {
    onRequestPokemon: jest.fn(),
    pokemon_list: [
      {
        name: 'bulbasaur',
        id: 0
      }
    ],
    searching: 'bulb',
    isPending: false
  }

  //Set Enzyme shallow function to wrapper to be tested with Jest expect assertion tests
  const pokemon = [{
        name: 'bulbasaur',
        id: 0
      }];
      
  wrapper3 = shallow(<MainPage {...mockProps3}/>)

  expect(wrapper3.instance().filteredPokemon()).toEqual(pokemon);
});