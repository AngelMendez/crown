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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(objectToAdd => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, objectToAdd);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        }
    });

    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// googleProvider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
