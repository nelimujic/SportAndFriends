import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAq55-APlV8fwSh3NecXd2hUSrnzK66W6w",
    authDomain: "friends-98f99.firebaseapp.com",
    databaseURL: "https://friends-98f99.firebaseio.com",
    projectId: "friends-98f99",
    storageBucket: "friends-98f99.appspot.com",
    messagingSenderId: "168732772219",
    appId: "1:168732772219:web:ef712bd03bd521e0e89fde",
    measurementId: "G-JE04EEEWLF"
}

const firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;