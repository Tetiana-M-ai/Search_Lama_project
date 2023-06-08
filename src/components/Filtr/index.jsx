import React, { useState } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { FilterListToggle } from './buttonToggle/index';

export const Filter = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container_form">
      <h2 className="form_title">Rozšířený filtr</h2>
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FilterListToggle />
          <div>
            <p>Typ nemovitosti</p>
            <div className="form_section">
              <select
                className="form_input"
                type="text"
                {...register('nemovitost')}
              >
                <option value="" selected disabled hidden>
                  -- Vyberte položku --
                </option>
                <option>Byt</option>
                <option>Dům</option>
                <option>Pozemek</option>
                <option>Garaž</option>
              </select>
            </div>
          </div>

          <div>
            <p>Localita</p>
            <div className="form_section">
              <select className="form_input" type="text" {...register('town')}>
                <option selected disabled hidden>
                  -- Vyberte město --
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <select
                className="form_input"
                type="text"
                {...register('street')}
              >
                <option selected disabled hidden>
                  -- Vyberte ulici --
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>

          <div>
            <p>Dispozice</p>
            <div className="form_radio">
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="1+kk"
                />
                <p>1 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="1+1"
                />
                <p>1 + 1</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="2+kk"
                />
                <p>2 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="2+1"
                />
                <p>2 + 1</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="3+kk"
                />
                <p>3 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="3+1"
                />
                <p>3 + 1</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="4+kk"
                />
                <p>4 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="4+1"
                />
                <p>4 + 1</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="5+kk"
                />
                <p>5 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  {...register('disposition', { required: true })}
                  value="Ostatni"
                />
                <p>Ostatní</p>
              </div>
            </div>
          </div>

          <div>
            <p>Stav</p>
            <div className="form_section">
              <select className="form_input" type="text" {...register('state')}>
                <option value="" selected disabled hidden>
                  -- Vyberte položku --
                </option>
                <option>Dobrý</option>
                <option>Špatný</option>
                <option>K demolici</option>
                <option>Novostavba</option>
              </select>
            </div>
          </div>

          <div>
            <p>Cena</p>
            <div className="form_section">
              <select
                className="form_input"
                type="text"
                {...register('price_from')}
              >
                <option selected disabled hidden>
                  -- Vyberte --
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <select
                className="form_input"
                type="text"
                {...register('price_to')}
              >
                <option selected disabled hidden>
                  -- Vyberte --
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>

          <div>
            <p>Stavba</p>
            <div className="form_section">
              <select
                className="form_input"
                type="text"
                {...register('building')}
              >
                <option value="" selected disabled hidden>
                  -- Vyberte položku --
                </option>
                <option>Panel</option>
                <option>Cihla</option>
                <option>Dřevo</option>
                <option>Ostatní</option>
              </select>
            </div>
          </div>

          <div>
            <p>Užitná plocha </p>
            <div className="form_section">
              <select
                className="form_input"
                type="text"
                {...register('area_from')}
              >
                <option selected disabled hidden>
                  -- Vyberte --
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <select
                className="form_input"
                type="text"
                {...register('area_to')}
              >
                <option selected disabled hidden>
                  -- Vyberte --
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>

          <div>
            <p>Plocha pozemky</p>
            <div className="form_section">
              <select
                className="form_input"
                type="text"
                {...register('land_area_from')}
              >
                <option selected disabled hidden>
                  -- Vyberte --
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <select
                className="form_input"
                type="text"
                {...register('land_area_to')}
              >
                <option selected disabled hidden>
                  -- Vyberte --
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>

          <div className="test">
            <div>
              <p>Vlastnictví</p>
              <div className="form_section">
                <select
                  className="form_input"
                  type="text"
                  {...register('property')}
                >
                  <option value="" selected disabled hidden>
                    -- Vyberte položku --
                  </option>
                  <option>Osobní</option>
                  <option>Družstevní</option>
                  <option>Státní/obecní</option>
                </select>
              </div>
            </div>

            <div>
              <p>Energetický štítek</p>
              <div className="form_section">
                <select
                  className="form_input"
                  type="text"
                  {...register('electricity')}
                >
                  <option value="" selected disabled hidden>
                    -- Vyberte položku --
                  </option>
                  <option>A-Mimořádně úsporná</option>
                  <option>B-Velmi úsporná</option>
                  <option>C-Úsporná</option>
                  <option>D-Méně úsporná</option>
                  <option>E-Nehospodárná</option>
                  <option>F-Velmi nehospodárná</option>
                  <option>G-Mimořádně nehospodárná</option>
                </select>
              </div>
            </div>

            <div>
              <p>Něco navíc</p>
              <div className="form_section">
                <select
                  className="form_input"
                  type="text"
                  {...register('other')}
                >
                  <option value="" selected disabled hidden>
                    -- Vyberte položku --
                  </option>
                  <option>Balkon</option>
                  <option>Lodžie</option>
                  <option>Sklep</option>
                  <option>Terasa</option>
                  <option>Zahrada</option>
                  <option>Výtah</option>
                  <option>Parkování</option>
                </select>
              </div>
            </div>
          </div>

          <div className="button">
            <input
              className="form_btn"
              value="Odeslat"
              type="submit"
              disabled={!isValid}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
