import { collection, addDoc, getDocs } from 'firebase/firestore';
import { FireStore } from '../services/firebase';

const createDoc = async () => {
    try {
        const docRef = await addDoc(collection(FireStore, 'users'), {
            first: 'Ada',
            last: 'Lovelace',
            born: 1815,
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};

const newDoc = async () => {
    try {
        const docRef = await addDoc(collection(FireStore, 'users'), {
            first: 'Alan',
            middle: 'Mathison',
            last: 'Turing',
            born: 1912,
        });

        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

const getDoc = async () => {
    const querySnapshot = await getDocs(collection(FireStore, 'users'));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
};