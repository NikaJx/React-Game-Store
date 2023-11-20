import { useState, useEffect } from 'react';

import './GameRating.css';

interface IProps {
    rating: number;
}

const GameRating: React.FC<IProps> = ({ rating }) => {
    const [stars, setStars] = useState([]);

    const generateStars = () => {
        let stars: any = [];

        if (rating > 5 || rating < 1) {
            return;
        }

        for (let i = 0; i < rating; i++) {
            stars.push(i);
        }

        return stars;
    };

    useEffect(() => {
        setStars(generateStars());
    }, []);

    return (
        <div className="gameRating">
            {stars.map((_, i) => (
                <i key={i} className="bi bi-star-fill"></i>
            ))}
        </div>
    );
};

export default GameRating;
