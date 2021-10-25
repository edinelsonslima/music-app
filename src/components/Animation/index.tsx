import { useContext } from 'react';
import { StopContext } from '../../hooks/context/useStop';
import './index.css';

const Animation = () => {
    const { stop } = useContext(StopContext);

    return (
        <div className='animation-container'>
            <div id='blocks'>
                <div className={'block ' + stop}></div>
                <div className={'block ' + stop}></div>
                <div className={'block ' + stop}></div>
                <div className={'block ' + stop}></div>
                <div className={'block ' + stop}></div>
                <div className={'block ' + stop}></div>
                <div className={'block ' + stop}></div>
                <div className={'block ' + stop}></div>
                <div className={'block ' + stop}></div>
            </div>
        </div>
    );
};

export { Animation };
