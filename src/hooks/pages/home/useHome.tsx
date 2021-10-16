import { signOut } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../services/firebase';

const useHome = () => {
    const history = useHistory()
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        if (auth.currentUser?.displayName) {
            const username = auth.currentUser?.displayName;
            setDisplayName(username);
        }
    }, [displayName]);

    const signOutAccount = () => {
        signOut(auth);
        history.push('/login')
    };
    return { signOutAccount, displayName };
};

export { useHome };
