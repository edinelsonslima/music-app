import { Navbar } from '../../components/Navbar';
import { Playbar } from '../../components/Playbar';
import { useHome } from '../../hooks/pages/home/useHome';

import './index.css';

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <main className=' container'></main>
            <Playbar />
        </div>
    );
};

export { Home };
