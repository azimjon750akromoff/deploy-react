import React from "react";
import Banner from "../assets/Group 1-2.png";
import "../styles/Home.scss";
import Section2_home from "./Section2_home";
import Section3_home from "./Section3_home";
import Section4_home from "./Section4_home";
import Section5_home from "./Section5_home";
import Section6_home from "./Section6_home";
import Section1_home from "./Section1_home";

function Home() {
  return (
    <>
      <div className="home container">
        <div className="left">
          <h1>
            Financial <br /> Solutions.
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p>

          <button>Let’s Talk</button>
        </div>

        <div className="right">
          <img src={Banner} alt="" />
        </div>
      </div>
      <Section1_home />
      <Section2_home />
      <Section3_home />
      <Section4_home />
      <Section5_home />
      <Section6_home />
    </>
  );
}

export default Home;
