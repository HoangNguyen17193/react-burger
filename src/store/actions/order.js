import * as ActionTypes from './actionTypes';
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: ActionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData
    }
};


export const purchaseBurgerFailed  = (error) => {
    return {
        type: ActionTypes.FETCH_INGREDIENTS_FAILED,
        error
    }
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        axios.post('/orders.json', orderData)
            .then((response) => dispatch(purchaseBurgerSuccess(response.data, orderData)))
            .catch(error => dispatch(purchaseBurgerFailed(error)))
    }
}