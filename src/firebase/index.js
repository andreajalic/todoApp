import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFX7pNWiXl0NmIajHsNITPw_pzWeYOQNA",
  authDomain: "todo-app-e6481.firebaseapp.com",
  projectId: "todo-app-e6481",
  storageBucket: "todo-app-e6481.appspot.com",
  messagingSenderId: "692676748751",
  appId: "1:692676748751:web:40a7ed7fac6155c43c1eba",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
