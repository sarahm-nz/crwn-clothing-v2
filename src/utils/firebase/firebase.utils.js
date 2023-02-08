import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { async } from 'q';

const firebaseConfig = {
    apiKey: "AIzaSyCAbwbnQRtuyrQpDBB8l5cuKiNl84yJD10",
    authDomain: "crwn-clothing-91973.firebaseapp.com",
    projectId: "crwn-clothing-91973",
    storageBucket: "crwn-clothing-91973.appspot.com",
    messagingSenderId: "1054156204850",
    appId: "1:1054156204850:web:a4f9ae7c20ef7fcea6852b"
};
  
    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);

    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
        prompt: "select_account"
    });

    export const auth = getAuth();
    export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

    export const db = getFirestore();

    export const createUserDocumentFromAuth = async (
        userAuth, 
        additionalInformation = {}
        ) => {
        if(!userAuth) return;

        const userDocRef = doc(db, 'users', userAuth.uid);

        const userSnapshot = await getDoc(userDocRef);

        //if user data does not exist
        if(!userSnapshot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation
                })
            } catch (error) {
                console.log('error creating the user', error.message);
        }
    }       
    
    //if user data exists, return userDocRef
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password)
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


/* 
{
next: callback,
error: errorCallback,
complete: completedCallback,
}
*/