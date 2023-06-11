import React, { useState, useEffect } from 'react';
import { getSupabase } from './../functions/supabase';

export const UserContext = React.createContext(null);

const fetchData = async (supabaseTable) => {
  const client = getSupabase();
  const { data } = await client?.auth?.getUser();
  console.log(data);
  return client.from(supabaseTable).select('*').eq('email', data?.user?.email);
};

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [credits, setCredits] = useState(null);
  const [user, setUser] = useState(null);

  const [secondMenuOpenedLink, setSecondMenuOpenedLink] = useState('');

  useEffect(() => {
    fetchData('filters').then((response) => {
      console.log({ response });
      setData(response?.data);
    });
    fetchData('credits').then((response) => {
      console.log({ response });
      setCredits(response?.data);
    });
  }, []);

  useEffect(() => {
    const client = getSupabase();

    client.auth.getUser().then((response) => {
      setUser(response?.data?.user);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        data,
        user,
        secondMenuOpenedLink,
        credits,
        setSecondMenuOpenedLink,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
