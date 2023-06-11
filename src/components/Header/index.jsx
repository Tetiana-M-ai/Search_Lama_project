import React, { useContext, useEffect, useState } from 'react';
import Logo from './img/Lama_logo.png';
import './style.css';
import { NavLink, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MobilHeader } from './MobilHeader';
import { CgClose } from 'react-icons/cg';
import { UserContext } from '../../contexts/userContext';
import { FaUserCircle } from 'react-icons/fa';

export const Header = () => {
  const [mobilMenuOpened, setMobilMenuOpened] = useState(false);
  const { user } = useContext(UserContext);
  const location = useLocation();

  return (
    <header className="header_wrapper">
      <div className="container_header">
        <NavLink className="logo_wrapper" to="/">
          <div className="logo">
            <img src={Logo} alt="" />
            <h1 className="title_logo">Hlídací Lama</h1>
          </div>
        </NavLink>
        <div className="desktop_header">
          {location?.pathname === '/' ? (
            <div className="menu">
              <h2 className="menu_items">Uvod</h2>
              <a href="#how-works">
                <h2 className="menu_items">Jak to funguje?</h2>
              </a>
              <h2 className="menu_items">Prohlédnout data</h2>
              <h2 className="menu_items">Kontakt</h2>
            </div>
          ) : (
            <></>
          )}
          {user?.lenght > 0 ? (
            <div className="button_header">
              <NavLink className="btn_header" to={'/authorization'}>
                Přihlásit se
              </NavLink>
              <NavLink className="btn_header" to={'/registration'}>
                Registrovat se
              </NavLink>
            </div>
          ) : (
            <NavLink className="" to={'/user'}>
              <FaUserCircle />
            </NavLink>
          )}
        </div>
        <div className="burger">
          {mobilMenuOpened ? (
            <CgClose
              onClick={() => setMobilMenuOpened(!mobilMenuOpened)}
              size="2rem"
              color="yellow"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setMobilMenuOpened(!mobilMenuOpened)}
              size="2rem"
            />
          )}
        </div>
        {mobilMenuOpened && <MobilHeader />}
      </div>
    </header>
  );
};
