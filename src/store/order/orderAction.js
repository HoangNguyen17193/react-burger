import * as ActionTypes from '../actionTypes';

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
    return {
        orderData,
        type: ActionTypes.PURCHASE_BURGER
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
    return {
        type: ActionTypes.FETCH_ORDERS
    }
};