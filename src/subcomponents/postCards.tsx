import React from "react";
import "./postcards.scss";
import { attractionsType } from "../types";
import PostCard from "./PostCard";

const postCards: React.FC<{ data: attractionsType[] }> = ({ data }) => {
  return (
    <div className="postcards">
      <div className="line">
        <PostCard data={data.slice(0, 2)} />
      </div>
      <div className="line">
        <PostCard data={data.slice(2, 5)}  />
      </div>
    </div>
  );
};

export default postCards;
