import React from 'react';
import { FaBars, FaCog, FaMicrophone } from 'react-icons/fa';
import style from './Navbar.module.css';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render = () => (
    <>
      <header>
        <FaBars className={style.navIcon} />
        <h1>CovidTracker</h1>
        <div className={style.navBarRightSide}>
          <FaMicrophone className={style.navIcon} />
          <FaCog className={style.navIcon} />
        </div>
      </header>
    </>
  );
}
