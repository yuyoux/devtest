import React from "react";
import "./Home.scss";
import Logo from "../assests/LOGO_Big_RGB.png";
import NavBig from "../components/Navbar";
import SecondComponent from "../components/SecondComponent";
import ThirdComponent from "../components/ThirdComponent";
import Contact from "../components/Contact";
import VerticalCarousel from "../components/VerticalCarousel";

const Home = props => {
  return (
    <div>
      <div className="leftNav text-center px-3">
        <img src={Logo} alt="Logo" className="py-5"></img>
        <NavBig></NavBig>
      </div>
      <div className="rightContent">
        <VerticalCarousel />
        <SecondComponent />
        <ThirdComponent />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
