import { Link } from 'react-router-dom';
import { useNavbar } from '../../hooks/components/Navbar/useNavbar';

import './index.css';

const Navbar = () => {
    const {
        srcIcon,
        displayName,
        signOutAccount,
        styleOptionsProfile,
        styleProfile,
    } = useNavbar();

    return (
        <nav className='nav-extend'>
            <div className='nav-container container'>
                <Link to='/home' className='nav-logo'>
                    Music App
                </Link>
                <div className='nav-container-profile'>
                    <button className='nav-profile' onClick={styleProfile}>
                        <div className='nav-icon-profile'>
                            {srcIcon.length === 1 ? (
                                srcIcon
                            ) : (
                                <img src={srcIcon} alt='icon-profile' />
                            )}
                        </div>
                        {displayName && (
                            <span className='nav-name-profile'>
                                {displayName}
                            </span>
                        )}
                    </button>
                    <div
                        className='nav-options-profile'
                        style={styleOptionsProfile}
                    >
                        <button
                            onClick={signOutAccount}
                            className='nav-sign-out'
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };
