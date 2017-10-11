

export default function orderReducer(state={}, action){
    switch(action.type){

        case 'SAVE_ORDER_FILES_SUCCESS':
            console.log(action.order);
            return action.order;

        default:
            return state;
    }
}