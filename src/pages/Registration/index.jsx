import React, { useState } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { signUp } from '../../functions/auth.js';
import { NavLink, useNavigate } from 'react-router-dom';

export const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = (data) => {
    signUp(data.email, data.password).then(() => {
      navigate('/user'); // window.location.href = '/';
    });
    reset();
  };

  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  const password = watch('password');

  return (
    <main className="container">
      <div className="container_registration">
        <h2 className="form_title">Registrace</h2>
        <div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form_box">
              <input
                className="form_input"
                type="email"
                {...register('email', {
                  required: '*  Pole je povinné',
                  pattern: {
                    value: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
                    message: '*  E-mailová adresa je neplatná',
                  },
                })}
                placeholder="E-mail"
              />
              <div>
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="form_box">
              <input
                className="form_input"
                name="password"
                type={passwordEye === false ? 'password' : 'text'}
                {...register('password', {
                  required: '*  Pole je povinné',
                  minLength: {
                    value: 8,
                    message: '*  Heslo musí mít více než 8 znaků',
                  },
                })}
                placeholder="Heslo"
              />

              <i className="input_eye">
                {passwordEye === false ? (
                  <AiFillEyeInvisible onClick={handlePasswordClick} />
                ) : (
                  <AiFillEye onClick={handlePasswordClick} />
                )}
              </i>

              <div>
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div className="form_box">
              <input
                className="form_input"
                name="passwordConfirm"
                type={confirmPasswordEye === false ? 'password' : 'text'}
                onPaste={(event) => {
                  event.preventDefault();
                  return false;
                }}
                {...register('passwordConfirm', {
                  required: '*  Pole je povinné',
                  validate: (value) =>
                    value === password || '*  Heslo je nesprávné',
                })}
                placeholder="Heslo pro potvrzení"
              />

              <i className="input_eye">
                {confirmPasswordEye === false ? (
                  <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
                ) : (
                  <AiFillEye onClick={handleConfirmPasswordClick} />
                )}
              </i>

              <div>
                {errors.passwordConfirm && (
                  <p className="error">{errors.passwordConfirm.message}</p>
                )}
              </div>
            </div>

            <div className="form_checkbox">
              <input
                name="checkbox"
                type="checkbox"
                className="form_tick"
                {...register('checkbox', { required: '*  Pole je povinné' })}
                value="Yes"
              />
              <p className="text_checkbox">
                Souhlasím se Zasádami pro ochranu osobních údajů
              </p>
            </div>

            <div className="form_box_btn">
              <input
                className="form_btn"
                value="Registrovat se"
                type="submit"
                disabled={!isValid}
              />
            </div>
          </form>

          <NavLink className="form_link" to={'/authorization'}>
            Už mám učet
          </NavLink>
        </div>
      </div>
    </main>
  );
};
