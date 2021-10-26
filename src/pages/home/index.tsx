import { CarouselContainer } from '../../components/CarouselContainer';
import { Animation } from '../../components/Animation';
import { Navbar } from '../../components/Navbar';
import { Playbar } from '../../components/Playbar';
import './index.css';

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <main className='home-main container'>
                <Animation />
                <CarouselContainer />
            </main>
            <Playbar />
        </div>
    );
};

export { Home };
