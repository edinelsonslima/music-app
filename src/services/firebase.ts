import * as authentication from 'firebase/app';
// import * as admin from 'firebase-admin'
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY ,
    authDomain: process.env.REACT_APP_AUHT_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID ,
    appId: process.env.REACT_APP_APP_ID ,
};



const firebaseAuth = authentication.initializeApp(firebaseConfig, 'music-app');
const auth = getAuth(firebaseAuth);
export { auth };

// console.log(admin.credential.applicationDefault());
// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
// });
