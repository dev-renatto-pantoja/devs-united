import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYQD2Bud0IHLMj418-jOUZvUbOv479e-Q",
  authDomain: "devs-united-sprint4.firebaseapp.com",
  projectId: "devs-united-sprint4",
  storageBucket: "devs-united-sprint4.appspot.com",
  messagingSenderId: "390294641010",
  appId: "1:390294641010:web:c36b25fd94760877c9e5eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore()
// exporta el paquete de firebase para poder usarlo

// // el módulo de autenticacíon
export const auth = firebase.auth();
// // el provedor de autenticación
export const provider = new firebase.auth.GoogleAuthProvider();
// // la utilidad para hacer login con el pop-up
export const loginConGoogle = () => auth.signInWithPopup(provider);
// // la utilidad para hacer logout
export const logout = () => auth.signOut();
export default firebase
