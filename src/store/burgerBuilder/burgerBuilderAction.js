import * as actionTypes from '../actionTypes';

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
        type: actionTypes.FETCH_INGREDIENTS_FAIL,
    }
};


export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS
    };
};