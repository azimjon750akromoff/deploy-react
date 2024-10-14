import React from "react";
import "../styles/Section1_home.scss";
import game from '../assets/Group 65.svg'
function Section1_home() {
  return (
    <div className="section1 container">
      <div className="left">
        <div className="video">
        <iframe width="350" height="250" src="https://www.youtube.com/embed/myOXc6otVTw" title="WEWORK OFFICE TOUR &amp; REVIEW - Co-working Office Tour | Salesforce Consultant" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h3>Our Firm</h3>
        <h2>We are Agile. Constantly Focused on Growth and Being Better</h2>

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

        <button>Read About Us</button>
      </div>

      <div className="right">
          <div className="upperCircle">
            <h4>18</h4><p>Years Experience</p>
          </div>
          <div className="downCircle">
            <p>Completed Projects</p><h4>240+</h4> 
          </div>
          <div className="upperCircle">
            <h4>9.5/10</h4> <p>Average rating</p>
          </div>
          <div className="downCircle">
             <p>Served</p> <h4>150+</h4>
        </div>
      </div>

<div className="mobile">
  <div className="white-box">
    <img src={game} alt="" />
    <div className="text">
          <h3>18</h3>
    <p>Years Experience</p>
    </div>

  </div>

  <div className="white-box">
    <img src={game} alt="" />
    <div className="text">
          <h3>18</h3>
    <p>Years Experience</p>
    </div>
  </div>

  <div className="white-box">
    <img src={game} alt="" />
    <div className="text">
          <h3>18</h3>
    <p>Years Experience</p>
    </div>
  </div>
</div>

    </div>
  );
}

export default Section1_home;
