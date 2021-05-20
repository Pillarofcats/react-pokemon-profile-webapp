import React from "react";

//React Enzyme Testing 
import { shallow, mount, render } from 'enzyme';
import Profile from './Profile.js';

//Shallow render react components
it("Expect to Render Profile Component", ()=> {
  expect(shallow(<Profile />).length).toEqual(1);
});

//Snapshot with Jest
it("Snapshot with Jest", () => {
  expect(shallow(<Profile />)).toMatchSnapshot();
});