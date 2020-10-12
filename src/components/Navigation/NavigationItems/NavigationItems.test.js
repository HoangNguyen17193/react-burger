import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<Navigation Items />', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<NavigationItems />);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
        expect(wrapper.contains(<NavigationItem link="/" active exact>Burger Builder</NavigationItem>))
    });
});