import React, { useState, useEffect } from 'react';
import { getSupabase } from './../functions/supabase';

export const UserContext = React.createContext(null);

const client = getSupabase();

const fetchDataFromUser = async (supabaseTable) => {
  const { data } = await client?.auth?.getUser();
  return client.from(supabaseTable).select('*').eq('email', data?.user?.email);
};

const fetchDataAllHouses = async () => {
  return client.from('realEstate_items').select('*');
};

const fetchDataAllCredits = async () => {
  return client.from('credits').select('*');
};

export const UserProvider = ({ children }) => {
  const [allHouses, setAllHouses] = useState(null);
  const [userFilters, setUserFilter] = useState({});
  const [credits, setCredits] = useState(null);
  const [user, setUser] = useState(null);

  const [secondMenuOpenedLink, setSecondMenuOpenedLink] = useState('');

  useEffect(() => {
    fetchDataFromUser('credits').then((response) => {
      console.log({ response }, 'credits');
      setCredits(response?.data);
    });
    fetchDataFromUser('filters').then((response) => {
      console.log({ response }, 'filters');
      setUserFilter(response?.data);
    });
    fetchDataAllHouses().then((response) => {
      console.log({ response }, 'houses context');
      setAllHouses(response?.data);
    });
  }, []);

  useEffect(() => {
    const client = getSupabase();

    client.auth.getUser().then((response) => {
      setUser(response?.data?.user);
    });
  }, []);

  const fetchDataFilteredHouses = async (record) => {
    const client = getSupabase();
    let query = client
      .from('realEstate_items')
      .select('*')
      .eq('nemovitost', record?.nemovitost)

      .eq('town', record?.town)
      .like('street', `%${record?.street}%`)
      .eq('building', record?.building);

    if (record?.type) {
      query = query.eq('action', record?.type);
    }

    if (record?.disposition?.length > 0) {
      query = query.filter(
        'disposition',
        'in',
        '("' + (record?.disposition || [])?.join('","') + '")',
      );
    }

    if (record?.other === 'balcony') {
      query = query.not('balcony', 'is', null);
    }

    if (record?.other === 'loggiea') {
      query = query.not('loggiea', 'is', null);
    }

    if (record?.other === 'terrace') {
      query = query.not('terrace', 'is', null);
    }

    const { data } = await query;
    return data;
  };

  return (
    <UserContext.Provider
      value={{
        allHouses,
        user,
        secondMenuOpenedLink,
        credits,
        setSecondMenuOpenedLink,
        fetchDataFilteredHouses,
        userFilters,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
