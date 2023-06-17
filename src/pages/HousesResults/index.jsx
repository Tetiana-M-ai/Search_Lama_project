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
      setMessageToUser('Vasim filtrum odpovidaji následující vysledky');
      setData(response);
    });
  }, []);

  useEffect(() => {
    if (!data?.length) {
      setMessageToUser('Vašemu filtru neodpovídají žádné výsledky');
      setData(allHouses);
    }
  }, [data]);

  return (
    <main>
      <div>
        <div className="message">
          {messagetoUser && <h3>{messagetoUser}</h3>}
        </div>

        <div className="cards">
          {data?.map((house) => (
            <Link className="house_card" key={house.ID} to={house?.URL}>
              <div className="image_wrapper">
                <BsFillCameraFill size="5rem " color="darkgray" />
              </div>
              <div className="wrapper">
                <p>{house?.action}</p>
                <h3 className="card_text">{house?.house_type_cz}</h3>
              </div>
              <div className="wrapper">
                <h3 className="card_text">{house?.county}</h3>
                <p>{house?.price ? house?.price : house?.price_adddon}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};
