import firebase from 'firebase/app'
// import "firebase/auth";
import "firebase/firestore";
// import "firebase/functions";
// import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyDuwO9LsarY4enxlrmFR896Fa2exl2tGVU",
    authDomain: "kurta-gang.firebaseapp.com",
    projectId: "kurta-gang",
    storageBucket: "kurta-gang.appspot.com",
    messagingSenderId: "1068027131855",
    appId: "1:1068027131855:web:01d82e944007c90322c4ba"
};

firebase.initializeApp(firebaseConfig);

// export var auth = firebase.auth();
export var firestore = firebase.firestore();
// export var cloudFunctions = firebase.functions();
// export var storage = firebase.storage();
// export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp()

// export var googleProvider = new firebase.auth.GoogleAuthProvider();
// export var facebookProvider = new firebase.auth.FacebookAuthProvider();

export default firebase;

