import React from "react";
import NavBar from "../components/NavBar";
import "./home.scss";
import Header from "../components/Header";
import Announcement from "../components/Announcement";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Header />
      <Announcement />
    </div>
  );
};

export default Home;
