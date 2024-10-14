import React from 'react'
import "../styles/Section2_home.scss";
import Wallet from '../assets/Wallet.svg';
import '../styles/Section2_home.scss';
import Backpack from '../assets/Icon-Backpack.svg';
import Analitic from '../assets/Icon-Analytic.svg';
function Section2_home() {
  return (
    <div className='section2 container'>
      <div className="text">

      <h4>Our Services</h4>
      <h2>What We Offer</h2>
      </div>

      <div className="offers">
        <div className="offer">
          <img src={Wallet} alt="" />
          <p>#1</p>
          <h3>Financial Report</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>

        <div className="offer">
          <img src={Backpack} alt="" />
          <p>#2</p>
          <h3>Manage Investments</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>

        <div className="offer">
          <img src={Analitic} alt="" />
          <p>#3</p>
          <h3>Financial Report</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
      </div>
    </div>
  )
}

export default Section2_home
