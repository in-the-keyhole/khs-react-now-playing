import logo from '../images/nowplaying-white-logo-nav.png'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state'

import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useLocalStorageState("loggedIn", { defaultValue: false });

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  }

  const logout = () => {
    setMenuActive(false);
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <nav>
      <ul className={'menu ' + (menuActive ? 'active' : '')}>
        <li className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </li>
        {loggedIn &&
          <>
            {/* <li className="item"><Link to="/">NowPlaying</Link></li> */}
            <li className="item"><span onClick={logout}>Logout</span></li>
            <li className="toggle"><span onClick={toggleMenu}><FontAwesomeIcon icon={menuActive ? faTimes : faBars} /></span></li>
          </>
        }
      </ul>
    </nav>
  );
}

export default Header;
