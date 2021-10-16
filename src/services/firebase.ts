import { getAuth } from '@firebase/auth';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: 'AIzaSyCqfr3lBKltqfk14dH2uN4dYUnkIuTVqtc',
    authDomain: 'music-app-a3094.firebaseapp.com',
    projectId: 'music-app-a3094',
    storageBucket: 'music-app-a3094.appspot.com',
    messagingSenderId: '788189764876',
    appId: '1:788189764876:web:7b99062f7ef63802f6fd29',
};

const firebaseAuth = initializeApp(firebaseConfig, 'music-app');
const auth = getAuth(firebaseAuth);
export { auth };
