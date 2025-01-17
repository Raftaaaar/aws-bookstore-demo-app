//Yaksh Kataria, 1330354

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Bestseller from '../modules/bestSellers/BestSellers';

configure({adapter: new Adapter()});

test('Best Sellers heading is the correct heading.', () =>
{
    const componentToTest = shallow(<Bestseller />);        //The component to be checked.
    const headingToTest = 'Top 20 best sellers';        //The data to compare against.

    window.alert = jest.fn(() => ({}));

    //Open 'componentToTest' and find a 'h3' heading. Check its text to see if it the same as 'headingToTest'.
    //Success is determined by the above line returning True.
    expect(componentToTest.find('h3').text()).toEqual(headingToTest);
})