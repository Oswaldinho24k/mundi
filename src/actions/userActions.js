import firebase from '../firebase';


//get User
export function getUserSuccess(user){
    return {type:'GET_USER_SUCCESS',user}
}

export function getUser(user){
    return function(dispatch, getState){
        return firebase.auth().signInWithEmailAndPassword(user.email, user.pass).then(u=>{
            console.log(u);

            dispatch(getUserSuccess(u));
            return u;

        }).catch((error)=> {

            console.log(error)
        });
    }
}

//get Profile

export function getProfileSuccess(profile){
    return {type:'GET_PROFILE_SUCCESS', profile}
}

export function getProfile(u){
    return function(dispatch, getState){
        let uid = u.uid;

        return firebase.database().ref(/users/+uid).once('value')
            .then(profile=>{
                let p = profile.val()
                let lista = []
                Object.keys(p.orders).forEach((order=>{
                    lista.push(p.orders[order])
                }));
                p['orders'] = lista;
            dispatch(getProfileSuccess(p));


        }).catch(error=>{
            console.log(error)
        })
    }
}

//check if user

export function checkUserSuccess(user){
    return {type: 'CHECK_IF_USER_SUCCESS', user}
}

export function checkIfUser(){
    return function(dispatch, getState){
        return firebase.auth().onAuthStateChanged((u)=>{
            if(u){
                dispatch(checkUserSuccess(u));
                dispatch(getProfile(u));
                return u;
            }else{
                console.log('no user')
            }
        })}
}