/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loading-icons';
import style from './WorldDeathWidget.module.css';

const URLDWDEATH = 'https://disease.sh/v3/covid-19/all';

const WorldDeathWidget = () => {
  const [deathData, setDeathData] = useState(null);

  useEffect(() => {
    fetch(URLDWDEATH)
      .then((response) => response.json())
      .then((data) => setDeathData(data.deaths))
      .catch((err) => setDeathData(err.message));
  }, []);

  return (
    <div className={style.worldContainerStats}>
      <div className={style.imgWorldContainer}>
        <img
          src="images/World.png"
          alt="world map"
          className={style.worldImgStats}
        />
      </div>

      <div className={style.worldInfoStats}>
        <h3>World widget</h3>
        {deathData ? (
          <h4>{`${deathData}`}</h4>
        ) : (
          <h4>
            <ThreeDots className={style.ThreeDots} />
          </h4>
        )}
      </div>
    </div>
  );
};

export default WorldDeathWidget;
