import './style.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FilterListToggle } from './buttonToggle/index';
import { addRealEstateItems } from '../../functions/db.js';
import { useNavigate } from 'react-router-dom';

export const Filter = () => {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data) => {
    console.log(data);
    await addRealEstateItems(data);
    reset();
    navigate('/houses-results');
  };

  return (
    <div className="container_form">
      <h2 className="form_title">Rozšířený filtr</h2>
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FilterListToggle control={control} />
          <div>
            <p>Typ nemovitosti</p>
            <div className="form_section">
              <select
                className="form_input"
                type="text"
                {...register('nemovitost')}
              >
                {/* <option value="" selected disabled hidden>
                  -- Vyberte položku --
                </option> */}
                <option>byt</option>
                <option>dům</option>
                <option>pozemek</option>
                <option>garaž</option>
              </select>
            </div>
          </div>

          <div>
            <p>Localita</p>
            <div className="form_section">
              <select className="form_input" type="text" {...register('town')}>
                <option>Brno</option>
                <option>Břeclav</option>
                <option>Hodonín</option>
                <option>Holubice</option>
                <option>Kuřim</option>
                <option>Louny</option>
                <option>Šlapanice</option>
                <option>Modřice</option>
                <option>Pohořelice</option>
                <option>Česká</option>
                <option>Moravský Písek</option>
                <option>Mouřínov</option>
                <option>Troubsko</option>
                <option>Moravany</option>
                <option>Těmice</option>
                <option>Lhotka</option>
                <option>Lelekovice</option>
                <option>Prostějovičky</option>
              </select>

              <select
                className="form_input"
                type="text"
                {...register('street')}
              >
                <option>Berkova</option>
                <option>Černovické nábřeží</option>
                <option>Černovičky</option>
                <option>Brno-Brno-jih</option>
                <option>Pod Borovníkem</option>
                <option>Durďákova</option>
                <option>Bayerova</option>
                <option>Nové sady</option>
                <option>Jakubská</option>
                <option>Preslova</option>
                <option>Cejl</option>
                <option>Nad Dědinou</option>
                <option>Komenského</option>
                <option>Brněnská</option>
                <option>Chrlická</option>
                <option>Sportovní</option>
                <option>Antonína Slavíka</option>
                <option>Hybešova</option>
                <option>Milady Horákové</option>
                <option>Heršpická</option>
                <option>Lazaretní</option>
                <option>Klobouček</option>
                <option>Purkyňova</option>
                <option>Smetanova</option>
                <option>Špitálka</option>
                <option>Jasanová</option>
                <option>Neumannova</option>
                <option>Světlá</option>
                <option>Polní</option>
                <option>třída Kpt. Jaroše</option>
                <option>Orlí</option>
                <option>Kaštanová</option>
                <option>Trnitá</option>
                <option>Plucárna</option>
                <option>Jánská</option>
                <option>Palackého třída</option>
                <option>Chopinova</option>
                <option>Hlinky</option>
                <option>Fanderlíkova</option>
                <option>Moskalykova</option>
                <option>Mučednická</option>
                <option>Arbesova</option>
                <option>Jana Uhra</option>
                <option>Veveří</option>
              </select>
            </div>
          </div>

          <div>
            <p>Dispozice</p>
            <div className="form_radio">
              <div className="radio">
                <input
                  type="checkbox"
                  {...register('disposition', { required: true })}
                  value="1+kk"
                />
                <p>1 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="checkbox"
                  {...register('disposition', { required: true })}
                  value="1+1"
                />
                <p>1 + 1</p>
              </div>
              <div className="radio">
                <input
                  type="checkbox"
                  {...register('disposition', { required: true })}
                  value="2+kk"
                />
                <p>2 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="checkbox"
                  {...register('disposition', { required: true })}
                  value="2+1"
                />
                <p>2 + 1</p>
              </div>
              <div className="radio">
                <input
                  type="checkbox"
                  {...register('disposition', { required: true })}
                  value="3+kk"
                />
                <p>3 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="checkbox"
                  {...register('disposition', { required: true })}
                  value="3+1"
                />
                <p>3 + 1</p>
              </div>
              <div className="radio">
                <input
                  type="checkbox"
                  {...register('disposition', { required: true })}
                  value="4+kk"
                />
                <p>4 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="checkbox"
                  {...register('disposition', { required: true })}
                  value="4+1"
                />
                <p>4 + 1</p>
              </div>
              <div className="radio">
                <input
                  type="checkbox"
                  {...register('disposition', { required: true })}
                  value="5+kk"
                />
                <p>5 + kk</p>
              </div>
              <div className="radio">
                <input
                  type="checkbox"
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
<<<<<<< HEAD:src/components/Filtr/index.jsx
              <select className="form_input" type="text" {...register('state')}>
                <option>novostavba</option>
                <option>po rekonstrukci</option>
                <option>ve výstavbě</option>
                <option>velmi dobrý</option>
                <option>dobrý</option>
=======
              <select
                value=""
                className="form_input"
                type="text"
                {...register('state')}
              >
                <option selected disabled hidden>
                  -- Vyberte položku --
                </option>
                <option>Dobrý</option>
                <option>Špatný</option>
                <option>K demolici</option>
                <option>Novostavba</option>
>>>>>>> eb3992035db40cb4f1c9097e1728ddf52e4a8bb8:src/pages/Filtr/index.jsx
              </select>
            </div>
          </div>

          <div>
            <p>Cena</p>
            <div className="form_section">
              <input
                className="form_input"
                type="number"
                {...register('price_from')}
              />

              <input
                className="form_input"
                type="number"
                {...register('price_to')}
              />
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
                <option>smíšená</option>
                <option>cihlová</option>
                <option>panelová</option>
                <option>montovaná</option>
                <option>skeletová</option>
              </select>
            </div>
          </div>

          <div>
            <p>Užitná plocha </p>
            <div className="form_section">
              <input
                className="form_input"
                type="number"
                {...register('area_from')}
              />

              <input
                className="form_input"
                type="number"
                {...register('area_to')}
              />
            </div>
          </div>

          <div>
            <p>Plocha pozemky</p>
            <div className="form_section">
              <input
                className="form_input"
                type="number"
                {...register('land_area_from')}
              />

              <input
                className="form_input"
                type="number"
                {...register('land_area_to')}
              />
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
                  <option>osobní</option>
                  <option>družstevní</option>
                  <option>státní/obecní</option>
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
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                  <option>E</option>
                  <option>F</option>
                  <option>G</option>
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
                  <option>balkony</option>
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
