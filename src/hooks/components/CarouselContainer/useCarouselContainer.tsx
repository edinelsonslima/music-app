import { useEffect, useState } from 'react';
import { getDoc, getDocResponse } from '../../../data/firestore';

const useCarouselContainer = () => {
    const [upDownElement, setUpDownElement] = useState(0),
        [cards, setCards] = useState<getDocResponse[]>([]),
        e = document.querySelector('.carrossel-container');

    function up() {
        if (e) {
            if (upDownElement <= 0) return;
            const newValue = upDownElement - e.scrollHeight / cards.length;
            setUpDownElement(newValue);
        }
    }

    function down() {
        if (e) {
            if (upDownElement >= e.scrollHeight - e.scrollHeight / cards.length)
                return;
            const newValue = upDownElement + e.scrollHeight / cards.length;
            setUpDownElement(newValue);
        }
    }

    if (e) e.scrollTo(0, upDownElement);

    useEffect(() => {
        (async () => {
            const musics = await getDoc();
            setCards(musics);
        })();
    }, []);

    return { cards, down, up };
};

export { useCarouselContainer };
