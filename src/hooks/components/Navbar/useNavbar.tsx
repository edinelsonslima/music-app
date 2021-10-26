import { signOut } from 'firebase/auth';
import { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Authentication } from '../../../services/firebase';

const useNavbar = () => {
    const history = useHistory(),
        [srcIcon, setSrcIcon] = useState(''),
        [displayName, setDisplayName] = useState(''),
        [styleOptionsProfile, setStyleOptionsProfile] = useState({transform: 'scale(0)'}),
        [styleAux, setStyleAux] = useState(true);

    useMemo(() => {
        if (Authentication.currentUser) {
            const name0: string =
                (Authentication.currentUser.displayName &&
                    Authentication.currentUser.displayName[0]) ||
                '';
            const urlPhoto: string = Authentication.currentUser.photoURL || '';

            setDisplayName(Authentication.currentUser.displayName || '');

            if (urlPhoto) return setSrcIcon(urlPhoto);
            setSrcIcon(name0);
        }
    }, []);

    const signOutAccount = () => {
        signOut(Authentication);
        history.push('/login');
    };

    const styleProfile = () => {
        if (styleAux) {
            setStyleOptionsProfile({ transform: 'scale(1)' });
            setStyleAux(false);
            return;
        }
        setStyleOptionsProfile({ transform: 'scale(0)' });
        setStyleAux(true);
    };

    return {
        srcIcon,
        displayName,
        signOutAccount,
        styleOptionsProfile,
        styleProfile,
    };
};

export { useNavbar };
