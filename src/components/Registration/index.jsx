import React, { useState } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { signUp } from '../../functions/auth.js';

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = (data) => {
    signUp(data.email, data.password).then(() => {
      // window.location.href = '/';
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
    <div className="container_form">
      <h2 className="form_title">Registrace</h2>
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form_box">
            <input
              className="form_input"
              type="email"
              {...register('email', { required: '*  Pole je povinné' })}
              placeholder="E-mail"
            />
            <div style={{ height: 20 }}>
              {errors?.email && (
                <p className="error">{errors?.email?.message || 'Error!'}</p>
              )}
            </div>
          </div>

          <div className="form_box">
            <input
              className="form_input"
              name="password"
              type={passwordEye === false ? 'password' : 'text'}
              {...register('password', {
                required: true,
                minLength: {
                  value: 8,
                  message: '*  Heslo musí mít více než 8 znaků',
                },
              })}
              placeholder="Heslo"
            />

            {passwordEye === false ? (
              <AiFillEyeInvisible onClick={handlePasswordClick} />
            ) : (
              <AiFillEye onClick={handlePasswordClick} />
            )}

            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
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

            {confirmPasswordEye === false ? (
              <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
            ) : (
              <AiFillEye onClick={handleConfirmPasswordClick} />
            )}

            {errors.passwordConfirm && (
              <p className="error">{errors.passwordConfirm.message}</p>
            )}
          </div>

          <div className="form_checkbox">
            <input
              name="checkbox"
              type="checkbox"
              className="form_tick"
              {...register('checkbox', { required: true })}
              value="Yes"
            />
            <p className="text_checkbox">
              Souhlasím se Zasádami pro ochranu osobních údajů
            </p>
          </div>

          <div className="form_box">
            <input
              className="form_input"
              value="Registrovat se"
              type="submit"
              disabled={!isValid}
            />
          </div>
        </form>

        <a className="form_link" href="">
          Už mám učet
        </a>
      </div>
    </div>
  );
};
