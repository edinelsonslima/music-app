import {
    BsFillSkipBackwardFill,
    AiFillPlayCircle,
    AiFillPauseCircle,
} from '../../assets/icons';
import './index.css';
const Playbar = () => {
    return (
        <section className='play-extend' >
            <div className='playbar-container container'>
                <div className='play-capa'>
                    <img src='https://github.com/edinelsonslima.png' alt='' />
                </div>
                <div className='play-range'>
                    <input
                        type='range'
                        id='play-input-range'
                        defaultValue={0}
                        min={0}
                        step={0.1}
                    />
                    <div className='play-container-time'>
                        <small className='play-time-initial'>00:00</small>
                        <small className='play-time-finished'>00:00</small>
                    </div>
                </div>
                <div className='play-control'>
                    <BsFillSkipBackwardFill className='play-icon play-back' />
                    {true ? (
                        <AiFillPlayCircle className='play-icon play-play' />
                    ) : (
                        <AiFillPauseCircle className='play-icon play-pause' />
                    )}
                    <BsFillSkipBackwardFill className='play-icon play-skip' />
                </div>
            </div>
        </section>
    );
};

export { Playbar };
