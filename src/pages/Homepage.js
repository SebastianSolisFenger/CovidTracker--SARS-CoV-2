import React, { useState, useEffect } from 'react';
import Continents from '../components/Continents';
import HeaderCommonWidget from '../components/HeaderCommonWidget';
import MainTitleBar from '../components/MainTitleBar';

const Homepage = () => {
  const [deathData, setDeathData] = useState(null);

  useEffect(() => {
    fetch('https://corona.lmao.ninja/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => setDeathData(data.deaths))
      .catch((err) => setDeathData(err.message));
  }, []);

  return (
    <>
      <HeaderCommonWidget death={deathData} location="world" />
      <MainTitleBar title="Continent Death" />
      <Continents />
    </>
  );
};

export default Homepage;
