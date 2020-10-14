import {spawn} from 'redux-saga/effects';

import {watchBurgerBuilder} from './burgerBuilder/burgerBuilderSaga';
import {watchOrder} from './order/orderSaga';

export default function* rootSaga() {
    yield spawn(watchBurgerBuilder);
    yield spawn(watchOrder);
}