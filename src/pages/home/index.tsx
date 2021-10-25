import { CarouselContainer } from '../../components/CarouselContainer';
import { Navbar } from '../../components/Navbar';
import { Playbar } from '../../components/Playbar';

import './index.css';

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <main className='home-main container'>
                <div style={{flex: '1', color: '#fff'}}>a</div>
                <CarouselContainer />
            </main>
            <Playbar />
        </div>
    );
};

export { Home };
