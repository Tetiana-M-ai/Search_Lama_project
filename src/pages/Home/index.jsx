import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/Lama_logo.png';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

export const Home = () => {
  return (
    <main className="page_wrapper">
      <div id="link_one" className="section_teaser">
        <div className="teaser">
          <div className="title_teaser">
            <h1>Nenechte si ujít příležitost!</h1>
          </div>
          <div>
            <p>
              Kolik jste ochotni zaplatit za informaci, která vám ušetří pár
              stovek nebo pár hodin? Co třeba 10 korun?
            </p>
          </div>
          <div>
            <NavLink className="btn_teaser" to={'/registration'}>
              Registrovat se
            </NavLink>
          </div>
        </div>
      </div>

      <div id="link_two" className="section">
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
                <p>Po zalození je třeba dobít kredit, aby Lama pracovala.</p>
              </div>
            </div>
            <div className="text">
              <div>
                <h1 className="title_item">3</h1>
              </div>
              <div>
                <h2 className="small_title_item">Nastavte si svoji Lamu</h2>
                <p>
                  Aby Lama věděla po čem se Vám ma koukat, je třeba jí nastavit
                  parametry.
                </p>
              </div>
            </div>
            <div className="text">
              <div>
                <h1 className="title_item">4</h1>
              </div>
              <div>
                <h2 className="small_title_item">Vyčkejte na výsledek</h2>
                <p>Až Vám Lama něco najde, tak Vám pošle e-mail.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="link_three" className="section_two">
        <h1 className="heading">PROHLÉDNĚTE SI DATA</h1>
        <div>
          <p>
            Podívejte se blizší detail našeho klienta a přidejte se k nám, stačí
            se registrovat!
          </p>
        </div>
        <div className="container_link">
          <NavLink className="card_wrapper" to={'/authorization'}>
            <div className="card">
              <p>Nemovitosti</p>
            </div>
          </NavLink>
          <NavLink className="card_wrapper" to={'/authorization'}>
            <div className="card">
              <p>Auta</p>
            </div>
          </NavLink>
          <NavLink className="card_wrapper" to={'/authorization'}>
            <div className="card">
              <p>Koncerty</p>
            </div>
          </NavLink>
        </div>
      </div>

      <div id="link_four" className="section_two">
        <h1 className="heading">KONTAKTUJTE NÁS</h1>
        <div className="contact">
          <div></div>
          <div className="contact_content">
            <div className="contact_item">
              <MdEmail />
              <p>info@hlidacilama.cz</p>
            </div>
            <div className="contact_item">
              <BsFillTelephoneFill />
              <p>605 466 170</p>
            </div>
            <div className="contact_text">
              <div>
                <h2>Kontakní formulář</h2>
              </div>
              <div>
                <p>Něco co by Vás zajímalo?</p>
              </div>
              <div>
                <p>
                  Neváhejte nás kontaktovat formulářem níže, nebo nám zavolejte!
                </p>
              </div>
            </div>
            <form>
              <div className="contact_box">
                <div>
                  <input
                    className="form_input"
                    type="name"
                    placeholder="Jméno a Příjmeni"
                  />
                </div>
                <div>
                  <input
                    className="form_input"
                    type="email"
                    placeholder="E-mail"
                  />
                </div>
                <div>
                  <input
                    className="form_input"
                    type="comment"
                    placeholder="Váše zpráva..."
                  />
                </div>
                <div className="contact_checkbox">
                  <input type="checkbox" placeholder="Váše zpráva..." />
                  <p className="text_checkbox">GDPR checkbox</p>
                </div>
                <div className="form_box_btn">
                  <input className="form_btn" value="Odeslat" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
