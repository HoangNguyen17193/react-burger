import {spawn} from 'redux-saga/effects';

import {watchBurgerBuilder} from "./burgerBuilder/burgerBuilderSaga";

export default function* rootSaga() {
    yield spawn(watchBurgerBuilder)
}