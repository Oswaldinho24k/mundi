import firebase from '../firebase';

export function saveSearchSuccess(search) {
    return {type: "SAVE_SEARCH_SUCCESS", search}
}

export function saveSearch(search){
    return function(dispatch, getState){
        let key = firebase.database().ref().child('searchs').push().key;
        let updates = {};
        let fakeUser = 123;
        console.log(key);
        search['key'] = key;
        search["user"] = fakeUser;
        updates['/users/' + fakeUser + '/searchs/'+ key] = key;
        updates['/searchs/' + key] = search;
        return firebase.database().ref().update(updates)
           .then(()=>{
               dispatch(saveSearchSuccess(search));
               return;
           })
           .catch(e=>{
               console.log(e);
               return
           });
    }
}

