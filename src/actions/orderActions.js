import firebase from '../firebase';

export function saveOrderFilesSuccess(order) {
    return {type: 'SAVE_ORDER_FILES_SUCCESS', order}
}

export function saveOrderFiles(order, user, archivos) {
    return function(dispatch, getState){
        return firebase.database().ref('users/'+user+'/orders/'+order.key+'/archivos/').set(archivos)
            .then(function(){
                firebase.database().ref('users/'+user+'/orders/'+order.key).once('value').then(r=>{
                    dispatch(saveOrderFilesSuccess(r.val()))
                })

            }).catch(function(){
                console.log('nel')
            })
    }
}