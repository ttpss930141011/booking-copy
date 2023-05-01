import React from "react";
import { popularHotelsDataType } from "../types";
import "./popularhotels.scss";

const PopularHotels: React.FC<{ data: popularHotelsDataType[] }> = ({
  data,
}) => {
  return (
    <div className="popularhotels">
      {data.map((item, index) => (
        <div className="popularhotelItem" key={index}>
          <img src={item.img} alt="" />
          <div className="itemInfo">
            <div className="title">{item.name}</div>
            <div className="subtitle">{item.place}</div>
            <div className="price">
              Starting from TWD {item.price.toLocaleString()}
            </div>
            <div className="rate">
              <button>{item.rate}</button>
              <span>{item.rate >= 9.5 ? "Excellent" : "Good"}</span>
              <p>{item.comment.toLocaleString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularHotels;
