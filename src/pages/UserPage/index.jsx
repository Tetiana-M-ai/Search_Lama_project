import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { SecondMenu } from '../../components/SecondMenu';
import { Credits } from '../../components/User/Credits';
import { Settings } from '../../components/User/Settings';
import { Offers } from '../../components/User/Offers';
import './style.css';

const Component = {
  Kredity: <Credits />,
  Nastavení: <Settings />,
  Nabídky: <Offers />,
};
export const UserPage = () => {
  const [secondMenuOpened, setSecondMenuOpened] = useState('');

  const { data, secondMenuOpenedLink, setSecondMenuOpenedLink } =
    useContext(UserContext);

  console.log(
    Component[secondMenuOpenedLink],
    'Component[secondMenuOpenedLink]',
    secondMenuOpenedLink,
    'secondMenuOpenedLink',
  );
  return (
    <main>
      <div className="user_wrapper">
        <div className="side_menu">
          <ul>
            <li
              onClick={(event) => {
                setSecondMenuOpened(event.target.innerText);
              }}
            >
              Nemovitosti
              {secondMenuOpened === 'Nemovitosti' && <SecondMenu />}
            </li>
            <li
              onClick={(event) => {
                setSecondMenuOpened(event.target.innerText);
              }}
            >
              Auta
              {secondMenuOpened === 'Auta' && <SecondMenu />}
            </li>
            <li
              onClick={(event) => {
                setSecondMenuOpened(event.target.innerText);
              }}
            >
              Vstupenky
              {secondMenuOpened === 'Vstupenky' && <SecondMenu />}
            </li>
          </ul>
        </div>
        <div className="user_container">
          {secondMenuOpenedLink && Component[secondMenuOpenedLink]}
        </div>
      </div>
    </main>
  );
};
