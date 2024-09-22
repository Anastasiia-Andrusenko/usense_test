import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
import { BiHome } from 'react-icons/bi';
import { MdCurrencyExchange } from 'react-icons/md';
import { BsPersonVcard } from 'react-icons/bs';

const Navigation = () => {
  const getClassName = ({ isActive }) => {
    return isActive ? `${css.nav_link} ${css.current}` : css.nav_link;
  };

  return (
    <nav className={css.nav}>
      <ul className={css.nav_list}>
        <li className={css.nav_item}>
          <NavLink to="/" className={getClassName}>
            <span className={css.icon_home}>
              <BiHome />
            </span>
            Home
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink to="/converter" className={getClassName}>
            <span className={css.icon_convert}>
              <MdCurrencyExchange />
            </span>
            Converter
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink to="/candidate" className={getClassName}>
            <span className={css.icon_person}>
              <BsPersonVcard />
            </span>
            Candidate
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
