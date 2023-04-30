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
  const [openConditions, setOpenConditions] = useState(false);
  const [conditions, setConditions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleCounter = (
    type: "adults" | "children" | "rooms",
    value: number
  ) => {
    setConditions({ ...conditions, [type]: conditions[type] + value });
  };
  const [destination, setDestination] = useState("");
  
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
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
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
            <FontAwesomeIcon
              icon={faPeopleGroup}
              onClick={() => setOpenConditions(!openConditions)}
            />
            <span
              className="SearchText"
              onClick={() => setOpenConditions(!openConditions)}
            >
              2 adults · 0 children · 1 room
            </span>
            {openConditions && (
              <div className="ConditionsContainer">
                <div className="condition">
                  Adults
                  <div className="conditionCounter">
                    <button
                      className="conditionCounterButton"
                      onClick={() => handleCounter("adults", -1)}
                      disabled={conditions.adults <= 1}
                    >
                      -
                    </button>
                    <span className="number">{conditions.adults}</span>
                    <button
                      className="conditionCounterButton"
                      onClick={() => handleCounter("adults", 1)}
                      disabled={conditions.adults >= 15}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="condition">
                  Children
                  <div className="conditionCounter">
                    <button
                      className="conditionCounterButton"
                      onClick={() => handleCounter("children", -1)}
                      disabled={conditions.children <= 0}
                    >
                      -
                    </button>
                    <span className="number">{conditions.children}</span>
                    <button
                      className="conditionCounterButton"
                      onClick={() => handleCounter("children", 1)}
                      disabled={conditions.children >= 5}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="condition">
                  Rooms
                  <div className="conditionCounter">
                    <button
                      className="conditionCounterButton"
                      onClick={() => handleCounter("rooms", -1)}
                      disabled={conditions.rooms <= 1}
                    >
                      -
                    </button>
                    <span className="number">{conditions.rooms}</span>
                    <button
                      className="conditionCounterButton"
                      onClick={() => handleCounter("rooms", 1)}
                      disabled={conditions.rooms >= 5}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="SearchBarBtn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
