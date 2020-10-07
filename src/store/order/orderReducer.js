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
        case actionTypes.PURCHASE_BURGER_INIT: {
            return {
                ...state,
                purchased: false
            }
        }
        default:
            return state
    }
};

export default reducer;