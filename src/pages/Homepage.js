import React, { useState, useEffect } from 'react';
import Continents from '../components/ContinentsComponents/Continents';
import HeaderCommonWidget from '../components/HeaderWidget/HeaderCommonWidget';
import MainTitleBar from '../components/TitleWidgetBar/MainTitleBar';
import Navbar from '../components/NavBarComponent/Navbar';

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
      <Navbar />
      <HeaderCommonWidget death={deathData} location="world" />
      <MainTitleBar title="Continent Death" />
      <Continents />
    </>
  );
};

export default Homepage;
