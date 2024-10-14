import React from "react";
import "../styles/Section6_home.scss";
import oka from "../assets/pexels-andrea-piacquadio-3778876 1.png";

import arrow from "../assets/arrow.svg";
import arrowleft from "../assets/Untitled.svg";

function Section6_home() {
  return (
    <div className="section6">
      <div className="mobile">
        <div className="txt">
          <h3>Testimoni</h3>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="card">
          <img src={oka} alt="" />
        </div>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics”
        </p>
        <h4>Petra Berger</h4>
        <p className="ceo">CEO PT Washington</p>

        <div className="mobile-arrow">
          <img src={arrowleft} alt="" />
          <img className="white" src={arrow} alt="" />
        </div>
      </div>

      <div className="middle">
        <h5>Contact With Us</h5>
        <h2>
          Interested? <br />
          Let's Start a Projects Together
        </h2>
      </div>
    </div>
  );
}

export default Section6_home;
