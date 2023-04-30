import React from "react";
import "./postcard.scss";
import { attractionsType } from "../types";

const PostCard: React.FC<{ data: attractionsType[] }> = ({ data }) => {
  return (
    <div className="postcard">
      {data.map((item, index) => {
        return (
          <div className="postcardItem" key={index}>
            <img src={item.img} alt="" className="imgBg" />
            <div className="itemInfo">
              <h1>
                {item.name}
                <img src={item.flag} alt="" />
              </h1>
              <p>{item.amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
