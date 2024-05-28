import { NavLink } from 'react-router-dom';
import clsx from "clsx";
import css from './Navigation.module.css';

function getLink({isActive}){
  return clsx(css.link, isActive && css.active)
}


export default function Navigation() {
  return (
    <nav>
      <ul className={css.menu}>
        <li>
          <NavLink to="/" className={getLink}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={getLink}>Movies</NavLink>
        </li> 
      </ul>
    </nav>
  );
}

