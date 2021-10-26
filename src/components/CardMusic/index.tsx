import { getDocResponse } from '../../data/firestore';
import './index.css';

const CardMusic = (props: getDocResponse) => {
    const { description, photoUrl, title } = props;

    return (
        <div className='card-container'>
            <img src={photoUrl} alt='capa' />
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export { CardMusic };
