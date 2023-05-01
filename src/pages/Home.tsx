import React from "react";
import NavBar from "../components/NavBar";
import "./home.scss";
import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Header />
      <Announcement />
      <Feature/>
      <Footer/>
    </div>
  );
};

export default Home;
