import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // If using Firebase database
import 'firebase/compat/storage';
import 'firebase/compat/auth'

// development
var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
}
!firebase.apps.length ? firebase.initializeApp(config) : ''
// firebase.analytics()
export var auth = firebase.auth(),
    db = firebase.firestore(),
    fieldvalue = firebase.firestore.FieldValue,
    // storage = firebase.storage(),
    storageRef = firebase.storage().ref(),
    timetes = firebase.firestore.FieldValue.serverTimestamp()
