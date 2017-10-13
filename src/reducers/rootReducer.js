import {combineReducers} from 'redux';
import searchReducer from './searchReducer';
import validateUserReducer from './validateUserReducer';
import userMainReducer from "./userReducers";
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
    search:searchReducer,
    userMain:userMainReducer,
    verified:validateUserReducer,
    orders: ordersReducer
});

export default rootReducer;