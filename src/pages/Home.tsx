import React from "react";
import NavBar from "../components/NavBar";
import "./home.scss";
import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Feature from "../components/Feature";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Header />
      <Announcement />
      <Feature/>
    </div>
  );
};

export default Home;
