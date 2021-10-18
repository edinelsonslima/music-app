import { useMemo, useState } from 'react';
import { auth } from '../../../services/firebase';

const useNavbar = () => {
    const [srcIcon, setSrcIcon] = useState('');
    const [displayName, setDisplayName] = useState('');

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

    return { srcIcon, displayName };
};

export { useNavbar };
