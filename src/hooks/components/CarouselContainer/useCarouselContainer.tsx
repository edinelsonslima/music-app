import { useMemo, useState } from 'react';
import { CardMusicProps } from '../../../components/CardMusic';
import { seedMusicFake } from './seedMusicFake';

const useCarouselContainer = () => {
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

    useMemo(() => {
        setCards(seedMusicFake);
    }, [seedMusicFake]);

    return { cards, down, up };
};

export { useCarouselContainer };
