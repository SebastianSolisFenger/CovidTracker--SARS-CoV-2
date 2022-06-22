import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderCommonWidget from '../components/HeaderWidget/HeaderCommonWidget';
import MainTitleBar from '../components/TitleWidgetBar/MainTitleBar';
import Countries from '../components/CountriesComponent/Countries';
import SpecificSubPageNavbar from '../components/SpecificSubPageNavbar/SpecificSubPageNavbar';

// const URLDWDEATH = '`https://disease.sh/v3/covid-19/continents/${continent}``';

const ContinentPage = () => {
  const { continent } = useParams();
  const [deathData, setDeathData] = useState(null);

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v3/covid-19/continents/${continent}`)
      .then((response) => response.json())
      .then((data) => setDeathData(data.deaths))
      .catch((err) => setDeathData(err.message));
  }, []);

  return (
    <>
      <SpecificSubPageNavbar />
      <HeaderCommonWidget location={continent} death={deathData} />
      <MainTitleBar title="Deaths by country" />
      <Countries location={continent} />
    </>
  );
};

export default ContinentPage;
