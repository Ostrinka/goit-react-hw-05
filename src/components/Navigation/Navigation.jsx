import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={css.menu}>
        <li>
          <NavLink to="/" className={css.link}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={css.link}>Movies</NavLink>
        </li> 
      </ul>
    </nav>
  );
}

