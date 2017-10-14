import firebase from '../firebase';
import {checkUserNotVerified, checkUserVerified} from "./validateActions";



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
                let p = profile.val();
                let lista = [];
                if(profile.orders){
                    Object.keys(p.orders).forEach((order=>{
                        let orden = p.orders[order];
                        orden['key']=order;
                        lista.push(orden);

                    }));
                    p['orders'] = lista;
                }
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
                dispatch(checkUserVerified());
                return u;
            }else{
                console.log('no user');
                dispatch(checkUserVerified());

            }
        })}
}
