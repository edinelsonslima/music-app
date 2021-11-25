import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import {
  getAnalytics,
  logEvent,
  setUserProperties,
  setUserId,
} from "@firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseAuth = initializeApp(firebaseConfig, "music-app"),
  //Inicializando Aplicações do Firebase
  Authentication = getAuth(firebaseAuth),
  FireStore = getFirestore(firebaseAuth),
  key = getAnalytics(firebaseAuth);

const analytics = {
  key,
  logEvent,
  setUserId,
  setUserProperties,
};

export { Authentication, FireStore, analytics };
