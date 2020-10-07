import Price, {BASE_PRICE} from '../../services/Price';
import * as actionTypes from '../actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: BASE_PRICE,
    error: false
};

const burgerBuilderReducer = (state = initialState, action) => {
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
        case actionTypes.REMOVE_INGREDIENT: {
            const updatedIngredients = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            };
            return {
                ...state,
                ingredients: updatedIngredients,
                totalPrice: Price.calculateTotalPrice(updatedIngredients)
            };
        }
        case actionTypes.SET_INGREDIENTS: {
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: Price.calculateTotalPrice(action.ingredients),
                error: false
            }
        }
        case actionTypes.FETCH_INGREDIENTS_FAILED: {
            return {
                ...state,
                error: true
            }
        }
        default:
            return state
    }
};

export default burgerBuilderReducer;