import * as firebase from 'firebase'; 

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCF74a_S31pSmQb0ZqfbKLSRdO4XOPgv3k",
    authDomain: "autonomo-7e183.firebaseapp.com",
    databaseURL: "https://autonomo-7e183.firebaseio.com",
    projectId: "autonomo-7e183",
    storageBucket: "autonomo-7e183.appspot.com",
    messagingSenderId: "192787601022"
  };
  firebase.initializeApp(config);

export default firebase;
