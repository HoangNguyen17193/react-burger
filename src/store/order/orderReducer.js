import * as actionTypes from '../actionTypes';

const initialState = {
    orders: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS: {
            const newOrder = {
                ...action.orderData,
                key: action.id
            };
            return {
                ...state,
                loading: false,
                orders: [...state.orders, newOrder]
            };
        }
        case actionTypes.PURCHASE_BURGER_FAILED: {
            return {
                ...state,
                loading: false
            };
        }
        case actionTypes.PURCHASE_BURGER_START: {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state
    }
};

export default reducer;