import React, { useContext, useEffect, useState } from 'react';
import { getSupabase } from '../../functions/supabase';
import { BsFillCameraFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import { UserContext } from '../../contexts/userContext';

export const loader = async (params) => {
  console.log(params);
  return null;
};

const fetchAll = async () => {
  const client = getSupabase();
  return await client.from('realEstate_items').select('*');
};

export const HousesResults = () => {
  const { fetchDataFilteredHouses, allHouses } = useContext(UserContext);
  const [data, setData] = useState();
  const [messagetoUser, setMessageToUser] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetchDataFilteredHouses(location.state).then((response) => {
      setData(response);
    });
  }, []);

  useEffect(() => {
    if (!data?.length) {
      setMessageToUser('Vasim filtrum neodpovidaji zadne vysledky');
      setData(allHouses);
    }
  }, [data]);

  return (
    <main>
      {messagetoUser && <h3>{messagetoUser}</h3>}
      {data?.map((house) => (
        <Link className="house_card" key={house.ID} to={house?.URL}>
          <div className="image_wrapper">
            <BsFillCameraFill size="5rem " color="grey" />
          </div>
          <div className="wrapper">
            <p>{house?.action}</p>
            <h3>{house?.house_type_cz}</h3>
          </div>
          <div className="wrapper">
            <h3>{house?.county}</h3>
            <p>{house?.price ? house?.price : house?.price_adddon}</p>
          </div>
        </Link>
      ))}
    </main>
  );
};
