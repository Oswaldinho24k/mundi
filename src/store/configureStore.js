import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export const initialState = {
    search:{},
    userMain:{}
};

export function configureStore(){
    return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);}

export default configureStore;