import { useContext, useState } from 'react';
import { StopContext } from '../../hooks/context/useStop';

import {
    BsFillSkipBackwardFill,
    AiFillPlayCircle,
    AiFillPauseCircle,
} from '../../assets/icons';
import './index.css';

const Playbar = () => {
    const { stop, setStop } = useContext(StopContext);

    const handlePlayPause = () => {
        if (stop) {
            setStop('');
            return;
        }
        setStop('stop');
    };

    return (
        <section className='play-extend'>
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
                    {stop ? (
                        <AiFillPlayCircle
                            className='play-icon play-play'
                            onClick={handlePlayPause}
                        />
                    ) : (
                        <AiFillPauseCircle
                            className='play-icon play-pause'
                            onClick={handlePlayPause}
                        />
                    )}
                    <BsFillSkipBackwardFill className='play-icon play-skip' />
                </div>
            </div>
        </section>
    );
};

export { Playbar };
