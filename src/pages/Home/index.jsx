import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/Lama_logo.png';

export const Home = () => {
  return (
    <main className="page_wrapper">
      <div className="section_teaser">
        <div></div>
        <div>
          <h1>Nenechte si ujít příležitost!</h1>
          <p>
            Kolik jste ochotni zaplatit za informaci, která vám ušetří pár
            stovek nebo pár hodin? Co třeba 10 korun?
          </p>
        </div>
      </div>
      <div id="how-works" className="section">
        <h1 className="heading">JAK TO FUNGUJE?</h1>
        <div className="all_items">
          <div>
            <img className="logo_page" src={Logo} alt="" />
          </div>
          <div className="item">
            <div className="text">
              <div>
                <h1 className="title_item">1</h1>
              </div>
              <div className="text_content">
                <h2 className="small_title_item">Zaregistrujte se</h2>
                <p>
                  Aby pro Vás Lama dolázala pracovat, musíte si zalžit účet.
                </p>
              </div>
            </div>
            <div className="text">
              <div>
                <h1 className="title_item">2</h1>
              </div>
              <div>
                <h2 className="small_title_item">Nabijte si svůj účet</h2>
                <p>
                  Aby pro Vás Lama dolázala pracovat, musíte si zalžit účet.
                </p>
              </div>
            </div>
            <div className="text">
              <div>
                <h1 className="title_item">3</h1>
              </div>
              <div>
                <h2 className="small_title_item">Nastavte si svoji Lamu</h2>
                <p>
                  Aby pro Vás Lama dolázala pracovat, musíte si zalžit účet.
                </p>
              </div>
            </div>
            <div className="text">
              <div>
                <h1 className="title_item">4</h1>
              </div>
              <div>
                <h2 className="small_title_item">Vyčkejte na výsledek</h2>
                <p>
                  Aby pro Vás Lama dolázala pracovat, musíte si zalžit účet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>PROHLÉDNĚTE SI DATA</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste rerum
          facere earum dicta animi suscipit? Aliquid perferendis consectetur
          velit amet sunt placeat hic ea quisquam, architecto ad id cum ut.
        </p>
      </div>
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
    </main>
  );
};
