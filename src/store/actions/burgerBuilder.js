import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingredientName) => {
    return {
        ingredientName,
        type: actionTypes.ADD_INGREDIENT
    }
};

export const removeIngredient = (ingredientName) => {
    return {
        ingredientName,
        type: actionTypes.REMOVE_INGREDIENT
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
};


export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
            }).catch(() => {
                dispatch(fetchIngredientsFailed())
            })
    };
};