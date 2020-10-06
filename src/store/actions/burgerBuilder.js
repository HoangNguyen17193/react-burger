import * as actionTypes from './actionTypes';

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