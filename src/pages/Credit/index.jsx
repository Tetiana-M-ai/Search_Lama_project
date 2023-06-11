import React from 'react';
import './style.css';

export const Credit = () => {
  return (
    <div className="container_form">
      {/* <form
        action="https://buy.stripe.com/test_6oEdSxf9f62U1vGaEE"
        method="get"
      >
        <button name="pay" type="submit">
          Zaplatit
        </button>
      </form> */}
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>

      <stripe-buy-button
        buy-button-id="buy_btn_1NHnR0A1C8ScT0zC9YScSe50"
        publishable-key="pk_test_51NHl7rA1C8ScT0zCD5MqvU4vRK95YJZluTSxNlYsFC4K7d8Hoj13XOMq4T2J7kNJ4pmv1dZxiy1TNsalR3YSnSJF00pw7WeHsV"
      ></stripe-buy-button>
    </div>
  );
};
