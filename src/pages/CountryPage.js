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
            <div className={style.countryFlagAndNameContainer}>
              <img
                src={countryDetails.countryInfo.flag}
                className={style.countryFlagImg}
                alt={countryDetails.country}
              />
              <h2 className={style.titleCountry}>{countryDetails.country}</h2>
            </div>
          </div>
          <div>
            <div className={style.infoCountryListing}>
              <h3>Population:</h3>
              <h3>{countryDetails.population}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>Cases Detected:</h3>
              <h3>{countryDetails.cases}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>Cases recovered:</h3>
              <h3>{countryDetails.recovered}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>Cases active:</h3>
              <h3>{countryDetails.active}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>Cases critical:</h3>
              <h3>{countryDetails.critical}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>Cases tests:</h3>
              <h3>{countryDetails.tests}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>OneTestPerPeople:</h3>
              <h3>{countryDetails.oneTestPerPeople}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>TestsPerOneMillion:</h3>
              <h3>{countryDetails.testsPerOneMillion}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>OneDeathPerPeoples:</h3>
              <h3>{countryDetails.oneDeathPerPeople}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>OneCasePerPeople:</h3>
              <h3>{countryDetails.oneCasePerPeople}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>ActivePerOneMillion:</h3>
              <h3>{countryDetails.activePerOneMillion}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>CriticalPerOneMillion:</h3>
              <h3>{countryDetails.criticalPerOneMillion}</h3>
            </div>
            <div className={style.infoCountryListing}>
              <h3>RecoveredPerOneMillion:</h3>
              <h3>{countryDetails.recoveredPerOneMillion}</h3>
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
