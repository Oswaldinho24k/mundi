import {combineReducers} from 'redux';
import searchReducer from './searchReducer';

import userMainReducer from "./userReducers";

const rootReducer = combineReducers({
    search:searchReducer,
    userMain:userMainReducer
});

export default rootReducer;