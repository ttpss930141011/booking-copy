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
            Get the advice you need.Check thelatest COVID-19 restrictions before you travel.
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
            <h2>省 15% 或更多</h2>
            <span>
              這個夏天，讓夢想之旅成真！2022 年 9 月 30
              日前預訂並住房就可省一筆，還有跟著參賽完成第一個動態網站為自己開創新事業
            </span>
            <button>逛逛優惠</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
