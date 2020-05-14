import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import Setup from './Setup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders one input', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('input').length).toBe(1)
})

it("renders 7 posts in the list'", () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("li").length).toBe(7)
})

it('it renders 3 posts when the keyword is ruby', () => {
  const wrapper = shallow(<App />)
  wrapper.find('input').first().simulate('change', {target: {value: 'ruby'}})
  expect(wrapper.find("li").length).toBe(3)
})

it('it renders 1 posts when the keyword is api', () => {
  const wrapper = shallow(<App />)
  wrapper.find('input').first().simulate('change', {target: {value: 'api'}})
  expect(wrapper.find("li").length).toBe(1)
})
