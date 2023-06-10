import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
export const Home = () => {
  return (
    <main className="page_wrapper">
      <div className="container">
        <NavLink className="card_wrapper" to={'/filtr'}>
          <div className="card">Nemovitosti</div>
        </NavLink>
        <NavLink className="card_wrapper" to={'/cars'}>
          <div className="card">Auta</div>
        </NavLink>
        <NavLink className="card_wrapper" to={'/concerts'}>
          <div className="card">Koncerty</div>
        </NavLink>
      </div>

      <div>
        <h1>Nenechte si ujít příležitost!</h1>
        <p>
          Kolik jste ochotni zaplatit za informaci, která vám ušetří pár stovek
          nebo pár hodin? Co třeba 10 korun?
        </p>
      </div>
    </main>
  );
};
