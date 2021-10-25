import { useEffect, useMemo, useState } from 'react';
import { CardMusic, CardMusicProps } from '../CardMusic';
import { seedMusicFake } from './seedMusicFake';
import { AiOutlineDown, AiOutlineUp } from '../../assets/icons';
import './index.css';

const CarouselContainer = () => {
    const [upDownElement, setUpDownElement] = useState(0),
        [cards, setCards] = useState<CardMusicProps[]>([]),
        e = document.querySelector('.carrossel-container');

    function up() {
        if (e) {
            if (upDownElement <= 0) return;
            const newValue =
                upDownElement - e.scrollHeight / seedMusicFake.length;
            setUpDownElement(newValue);
        }
    }

    function down() {
        if (e) {
            if (upDownElement >= e.scrollHeight - e.scrollHeight / 5) return;
            const newValue =
                upDownElement + e.scrollHeight / seedMusicFake.length;
            setUpDownElement(newValue);
        }
    }

    if (e) e.scrollTo(0, upDownElement);

    useEffect(() => {
        setCards(seedMusicFake);
    }, [seedMusicFake]);

    return (
        <div className='carousel-extend'>
            <button onClick={up}>
                <AiOutlineUp/>
            </button>
            <div className='carrossel-container'>
                {cards.map((value, index) => (
                    <CardMusic
                        key={index}
                        descriptionMusic={value.descriptionMusic}
                        nameMusic={value.nameMusic}
                        photoMusic={value.photoMusic}
                    />
                ))}
            </div>
            <button onClick={down}>
                <AiOutlineDown />
            </button>
        </div>
    );
};

export { CarouselContainer };
