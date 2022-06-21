/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificSubPageNavbar from '../components/SpecificSubPageNavbar/SpecificSubPageNavbar';
import style from './CountryPage.module.css';

const CountryPage = () => {
  const { country } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${country}`)
      .then((response) => response.json())
      .then((data) => setCountryDetails(data));
  });

  return (
    <>
      <SpecificSubPageNavbar />
      {countryDetails ? (
        <>
          <div className={style.countryHeaderCont}>
            <div>
              <img src={countryDetails.countryInfo.flag} alt="" />
              <h2>{countryDetails.country}</h2>
            </div>
          </div>
          <div>
            <div>
              <h3>Population:</h3>
              <h3>{countryDetails.population}</h3>
            </div>
            <div>
              <h3>Cases Detected:</h3>
              <h3>{countryDetails.cases}</h3>
            </div>
            <div>
              <h3>Cases recovered:</h3>
              <h3>{countryDetails.recovered}</h3>
            </div>
            <div>
              <h3>Cases active:</h3>
              <h3>{countryDetails.active}</h3>
            </div>
            <div>
              <h3>Cases critical:</h3>
              <h3>{countryDetails.critical}</h3>
            </div>
            <div>
              <h3>Cases tests:</h3>
              <h3>{countryDetails.tests}</h3>
            </div>
          </div>
        </>
      ) : (
        <h2>..loading</h2>
      )}
    </>
  );
};

export default CountryPage;
