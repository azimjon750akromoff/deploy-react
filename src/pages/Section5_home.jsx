import React from 'react'
import '../styles/Section5_home.scss';
import happypeople from '../assets/image 123.png';

function Section5_home() {
  return (
    <div className='section5 container'>
      <div className="text">
        <h5>Our Services</h5>
        <h3>Latest News</h3>
      </div>

      <div className="links">
        <div className="link">
            <img src={happypeople} alt="" />
            <h6>January 01, 2021</h6>
            <h5>How to Start a Successful in 2020</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <button>Read More</button>
        </div>

        <div className="link">
            <img src={happypeople} alt="" />
            <h6>January 01, 2021</h6>
            <h5>Grow Your Business with Email Marketing</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <button>Read More</button>
        </div>

        <div className="link">
            <img src={happypeople} alt="" />
            <h6>January 01, 2021</h6>
            <h5>The 4 Pillars Every Online Business</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Section5_home;
