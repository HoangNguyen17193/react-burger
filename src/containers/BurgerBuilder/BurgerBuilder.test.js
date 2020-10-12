import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BurgerBuilder} from "./BurgerBuilder";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('Test Burger Builder Container', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={jest.fn()}/>);
    });
    it('Should render build controls when receiving ingredients', () => {
        wrapper.setProps({
            ingredients: {
                salad: 1,
                cheese: 1
            },
            totalPrice: 0
        });
        expect(wrapper.find(BuildControls)).toHaveLength(1);
        expect(wrapper.find(Burger)).toHaveLength(1);

    })
});
