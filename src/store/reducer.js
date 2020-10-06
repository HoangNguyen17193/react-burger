import Price, {BASE_PRICE} from '../services/Price';
import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    totalPrice: BASE_PRICE
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: {
            const updatedIngredients = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            };
            return {
                ...state,
                ingredients: updatedIngredients,
                totalPrice: Price.calculateTotalPrice(updatedIngredients)
            };
        }
        case actionTypes.REMOVE_INGREDIENT:
            const updatedIngredients = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            };
            return {
                ...state,
                ingredients: updatedIngredients,
                totalPrice: Price.calculateTotalPrice(updatedIngredients)
            };
        default:
            return state
    }
};

export default reducer;