import * as authentication from 'firebase/app';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY ,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
    appId: process.env.REACT_APP_APP_ID ,
};



const firebaseAuth = authentication.initializeApp(firebaseConfig, 'music-app');
const auth = getAuth(firebaseAuth);
export { auth };



// import * as admin from 'firebase-admin'
// console.log(admin.credential.applicationDefault());
// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
// });
