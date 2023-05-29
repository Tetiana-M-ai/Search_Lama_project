import React from 'react';
import Logo from './img/Lama_logo.png';
import './style.css';

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
        <button>Přihlásit se</button>
        <button>Registrovat se</button>
      </div>
    </div>
  </header>
);
