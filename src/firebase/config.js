import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLdlW1GO5HbSZiVnGOdxH_bY78koDmMFk",
    authDomain: "photobooth-ecf4d.firebaseapp.com",
    projectId: "photobooth-ecf4d",
    storageBucket: "photobooth-ecf4d.appspot.com",
    messagingSenderId: "760550749832",
    appId: "1:760550749832:web:cbc8be12b4ca827b7b913d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectStorage, timestamp};