import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/userContext';
import { FaUserCircle } from 'react-icons/fa';
import { RxExit } from 'react-icons/rx';
import { getSupabase } from '../../../functions/supabase';
import { signOut } from '../../../functions/auth';

export const MobilHeader = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const supabase = getSupabase();
  const [session, setSession] = useState(null);
  const navigate = useNavigate();
  // console.log(context);

  useEffect(() => {
    const supabase = getSupabase();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          setSession(session);
        }
        if (event === 'SIGNED_OUT') {
          setSession(null);
        }
      },
    );
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const onSubmit = () => {
    signOut().then(() => {
      navigate('/');
    });
  };

  return (
    <header className="container_mobile_header">
      {!session ? (
        <>
          <NavLink className="btn_header mobile_button" to={'/authorization'}>
            Přihlásit se
          </NavLink>
          <NavLink className="btn_header mobile_button" to={'/registration'}>
            Registrovat se
          </NavLink>
        </>
      ) : (
        <div>
          <NavLink className="" to="/user">
            <FaUserCircle className="user_icon" />
          </NavLink>
          <NavLink to="/" onClick={onSubmit}>
            <RxExit className="user_icon" />
          </NavLink>
        </div>
      )}
    </header>
  );
};
