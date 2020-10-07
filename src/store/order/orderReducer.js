import * as actionTypes from '../actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
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
                orders: [...state.orders, newOrder],
                purchased: true
            };
        }
        case actionTypes.PURCHASE_BURGER_FAIL: {
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
        case actionTypes.PURCHASE_BURGER_INIT: {
            return {
                ...state,
                purchased: false
            }
        }
        case actionTypes.FETCH_ORDERS_START: {
            return {
                ...state,
                loading: true,
            }
        }
        case actionTypes.FETCH_ORDERS_SUCCESS: {
            return {
                ...state,
                orders: action.orders,
                loading: false
            }
        }
        case actionTypes.FETCH_ORDERS_FAIL: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state
    }
};

export default reducer;