import React from 'react';
import './style.css';

export const Credits = () => {
  return (
    <div className="container_form">
      <form
        action="https://buy.stripe.com/test_6oEdSxf9f62U1vGaEE"
        method="get"
      >
        <button name="pay" type="submit">
          Zaplatit
        </button>
      </form>
    </div>
  );
};
