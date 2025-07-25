import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { envs } from './envs.js';

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
} = envs.database;

// Initialize Firebase
const app = initializeApp({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
});

const db = getFirestore(app);

export { db };