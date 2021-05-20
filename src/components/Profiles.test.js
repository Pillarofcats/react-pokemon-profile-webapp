import React from "react";

//React Enzyme Testing 
import { shallow, mount, render } from 'enzyme';
import Profiles from './Profiles.js';

//Snapshot with Jest
it("Snapshot with Jest", () => {
  const mockPokemonList = [
    {
      name: "bulbasaur"
    }
  ];

  expect(shallow(<Profiles pokemon = {mockPokemonList} />)).toMatchSnapshot();
});