import React from "react";
import "../styles/Section4_home.scss";
import psp from "../assets/Group 65.svg";
import team from "../assets/Group 66.svg";
import phone from "../assets/Group 67.svg";
function Section4_home() {
  return (
    <div className="section4 container">
      <div className="left">
        <div className="praisez">
          <div className="praise">
            <img src={psp} alt="" />
            <h5>Innovative Solutions</h5>
          </div>

          <div className="praise">
            <img src={team} alt="" />
            <h5>Professional Team</h5>
          </div>

          <div className="praise">
            
            <img src={phone} alt="" />
            <h5>24/7 Support</h5>
          </div>
        </div>
      </div>

      <div className="right">
        <h5>Start Now</h5>
        <h2>Start Now & Make Your Finances Clear & Organized</h2>

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
      </div>
    </div>
  );
}

export default Section4_home;
