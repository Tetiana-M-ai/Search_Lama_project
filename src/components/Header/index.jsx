import React from 'react';
import Logo from './img/Lama_logo.png';
import './style.css';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <header>
    <div className="container_header">
      <div className="logo">
        <img src={Logo} alt="" />
        <h1 className="title_logo">Hlídací Lama</h1>
      </div>
      <div className="menu">
        <h2 className="menu_items">Uvod</h2>
        <h2 className="menu_items">Jak to funguje?</h2>
        <h2 className="menu_items">Prohlédnout data</h2>
        <h2 className="menu_items">Kontakt</h2>
      </div>
      <div className="button_header">
        <NavLink className="btn_header" to={'/authorization'}>
          Přihlásit se
        </NavLink>
        <NavLink className="btn_header" to={'/registration'}>
          Registrovat se
        </NavLink>
      </div>
    </div>
  </header>
);
