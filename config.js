import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBx3Ram61NA6xxusyBGY5Shpig4CN5bt08",
  authDomain: "notes-app-81de0.firebaseapp.com",
  projectId: "notes-app-81de0",
  storageBucket: "notes-app-81de0.appspot.com",
  messagingSenderId: "958874398763",
  appId: "1:958874398763:web:825e3b58ed4bfeb7727a6e",
  measurementId: "G-E1F8V6EWJS"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };