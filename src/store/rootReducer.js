import { combineReducers } from "redux";
import burgerBuilderReducer from "./burgerBuilder/burgerBuilderReducer";
import orderReducer from "./order/orderReducer";


const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
});

export default rootReducer;