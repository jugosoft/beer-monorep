import React, { useContext } from 'react';
import { NavLink, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const logoutHandler = event => {
    event.preventDefault();
    auth.logout();
    navigate('/');
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Beer App</span>
        {
          !!auth.token &&
          <ul className="right hide-on-med-and-down">


            <li><NavLink to="/beeradd">Craft Beer</NavLink></li>
            <li><NavLink to="/links">Links</NavLink></li>
            <li><NavLink to="/info">Info</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Logout</a></li>
          </ul>
        }
      </div>
    </nav>
  )
}

export default NavBar;