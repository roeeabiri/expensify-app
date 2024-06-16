

import { shallow } from 'enzyme'; // Enzyme's shallow function allows you to render a component one level deep and assert its behavior without diving into the child components
import React from 'react';
import Header from '../../components/Header';
// toJson is a function that converts Enzyme wrapper to JSON so that we can use Jest's snapshot() method to compare it to the snapshot file

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot(); 
    // Enzyme's snapshot() method allows us to compare the rendered 


    // expect(wrapper.find('h1').text()).toBe("Expensify") // Enzyme lets us use find and other query methods to find elements in the component tree
}); 