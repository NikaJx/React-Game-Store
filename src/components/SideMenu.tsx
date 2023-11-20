import { useState } from 'react';
import { navListData } from '../data/navListData';
import NavListItem from './NavListItem';

import './SideMenu.css';

interface IProps {
    active: boolean;
    sectionActive: (target: string) => any;
}

const SideMenu: React.FC<IProps> = ({ active, sectionActive }) => {
    const [navData, setNavData] = useState(navListData);

    const handleNavOnClick = (id: number, target: string) => {
        const newData = navData.map((nav) => {
            nav.active = false;

            if (nav._id === id) nav.active = true;

            return nav;
        });

        setNavData(newData);
        sectionActive(target);
    };

    return (
        <div className={`sideMenu ${active ? 'active' : undefined}`}>
            <a href="#" className="logo">
                <i className="bi bi-controller"></i>
                <span className="brand">Play</span>
            </a>
            <ul className="nav">
                {navData.map((item) => (
                    <NavListItem key={item._id} item={item} navOnclick={handleNavOnClick} />
                ))}
            </ul>
            <ul className="social">
                <li>
                    <a href="#">
                        <i className="bi bi-meta"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="share">
                        <i className="bi bi-share"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;
