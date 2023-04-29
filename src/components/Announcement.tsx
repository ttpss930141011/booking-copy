import React from "react";
import "./announcement.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="announcementContainer">
        <div className="checktext">
          <input type="checkbox" id="check" />
          <label htmlFor="check">I'm traveling for work</label>
        </div>
        <div className="infoDes">
          <div className="left">
            {" "}
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <div className="right">
            <h5>Coronavirus (COVID-19) support</h5>
            Get the advice you need.Check thelatest COVID-19 restrictions before
            you travel.
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="discountInfo">
          <div className="left">
            {" "}
            <img
              src="https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <h2>Save 15% or more!</h2>
            <span>
              Make your dream trip come true this summer! Book and stay before
              September 30, 2022, to save big. Plus, join the competition to
              create your first dynamic website and pave the way for a new
              business venture.
            </span>
            <button>Explore!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
