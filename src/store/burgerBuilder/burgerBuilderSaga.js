import {put, takeLatest} from 'redux-saga/effects';

import axios from '../../axios-orders';
import {fetchIngredientsFailed, setIngredients} from "./burgerBuilderAction";
import * as actionTypes from '../actionTypes';

function* initIngredientsSaga() {
    try {
        const response = yield  axios.get('/ingredients.json');
        yield put(setIngredients(response.data));
    } catch (e) {
        yield put(fetchIngredientsFailed());
    }
}

export function* watchBurgerBuilder() {
    yield takeLatest(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}