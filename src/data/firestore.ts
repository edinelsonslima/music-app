import { collection, addDoc, getDocs } from 'firebase/firestore';
import { FireStore } from '../services/firebase';

const createDoc = async () => {
    try {
        const docRef = await addDoc(collection(FireStore, 'musics'), {
            description: 'vai safadão',
            musicUrl: '',
            photoUrl:
                'https://lastfm.freetls.fastly.net/i/u/770x0/d1a4000bd1184227b2c71fc52959b17b.jpg',
            title: 'Ele não te merece',
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};
// createDoc()

export type getDocResponse = {
    description: string;
    musicUrl: string;
    photoUrl: string;
    title: string;
};

const getDoc = async () => {
    const data: getDocResponse[] = [];
    const querySnapshot = await getDocs(collection(FireStore, 'musics'));
    querySnapshot.forEach((doc) => {
        data.push(doc.data() as getDocResponse);
    });

    return data;
};

export { createDoc, getDoc };