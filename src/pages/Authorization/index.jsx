import React, { useState } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { signIn } from '../../functions/auth.js';
import { useNavigate } from 'react-router-dom';

export const Authorization = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = (data) => {
    signIn(data.email, data.password).then(() => {
      navigate('/user'); // window.location.href = '/';
    });
    reset();
  };

  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  return (
    <main className="container">
      <div className="container_form">
        <h2 className="form_title">Příhlášení</h2>
        <div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form_box">
              <input
                className="form_input"
                type="email"
                {...register('email', { required: '*  Pole je povinné' })}
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

            <div className="form_box_btn">
              <input
                className="form_btn"
                value="Přihlásít se"
                type="submit"
                disabled={!isValid}
              />
            </div>
          </form>

          <a className="form_link" href="">
            Zapomněl jsem heslo
          </a>

          <a className="form_link" href="">
            Nemám ještě účet
          </a>
        </div>
      </div>
    </main>
  );
};
