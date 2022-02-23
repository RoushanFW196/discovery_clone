import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth";
import 'firebase/storage'

// const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');


const app = firebase.initializeApp({
    apiKey: "AIzaSyBdnp45RBwtWzM9qtGR6k66fY7zo2bvKu0",
    authDomain: "discovery-clone.firebaseapp.com",
    projectId: "discovery-clone",
    storageBucket: "discovery-clone.appspot.com",
    messagingSenderId: "355744165948",
    appId: "1:355744165948:web:fdeac232be0910f3ca9339"
})
export const db = firebase.firestore();
// export const storage = firebase.storage()
export const auth = app.auth()

// auth.languageCode = 'it';
// window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//     'size': 'invisible',
//     'callback': (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       onSignInSubmit();
//     }
//   }, auth);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
  
export default app;


// export const appVerifier = window.recaptchaVerifier;
