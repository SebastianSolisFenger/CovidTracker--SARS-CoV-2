import React from 'react';
import Continents from '../components/Continents';
import WorldDeathWidget from '../components/WorldDeathWidget';
import style from './Homepage.module.css';

const Homepage = () => (
  <>
    <WorldDeathWidget />
    <div className={style.headerContinentDeaths}>
      <h2>Continent Deaths</h2>
    </div>
    <Continents />
  </>
);

export default Homepage;
