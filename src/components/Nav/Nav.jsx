import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Navigation = () => {
  const getClassName = ({ isActive }) => {
    return isActive ? `${css.nav_link} ${css.current}` : css.nav_link;
  };

  return (
    <nav className={css.nav}>
      <ul className={css.nav_list}>
        <li className={css.nav_item}>
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink to="/converter" className={getClassName}>
            Converter
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink to="/candidate" className={getClassName}>
            Candidate
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
