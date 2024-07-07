import React from 'react';
import svg1 from "../assets/image/svg1.png";
import svg2 from "../assets/image/svg2.png";
import svg3 from "../assets/image/svg3.png";
import svg4 from "../assets/image/svg4.png";
import svg5 from "../assets/image/svg5.png";
import svg6 from "../assets/image/svg6.png";
import './Choose.css';

const Choose = () => {
  return (
    <div className="container">
      <h2>WHY CHOOSE <span className="highlight">AIRSME?</span></h2>
      <p>Here Are The Various Benefits You Receive When You Start Working With Us!</p>
      <div className="cards">
        <div className="card">
          <img src={svg3} alt="Experience" />
          <h3>15+ Years Of Experience</h3>
          <p>A broad work experience with different industries</p>
        </div>
        <div className="card">
          <img src={svg4} alt="Certified Developers" />
          <h3>Certified Developers</h3>
          <p>Microsoft .Net/Azure/AWS certified Developer for your project</p>
        </div>
        <div className="card">
          <img src={svg1} alt="Satisfaction Guaranteed" />
          <h3>Satisfaction Guaranteed</h3>
          <p>If you're not satisfied with our work, we'll refund you, no questions asked!</p>
        </div>
        <div className="card">
          <img src={svg2} alt="Exceptional Quality" />
          <h3>Exceptional Quality</h3>
          <p>We have over a decade of experience and are exceptionally skilled</p>
        </div>
        <div className="card">
          <img src={svg6} alt="Saved Costs" />
          <h3>Saved Costs</h3>
          <p>No lengthy contracts, no expensive onboarding, and no hidden costs</p>
        </div>
        <div className="card">
          <img src={svg5} alt="Agile/DevOPS Methodology" />
          <h3>Agile/DevOPS Methodology</h3>
          <p>Most successful project execution method, 2 weeks sprint and delivery in chunks</p>
        </div>
      </div>
    </div>
  );
}

export default Choose;
