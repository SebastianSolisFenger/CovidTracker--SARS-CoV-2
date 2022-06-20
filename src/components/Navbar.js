import React from 'react';
import { FaBars, FaCog, FaMicrophone } from 'react-icons/fa';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render = () => (
    <>
      <header>
        <FaBars className="nav-icon" />
        <h1>CovidTracker</h1>
        <div className="navBar--rightSide">
          <FaMicrophone className="nav-icon" />
          <FaCog className="nav-icon" />
        </div>
      </header>
    </>
  );
}
