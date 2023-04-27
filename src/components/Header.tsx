import React from "react";
import './header.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">Where to next, 海舜?</h1>
        <p className="headerDes">
          Find exclusive Genius rewards in every corner of the world!
          <br />
          Booking.com clone challenge
        </p>
        <div className="headerSearchBar">SearchBar</div>
      </div>
    </div>
  );
};

export default Header;
