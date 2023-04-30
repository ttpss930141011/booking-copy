import React from "react";
import { categoriesType } from "../types";
import './categories.scss'
const Categories: React.FC<{ data: categoriesType[] }> = ({ data }) => {
  return (
    <div className="catogories">
      {data.map((item,index) => {
        return (
          <div className="item" key={index}>
            <img src={item.img} alt="" />
            <div className="itemInfo">
                <div className="title">
                    {item.name}
                </div>
                <div className="desc">
                    {item.amount}
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
