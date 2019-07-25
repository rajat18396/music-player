import React from 'react';
import { shallow } from 'enzyme';
import Button from './Buttons';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe('Button', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button />)
    });
    it('button component reder', () => {
        expect(wrapper).toBeDefined;
    });
});
