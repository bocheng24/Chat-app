import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB-JB1Pf9ESLr36qBa_gmxctsK_x9JNq4Q",
    authDomain: "chat-app-971a4.firebaseapp.com",
    projectId: "chat-app-971a4",
    storageBucket: "chat-app-971a4.appspot.com",
    messagingSenderId: "370904825826",
    appId: "1:370904825826:web:be08c1ef2476c1d45743bb"
  });

const db = getFirestore();
const provider = new GoogleAuthProvider();

export { db, provider }