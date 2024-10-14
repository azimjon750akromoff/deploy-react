import '../styles/Navbar.scss';
import Logo from "../assets/Group 1.svg";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Global.scss";
import arrowdown from "../assets/arrow-down nav.svg";


import hamburgermenu from '../assets/Group 181.svg';
function Navbar() {
  return (
    <div className="navbar container">
      <div className="left">
        <img src={Logo} alt="" />
        <h2>WeFinance</h2>
      </div>
      <div className="middle">  
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/howitworks">How it Works</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/more">
          More <img src={arrowdown} alt="" />
        </Link>
      </div>

    

      <div className="right">
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>

      <div className="mobile">
          <img src={hamburgermenu} alt="" />
        </div>
    </div>
  );
}

export default Navbar;
