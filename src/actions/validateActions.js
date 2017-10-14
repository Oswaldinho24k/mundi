export function checkUserNotVerified(){
    return {type: 'CHECK_USER_NOT_VERIFIED', verified:false}
}

export function checkUserVerified(){
    return {type: 'CHECK_USER_VERIFIED', verified:true}
}

//check if orderExists
