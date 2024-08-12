import { NavLink } from 'react-router-dom';
import HeaderLogo from '../../assets/logos/header-logo.svg';

import './navBar.styles.scss';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/">
        <img  className="navbar-logo" src={HeaderLogo} alt='Pro working logo'/>
      </NavLink>
      <NavLink to="company-portal" className='company-portal-link'>
        Portal Empresas
      </NavLink>
    </div>
  );
}

export default NavBar;