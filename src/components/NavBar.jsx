// navbar comprenant un logo et un onglet vers la page des emprunteurss, la page des prêts et la page des objects

import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to='/'>Accueil</Link>
        </li>
        <li className='navbar-item'>
          <Link to='/loans'>Prêts</Link>
        </li>
        <li className='navbar-item'>
          <Link to='/objects'>Objets</Link>
        </li>
        <li className='navbar-item'>
          <Link to='/borrowers'>Emprunteurs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
