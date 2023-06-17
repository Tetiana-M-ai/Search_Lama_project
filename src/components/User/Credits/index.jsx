import React, { useContext, useEffect, useState } from 'react';
import { getSupabase } from '../../../functions/supabase';
import './style.css';
import { UserContext } from '../../../contexts/userContext';
import { useLocation } from 'react-router-dom';

export const loader = async (params) => {
  console.log(params);
  return null;
};

const fetchAll = async () => {
  const client = getSupabase();
  return await client.from('credits').select('*');
};

export const Credits = () => {
  const { fetchDataAllCredits, allCredits } = useContext(UserContext);
  const [data, setData] = useState();

  const location = useLocation();

  useEffect(() => {
    fetchDataAllCredits(location.state).then((response) => {
      setData(response);
    });
  }, []);

  useEffect(() => {
    if (!data?.length) {
      setData(allCredits);
    }
  }, [data]);

  return (
    <div className="container_form">
      <h3>
        Momentálně na účtu máte: {allCredits && allCredits.data[0]?.status}
      </h3>

      <stripe-buy-button
        buy-button-id="buy_btn_1NHnR0A1C8ScT0zC9YScSe50"
        publishable-key="pk_test_51NHl7rA1C8ScT0zCD5MqvU4vRK95YJZluTSxNlYsFC4K7d8Hoj13XOMq4T2J7kNJ4pmv1dZxiy1TNsalR3YSnSJF00pw7WeHsV"
      ></stripe-buy-button>
    </div>
  );
};
