import React from 'react';
import PropTypes from 'prop-types';
import style from './MainTitleBar.module.css';

const MainTitleBar = (props) => {
  const { title } = props;

  return (
    <div className={style.headerContinentDeaths}>
      <h2>{title}</h2>
    </div>
  );
};

MainTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainTitleBar;
