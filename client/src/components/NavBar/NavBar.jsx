import React, { useContext, useEffect } from 'react';
import { NavLink, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const authenticated = !!auth.token;
  useEffect(() => {
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

  const logoutHandler = event => {
    event.preventDefault();
    auth.logout();
    navigate('/');
  }

  return (
    <>
      <nav className="red">
        <div className="nav-wrapper">
          <a href="#" class="brand-logo"><NavLink to="/links">Beer App</NavLink></a>

          <a href="#" className="sidenav-trigger" data-target="mobile-nav">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            {authenticated
              ?
              <>
                <li><NavLink to="/beeradd">Craft Beer</NavLink></li>
                <li><NavLink to="/links">Links</NavLink></li>
                <li><NavLink to="/info">Info</NavLink></li>
                <li><NavLink to="/blogsview">Blogs</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Logout</a></li>
              </>
              :
              <li><NavLink to="/auth">auth</NavLink></li>
            }
          </ul>
        </div>
      </nav>


      <ul className="sidenav" id="mobile-nav">
        {authenticated
          ?
          <>
            <li><NavLink to="/beeradd">Craft Beer</NavLink></li>
            <li><NavLink to="/links">Links</NavLink></li>
            <li><NavLink to="/info">Info</NavLink></li>
            <li><NavLink to="/blogsview">Blogs</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Logout</a></li>
          </>
          :
          <li><NavLink to="/auth">auth</NavLink></li>
        }
      </ul>
    </>
  )
}

export default NavBar;