import { INav } from '../models/nav.type';

interface IProps {
    item: INav;
    navOnclick: (id: number, target: string) => any;
}

const NavListItem: React.FC<IProps> = ({ item, navOnclick }) => {
    return (
        <li>
            <a
                href="#"
                className={`${item.active ? 'active' : undefined}`}
                onClick={() => navOnclick(item._id, item.target)}>
                <i className={`bi ${item.icon}`}></i>
                <span className="navName">{item.name}</span>
            </a>
        </li>
    );
};

export default NavListItem;
