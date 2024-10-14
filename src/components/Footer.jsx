import React from "react";
import "../styles/Footer.scss";
import logo from "../assets/Group 1-2.svg";
import { Link } from "react-router-dom";

import facebook from "../assets/image 106.svg";
import insta from "../assets/image 107.svg";
import twitter from "../assets/image 108.svg";

function Footer() {
  return (
   <>
    <div className="footer">
      <div className="left">
        <div className="logo-image">
          <img src={logo} alt="" />
          <h2>WeFinance</h2>
        </div>
        <div className="tf">
          <p>WeFinance is the highest rated expert team in the world</p>
          </div>
      
      </div>

      <div className="middle">
        <div className="link">
          <h5>Home</h5>
          <h5>About Us</h5>
          <h5>How it Works</h5>
        </div>
        <div className="link">
          <h5>Our Services</h5>
          <h5>Contact Us</h5>
          <h5>FAQ</h5>
        </div>

        <div className="link">
          <h5>Our Team</h5>
          <h5>Careers</h5>
        </div>
      </div>

      <div className="right">
        <div className="logo">
              <img src={facebook} alt="" />
        <img src={insta} alt="" />
        <img src={twitter} alt="" />
        </div>
      

        
      </div>
    </div>
    <div className="footer-bottom">
    <div className="one">
          <p>©2021 WeFinance</p>
        </div>
      <div className="text">
          <p>Help</p>
          <p>Term & Conditions</p>
          <p>Privacy</p>
        </div>
    </div>
   </>
  );
}

export default Footer;



