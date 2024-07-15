import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore'

import firebaseConfig from '../../helpers/configs/firebase.config'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {
  auth,
  getAuth,
  db,
  addDoc,
  collection,
  createUserWithEmailAndPassword,
  getDocs,
  onAuthStateChanged,
  query,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  where,
}
