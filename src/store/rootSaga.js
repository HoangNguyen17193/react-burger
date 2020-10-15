import {spawn, all} from 'redux-saga/effects';

import {watchBurgerBuilder} from './burgerBuilder/burgerBuilderSaga';
import {watchOrder} from './order/orderSaga';

export default function* rootSaga() {
    yield all([
        spawn(watchBurgerBuilder),
        spawn(watchOrder)
    ]);
}