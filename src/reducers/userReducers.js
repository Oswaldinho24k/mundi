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

        case "SAVE_ORDER_FILES_SUCCESS":
            let orders = [...state.orders.filter(o=>o.key!==action.payload.order.key), action.payload.order];
            return {
                ...state,
                orders
            };

        case "SAVE_AGENT_FILE_SUCCESS":
            let ordersWAgent = [action.payload.user.orders.filter(o=>o.key!==action.payload.order.key), action.payload.order];
            return {
                ...state,
                ordersWAgent
            };

        case "CAN_EDIT_ORDER_SUCCESS":
            let ordersEdit = [...state.orders.filter(o=>o.key!==action.order.key), action.order];
            return {
                ...state,
                ordersEdit
            };

        default:
            return state;
    }
}

const userMainReducer = combineReducers({
    user:userReducer,
    profile:profileReducer
});

export default userMainReducer;