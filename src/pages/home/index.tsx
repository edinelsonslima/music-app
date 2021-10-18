import { Navbar } from '../../components/Navbar';
import { Playbar } from '../../components/Playbar';
import { useHome } from '../../hooks/pages/home/useHome';

import './index.css'

const Home = () => {
    const { signOutAccount } = useHome();

    return (
        <main className="home-container container">
            <Navbar/>

            <div>
                <h1>Home page</h1>
                <button onClick={signOutAccount}>SingOut</button>
            </div>
            
            <Playbar/>
        </main>
    );
};

export { Home };
