import { useState } from 'react';
import { IGames } from '../models/game.type';
import { filterListData } from '../data/filterListData';
import { IFilterData } from '../models/filter.type';
import GameCard from '../components/GameCard';

import './Categories.css';

interface IProps {
    games: IGames[];
    reference: any;
}

const Categories: React.FC<IProps> = ({ games, reference }) => {
    const [data, setData] = useState(games);
    const [filters, setFilters] = useState<IFilterData[]>(filterListData);

    const [text, setText] = useState<string>('');

    const handleFilterGames = (category: string | number) => {
        setFilters(
            filters.map((filter) => {
                filter.active = false;

                if (filter.name === category) {
                    filter.active = true;
                }

                return filter;
            }),
        );

        if (category === 'All') {
            setData(games);
            return;
        }

        setData(games.filter((game) => game.category === category));
    };

    const handleSearchGames = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            games.filter((game) =>
                game.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()),
            ),
        );
        setText(e.target.value);
    };

    return (
        <section id="categories" className="categories" ref={reference}>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-lg-8 d-flex align-items-center justify-content-start">
                        <ul className="filters">
                            {filters.map((filter) => (
                                <li
                                    key={filter._id}
                                    className={`${filter.active ? 'active' : undefined}`}
                                    onClick={() => handleFilterGames(filter.name)}>
                                    {filter.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-end">
                        <div className="search">
                            <i className="bi bi-search"></i>
                            <input
                                type="text"
                                placeholder="Search"
                                value={text}
                                onChange={handleSearchGames}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.map((game) => (
                        <GameCard key={game._id} game={game} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
