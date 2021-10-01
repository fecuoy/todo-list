import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBEMk_woA8jXquXQDr7OBtdAMy40ERwBBQ",
  authDomain: "todo-list-20098.firebaseapp.com",
  projectId: "todo-list-20098",
  storageBucket: "todo-list-20098.appspot.com",
  messagingSenderId: "24837245699",
  appId: "1:24837245699:web:c03f9d652d97cc6adc3736"
};
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore().collection("Todos")