import { useState } from 'react';
import { IGames } from '../models/game.type';

interface IProps {
    game: IGames;
}

const GameSlide: React.FC<IProps> = ({ game }) => {
    const [active, setActive] = useState<boolean>(false);

    const handleToggleActive = () => {
        setActive(!active);
    };

    return (
        <div className="gamesSlider">
            <img src={game.img} alt="" />
            <div className={`video ${active ? 'active' : undefined}`}>
                <iframe
                    src={game.trailer}
                    width={'1280'}
                    height={'720'}
                    title={game.title}
                    allow="acceleremeter; clipboard-write; encrypted-media; gyroscopel picture-in-picture"
                    allowFullScreen></iframe>
            </div>
            <div className="content">
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div className="buttons">
                    <a href="#" className="orderBtn">
                        Order Now
                    </a>
                    <a
                        href="#"
                        className={`playBtn ${active ? 'active' : undefined}`}
                        onClick={handleToggleActive}>
                        <span className="pause">
                            <i className="bi bi-pause-fill"></i>
                        </span>
                        <span className="play">
                            <i className="bi bi-play-fill"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GameSlide;
