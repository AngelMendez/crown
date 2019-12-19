import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOjbi60YZf-MJb0gtehIced6w5h50nQAg",
    authDomain: "crown-mendez.firebaseapp.com",
    databaseURL: "https://crown-mendez.firebaseio.com",
    projectId: "crown-mendez",
    storageBucket: "crown-mendez.appspot.com",
    messagingSenderId: "851913292908",
    appId: "1:851913292908:web:f175fdc81643ff01132c49",
    measurementId: "G-YQDEZLXLQN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
