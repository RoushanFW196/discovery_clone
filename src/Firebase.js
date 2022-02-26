import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";  

const firebaseConfig = {
    apiKey: "AIzaSyC5s58VXosYZZzrQuQ8EEhzEqqw818eDlQ",
    authDomain: "short-video-9ebf0.firebaseapp.com",
    projectId: "short-video-9ebf0",
    storageBucket: "short-video-9ebf0.appspot.com",
    messagingSenderId: "912260945333",
    appId: "1:912260945333:web:027679762d29894ad075fc"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase;