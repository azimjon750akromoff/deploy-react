import React from "react";
import labtopCard from "../assets/pexels-anna-shvets-4482900 1.png";
import arrow from "../assets/arrow.svg";
import arrowleft from "../assets/Untitled.svg";

import "../styles/Section3_home.scss";
function Section3_home() {
  return (
    <div className="section3 container">
      <div className="mobile">
        <h3>
          Financial Planning <br /> For Safe Investment
        </h3>
      </div>
      <div className="left">
        <div className="mobile-arrow">
          <img src={arrowleft} alt="" />
          <img className="white" src={arrow} alt="" />
        </div>
        <h3>Key Features</h3>
        <h2>Manage Your Finances From one Place</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics
        </p>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics
        </p>

        <button>Check All Fitures</button>
      </div>

      <div className="right">
        <img src={labtopCard} alt="" />
      </div>
    </div>
  );
}

export default Section3_home;
