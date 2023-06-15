import React, { useContext } from 'react';
import './style.css';
import { UserContext } from '../../contexts/userContext';
import { NavLink } from 'react-router-dom';

export const SecondMenu = () => {
  const { setSecondMenuOpenedLink } = useContext(UserContext);

  return (
    <section>
      <ul className="second_menu">
        <li
          onClick={(event) => {
            setSecondMenuOpenedLink &&
              setSecondMenuOpenedLink(event.target.innerText);
          }}
        >
          Kredity
        </li>
        <li
          onClick={(event) => {
            setSecondMenuOpenedLink &&
              setSecondMenuOpenedLink(event.target.innerText);
          }}
        >
          Nastavení
        </li>
        <NavLink to={'/filtr'}>
          <li
            onClick={(event) => {
              setSecondMenuOpenedLink &&
                setSecondMenuOpenedLink(event.target.innerText);
            }}
          >
            Nabídky
          </li>
        </NavLink>
      </ul>
    </section>
  );
};
