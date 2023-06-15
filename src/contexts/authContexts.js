import React, { useState, useEffect } from 'react';
import { getSupabase } from './../functions/supabase';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const supabase = getSupabase();

  // useEffect(() => {
  //   const { data } = supabase.auth.onAuthStateChange((event, session) => {
  //     console.log(event, session);
  //   });

  //   return () => {
  //     data?.subscription?.unsubscribe();
  //   };
  // }, []);
  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};
