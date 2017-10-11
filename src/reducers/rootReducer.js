import {combineReducers} from 'redux';
import searchReducer from './searchReducer';
import orderReducer from './ordersReducer';
import userMainReducer from "./userReducers";

const rootReducer = combineReducers({
    search:searchReducer,
    userMain:userMainReducer
});

export default rootReducer;