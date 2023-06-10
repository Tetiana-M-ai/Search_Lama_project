import React, { useContext } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authContexts';

export const MobilHeader = () => {
  const context = useContext(AuthContext);
  console.log(context);

  return (
    <header className="container_mobile_header">
      <NavLink className="menu_link">
        <h2>Uvod</h2>
      </NavLink>
      <NavLink className="menu_link">
        <h2>Jak to funguje?</h2>
      </NavLink>
      <NavLink className="menu_link">
        <h2>Prohlédnout data</h2>
      </NavLink>
      <NavLink className="menu_link">
        <h2>Kontakt</h2>
      </NavLink>
      <NavLink className="btn_header mobile_button" to={'/authorization'}>
        Přihlásit se
      </NavLink>
      <NavLink className="btn_header mobile_button" to={'/registration'}>
        Registrovat se
      </NavLink>
    </header>
  );
};
