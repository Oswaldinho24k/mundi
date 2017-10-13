export default function validateUserReducer(state = false, action){
    switch(action.type){


        case "CHECK_USER_VERIFIED":
            return action.verified;

        case "CHECK_USER_NOT_VERIFIED":
            return action.verified;


        default:
            return state;
    }
}