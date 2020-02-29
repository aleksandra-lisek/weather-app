import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';    

import SearchingForm from './SearchingForm';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('SearchinForm renders input', () => {
    const wrapper = shallow(<SearchingForm />);

    const appComponent = wrapper.find("[data-test='component-input']");
    expect(appComponent.length).toBe(1);
  });

  test('SearchinForm renders button', () => {
    const wrapper = shallow(<SearchingForm />);

    const appComponent = wrapper.find("[data-test='component-button']");
    expect(appComponent.length).toBe(1);
  });