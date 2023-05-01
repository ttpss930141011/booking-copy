import React from "react";
import Categories from "../subcomponents/Categories";
import PostCards from "../subcomponents/postCards";
import "./feature.scss";
import {
  PopularHotelsData,
  Attractions,
  CategoriesType,
  CategoriesCities,
} from "../data/data";
import PopularHotels from "../subcomponents/PopularHotels";

const Feature = () => {
  return (
    <div className="feature">
      <div className="featureContainer">
        <div className="listTitle">
          <h2>Browse by property type</h2>
        </div>
        <div className="listItem">
          <Categories data={CategoriesType} />
        </div>
        <div className="listItem">
            <PostCards data={Attractions} />
        </div>
        <div className="listTitle">
            <h3>Explore Taiwan</h3>
            <p className="desc">These popular destinations have a lot to offer</p>
        </div>
        <div className="listItem">
          <Categories data={CategoriesCities} />
        </div>
        <div className="listItem">
          <PopularHotels data={PopularHotelsData} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
