import { IGames } from '../models/game.type';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

import './GamesSwiper.css';
import GameSlide from './GameSlide';

interface IProps {
    games: IGames[];
}

const GamesSwiper: React.FC<IProps> = ({ games }) => {
    return (
        <Swiper
            effect={`coverflow`}
            grabCursor={true}
            navigation={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 35,
                stretch: 200,
                depth: 250,
                modifier: 1,
                slideShadows: true,
            }}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false
            // }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="gamesSwiper">
            {games.map((game) => (
                <SwiperSlide key={game._id}>
                    <GameSlide game={game} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default GamesSwiper;
