import { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../App';
import SideMenu from '../components/SideMenu';
import Header from './Header';

import Home from './Home';
import { IGames } from '../models/game.type';
import Categories from './Categories';

import MyLibrary from './MyLibrary';
import Bag from './Bag';

import gameDataJson from '../../public/api/gamesData.json';

import './Main.css';

const Main = () => {
    const { library, bag } = useContext(AppContext);

    const [active, setActive] = useState<boolean>(false);
    const [games, setGames] = useState<IGames[]>([]);

    const homeRef = useRef<string>();
    const categoriesRef = useRef<string>();
    const libraryRef = useRef<string>();
    const bagRef = useRef<string>();

    const sections = [
        {
            name: 'home',
            ref: homeRef,
            active: true,
        },
        {
            name: 'categories',
            ref: categoriesRef,
            active: false,
        },
        {
            name: 'library',
            ref: libraryRef,
            active: false,
        },
        {
            name: 'bag',
            ref: bagRef,
            active: false,
        },
    ];

    const handleSectionActive = (target: string) => {
        sections.map((section: any) => {
            section.ref.current.classList.remove('active');

            if (section.ref.current.id === target) {
                section.ref.current.classList.add('active');
            }

            return section;
        });
    };

    const handleToggleActive = () => {
        setActive(!active);
    };

    // const fetchData = async () => {
    //     try {
    //         const res = await fetch('http://127.0.0.1:5173/api/gamesData.json');

    //         const data: IGames[] = await res.json();

    //         setGames(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        setGames(gameDataJson);
    }, []);

    return (
        <main>
            <SideMenu active={active} sectionActive={handleSectionActive} />
            <div className={`banner ${active ? 'active' : undefined}`}>
                <Header toggleActive={handleToggleActive} />
                <div className="container-fluid">
                    {games && games.length > 0 && (
                        <>
                            <Home games={games} reference={homeRef} />
                            <Categories games={games} reference={categoriesRef} />
                            <MyLibrary games={library} reference={libraryRef} />
                            <Bag games={bag} reference={bagRef} />
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Main;
