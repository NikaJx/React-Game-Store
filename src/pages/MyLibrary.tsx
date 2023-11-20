import GameCard from '../components/GameCard';
import { IGames } from '../models/game.type';
import './MyLibrary.css';

interface IProps {
    games: IGames[];
    reference: any;
}

const MyLibrary: React.FC<IProps> = ({ games, reference }) => {
    return (
        <section id="library" className="library" ref={reference}>
            <div className="container-fluid">
                <div className="row mb-3">
                    <h1>My Library</h1>
                </div>
                <div className="row">
                    {games.length === 0 ? (
                        <h2 className="emty">Your library is empty</h2>
                    ) : (
                        games.map((game) => <GameCard key={game._id} game={game} />)
                    )}
                </div>
            </div>
        </section>
    );
};

export default MyLibrary;
