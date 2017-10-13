import firebase from '../firebase';

export function saveOrderFilesSuccess(payload) {
    return {type: 'SAVE_ORDER_FILES_SUCCESS', payload}
}

export function saveOrderFiles(order, user, archivos) {
    return function(dispatch, getState){
        return firebase.database().ref('users/'+user+'/orders/'+order.key+'/archivos/').set(archivos)
            .then(function(){
                firebase.database().ref('users/'+user+'/orders/'+order.key).once('value').then(r=> {
                    const payload = {
                        order: r.val(),
                        user
                    };
                    dispatch(saveOrderFilesSuccess(payload));
                });

            }).catch(function(){
                console.log('nel')
            })
    }
};

export function saveAgentFileSuccess(payload) {
    return {type: 'SAVE_AGENT_FILE_SUCCESS', payload}
}

export function saveAgentFiles(order, userId, archivos) {
    return function(dispatch, getState){
        return firebase.database().ref('users/'+userId+'/orders/'+order.key+'/archivos/').set(archivos)
            .then(function(){
                firebase.database().ref('users/'+userId).then(user=>{
                    firebase.database().ref('users/'+userId+'/orders/'+order.key).once('value').then(r=> {
                        const payload = {
                            order: r.val(),
                            user
                        };
                        dispatch(saveAgentFileSuccess(payload));
                    });
                })


            }).catch(function(){
                console.log('nel')
            })
    }
};





export function getSingleOrderSuccess(order){
    return{type:'GET_SINGLE_ORDER_SUCCESS', order}
}

export function getSingleOrder(userId, orderId){
    return function(dispatch, getState){
        return firebase.auth().signInAnonymously().then(function(r) {
            return firebase.database().ref('users/'+userId+'/orders/'+orderId).once('value').then(r=>{
                let order = r.val()
                order['key'] = r.key
                dispatch(getSingleOrderSuccess(order))

                return(r.val())
            })
        });

    }
}