import React from 'react';
import { FaAngleLeft, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import style from './SpecificCountriesNavbar.module.css';

const SpecificCountriesNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className={style.header}>
        <FaAngleLeft
          className={style.navIconNew}
          onClick={() => navigate(-1)}
        />
        <h1>Covid Tracker-SARS-2</h1>
        <div className={style.navBarRightSideNew}>
          <FaCog className={style.navIconNew} />
        </div>
      </header>
    </>
  );
};

export default SpecificCountriesNavbar;
