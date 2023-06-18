import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { UserContext } from '../../../contexts/userContext';

export const Credits = () => {
  const { credits } = useContext(UserContext);

  return (
    <div className="container_credit">
      <div className="credit">
        <h3 className="message_result">Momentálně na účtu mate:</h3>
        <div className="result">
          <h3>
            {credits.map((item) => (
              <span key={item.id}>{item.credit}</span>
            ))}
          </h3>
          <h3> CZK</h3>
        </div>
      </div>

      <div>
        <stripe-buy-button
          buy-button-id="buy_btn_1NHnR0A1C8ScT0zC9YScSe50"
          publishable-key="pk_test_51NHl7rA1C8ScT0zCD5MqvU4vRK95YJZluTSxNlYsFC4K7d8Hoj13XOMq4T2J7kNJ4pmv1dZxiy1TNsalR3YSnSJF00pw7WeHsV"
        ></stripe-buy-button>
      </div>
    </div>
  );
};
