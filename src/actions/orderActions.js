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