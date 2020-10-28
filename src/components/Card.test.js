import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

it('expect to render card component', () => {
    // expect(shallow(<Card/>).length).toEqual(1);
    expect(shallow(<Card/>)).toMatchSnapshot();
});
