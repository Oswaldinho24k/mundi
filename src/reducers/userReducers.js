import {initialState} from "../store/configureStore";
import {combineReducers} from 'redux';

export function userReducer(state = null, action){
    switch(action.type){

        case "CHECK_IF_USER_SUCCESS":
            return action.user;

        case "GET_USER_SUCCESS":
            return action.user;


        default:
            return state;
    }
}
export function profileReducer(state=null, action){
    switch(action.type){
        case "GET_PROFILE_SUCCESS":
            return action.profile;

        default:
            return state;
    }
}

const userMainReducer = combineReducers({
    user:userReducer,
    profile:profileReducer
});

export default userMainReducer;