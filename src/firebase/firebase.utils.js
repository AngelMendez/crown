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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
