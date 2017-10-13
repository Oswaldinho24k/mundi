
export default function ordersReducer(state=null, action){
    switch(action.type){
        case "GET_SINGLE_ORDER_SUCCESS":
            return action.order;

        default:
            return state;
    }
}