import React from 'react';
import { FaBars, FaRegSun } from 'react-icons/fa';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <header>
        <FaBars className={style.navIcon} />
        <h1>Covid Tracker-SARS-2</h1>
        <div className={style.navBarRightSide}>
          <FaRegSun className={style.navIcon} />
        </div>
      </header>
    </>
  );
}
