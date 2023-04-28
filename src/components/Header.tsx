import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./header.scss";
import format from "date-fns/format";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
const Header = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">Where to next, 海舜?</h1>
        <p className="headerDes">
          Find exclusive Genius rewards in every corner of the world!
          <br />
          Booking.com clone challenge
        </p>
        <div className="headerSearchBar">
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="Search"
              placeholder="Where are you going?"
              className="SearchInput"
            />
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon
              icon={faCalendar}
              onClick={() => setOpenCalendar(!openCalendar)}
            />
            <span
              className="SearchText"
              onClick={() => setOpenCalendar(!openCalendar)}
            >
              {format(dates[0].startDate, "MM/dd/yyyy")} -{" "}
              {format(dates[0].endDate, "MM/dd/yyyy")}
            </span>
            {openCalendar && (
              <DateRange
                editableDateInputs={true} //可以讓日期被選取並輸入等等的
                onChange={(item: any) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                className="calendar"
                minDate={new Date()}
                ranges={dates}
              />
            )}
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span className="SearchText">2 adults · 0 children · 1 room</span>
          </div>
          <button className="SearchBarBtn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
