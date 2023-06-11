import React, { useEffect, useState } from 'react';
import { getSupabase } from '../../functions/supabase';
import { BsFillCameraFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './style.css';

const fetchData = async () => {
  const client = getSupabase();
  return client.from('realEstate_items').select('*');
};

export const HousesResults = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((response) => {
      console.log({ response });
      setData(response?.data);
    });
  }, []);
  return (
    <main>
      {data?.map((house) => (
        <Link className="house_card" to={house?.URL}>
          <div className="image_wrapper">
            <BsFillCameraFill size="5rem " color="grey" />
          </div>
          <div className="wrapper">
            <p>{house?.action_cz}</p>
            <h3>{house?.property_type_cz}</h3>
          </div>
          <div className="wrapper">
            <h3>{house?.city}</h3>
            <p>{house?.price ? house?.price : house?.price_adddon}</p>
          </div>
        </Link>
      ))}
    </main>
  );
};
