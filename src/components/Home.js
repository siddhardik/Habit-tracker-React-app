import React from "react";
import Habits from "./Habits";
import Navbar from "./Navbar";
import Logo from "../images/logo.png";
import CenterImage from "../images/CenterImage.jpg";

const Home = () => {
  return (
    <>
      <div id="app-title">
        <img src={Logo} alt="Logo" />
        <a href="/">
          <span id="firstpart">TRACK</span> <span id="secondpart">it</span>
        </a>
      </div>
      <Navbar />
      <Habits />
      <div className="center-image-container">
        <img src={CenterImage} alt="CenterImage" className="center-image" />
      </div>
    </>
  );
};

export default Home;
