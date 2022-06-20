import React from 'react';
import propTypes from 'prop-types';
import style from './ContinentWidget.module.css';

const ContinentWidget = (props) => {
  const { name, deaths } = props;
  return (
    <div className={style.continent}>
      <img
        className={style.continentImage}
        src={`/images/${name}.png`}
        alt="ContinentImage"
      />
      <div className={style.text}>
        <h2>{name}</h2>
        <h3>{deaths}</h3>
      </div>
    </div>
  );
};
ContinentWidget.propTypes = {
  name: propTypes.string.isRequired,
  deaths: propTypes.string.isRequired,
};

export default ContinentWidget;
