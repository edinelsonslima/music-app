import './index.css';

export type CardMusicProps = {
    photoMusic: string;
    nameMusic: string;
    descriptionMusic: string;
};

const CardMusic = (props: CardMusicProps) => {
    return (
        <div className='card-container'>
            <img src={props.photoMusic} alt='capa' />
            <div>
                <p>{props.nameMusic}</p>
                <p>{props.descriptionMusic}</p>
            </div>
        </div>
    );
};

export { CardMusic };
