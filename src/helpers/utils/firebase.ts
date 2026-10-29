import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc,
  startAfter,
  endBefore,
  where,
  DocumentSnapshot,
  getCountFromServer,
} from 'firebase/firestore';

import firebaseConfig from '../../helpers/configs/firebase.config';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  app,
  addDoc,
  auth,
  collection,
  createUserWithEmailAndPassword,
  deleteDoc,
  DocumentSnapshot,
  db,
  doc,
  getAuth,
  getDocs,
  getCountFromServer,
  limit,
  onAuthStateChanged,
  orderBy,
  query,
  sendPasswordResetEmail,
  setDoc,
  signInWithEmailAndPassword,
  updateDoc,
  signOut,
  startAfter,
  endBefore,
  where,
};
