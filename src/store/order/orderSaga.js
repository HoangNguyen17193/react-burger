import {put, takeLatest, takeEvery} from 'redux-saga/effects';

import axios from "../../axios-orders";
import {
    fetchOrdersFailed,
    fetchOrdersSuccess, purchaseBurgerFailed,
    purchaseBurgerStart,
    purchaseBurgerSuccess,
    startFetchOrders
} from "./orderAction";
import * as actionTypes from "../actionTypes";

function* fetchOrders() {
    yield put(startFetchOrders());
    try {
        const response = yield axios.get('/orders.json');
        const orders = Object.entries(response.data).map(([key, value]) => ({key, ...value}));
        yield put(fetchOrdersSuccess(orders));
    } catch (e) {
        yield put(fetchOrdersFailed(e));
    }
}

function* purchaseBurger(action) {
    yield put(purchaseBurgerStart());
    try {
        const response = yield axios.post('/orders.json', action.orderData);
        yield put(purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (e) {
        yield put(purchaseBurgerFailed(e));
    }
}

export function* watchOrder() {
    yield takeLatest(actionTypes.FETCH_ORDERS, fetchOrders);
    yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurger)
}