import { Link } from 'react-router-dom';
import { useNavbar } from '../../hooks/components/Navbar/useNavbar';

import './index.css';

const Navbar = () => {
    const { srcIcon, displayName } = useNavbar();

    return (
        <nav className='nav-container container'>
            <Link to='/home' className='nav-logo'>Music App</Link>

            <div className='nav-profile'>
                <div className='nav-icon-profile'>
                    {srcIcon.length === 1 ? (
                        srcIcon
                    ) : (
                        <img src={srcIcon} alt='icon-profile' />
                    )}
                </div>
                {displayName && (
                    <span className='nav-name-profile'>{displayName}</span>
                )}
            </div>
        </nav>
    );
};

export { Navbar };
