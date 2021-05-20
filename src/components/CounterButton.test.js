import React from 'react';
import {shallow} from 'enzyme';
import CounterButton from "./CounterButton.js";

it("Expect to Render the Counter Button", () => {
  const mockButtonColor = 'red';
  expect(shallow(<CounterButton color={mockButtonColor}/>)).toMatchSnapshot();
});

it("Correctly increments the Counter", () => {
  const mockButtonColor = 'red';
  const wrapper = shallow(<CounterButton color={mockButtonColor}/>);

  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2});
  expect(wrapper.props().color).toEqual('red');
});