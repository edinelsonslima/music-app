import { CardMusic } from '../CardMusic';
import { AiOutlineDown, AiOutlineUp } from '../../assets/icons';
import './index.css';
import { useCarouselContainer } from '../../hooks/components/CarouselContainer/useCarouselContainer';

const CarouselContainer = () => {
    const { cards, down, up } = useCarouselContainer();

    return (
        <div className='carousel-extend'>
            <button onClick={up}>
                <AiOutlineUp />
            </button>
            <div className='carrossel-container'>
                {cards.map((value, index) => (
                    <CardMusic
                        key={index}
                        description={value.description}
                        musicUrl={value.title}
                        photoUrl={value.photoUrl}
                        title={value.title}
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
