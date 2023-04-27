import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faToriiGate,
} from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="lineOne">
          <div className="left">
            <span className="logo">ORANGE.BOOKING</span>
          </div>
          <div className="right">
            <button className="navButtonFlag" />
            <button className="navButtonNotif">Webpack test</button>
            <button className="navButton">Signup</button>
            <button className="navButton">Signin</button>
          </div>
        </div>
        <div className="lineTwo">
          <div className="item active">
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <span>Stays</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
            <span>Flight</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
            <span>Car</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faToriiGate} />
            <span>Attractions</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
