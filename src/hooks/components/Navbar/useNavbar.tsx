import { signOut } from 'firebase/auth';
import { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../services/firebase';

const useNavbar = () => {
    const history = useHistory(),
        [srcIcon, setSrcIcon] = useState(''),
        [displayName, setDisplayName] = useState(''),
        [styleOptionsProfile, setStyleOptionsProfile] = useState({transform: 'scale(0)'}),
        [styleAux, setStyleAux] = useState(true);

    useMemo(() => {
        if (auth.currentUser) {
            const name0: string =
                (auth.currentUser.displayName &&
                    auth.currentUser.displayName[0]) ||
                '';
            const urlPhoto: string = auth.currentUser.photoURL || '';

            setDisplayName(auth.currentUser.displayName || '');

            if (urlPhoto) return setSrcIcon(urlPhoto);
            setSrcIcon(name0);
        }
    }, [srcIcon]);

    const signOutAccount = () => {
        signOut(auth);
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
