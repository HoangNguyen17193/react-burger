import * as ActionTypes from '../actionTypes';
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
        type: ActionTypes.FETCH_INGREDIENTS_FAIL,
        error
    }
};

export const purchaseBurgerStart = () => {
    return {
        type: ActionTypes.PURCHASE_BURGER_START
    }
};

export const purchaseInit = () => {
    return {
        type: ActionTypes.PURCHASE_BURGER_INIT
    }
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then((response) => dispatch(purchaseBurgerSuccess(response.data.name, orderData)))
            .catch(error => dispatch(purchaseBurgerFailed(error)))
    }
};

export const startFetchOrders = () => {
    return {
        type: ActionTypes.FETCH_ORDERS_START
    }
};

export const fetchOrdersFailed = (error) => {
    return {
        type: ActionTypes.FETCH_ORDERS_FAIL,
        error
    }
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: ActionTypes.FETCH_ORDERS_SUCCESS,
        orders
    }
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(startFetchOrders());
        axios.get('/orders.json')
            .then((response) => {
                const orders = Object.entries(response.data).map(([key, value]) => ({key, ...value}));
                dispatch(fetchOrdersSuccess(orders))
            })
            .catch(e => dispatch(fetchOrdersFailed(e)))
    }
};