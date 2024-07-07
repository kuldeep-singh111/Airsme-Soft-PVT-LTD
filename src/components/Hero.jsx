import React from 'react';
import Group from "../assets/image/Group.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className='Main-container'>
      <div className='info-part'>
        <h2 className='top-line'>
          Transforming Your Ideas Into Engaging Digital Experiences
        </h2>
        <p className='extra-text'>
          Give Your Business The Edge With Our Full-Fledged Product, Design & Tech On Demand - When You Need It And Only Till You Need It
        </p>
        <span className='contact-info'>
          <button className='contacts-btn'>Contact Us</button>
          <button className='books-btn'>Book a call</button>
        </span>
      </div>
      <div className='Banner'>
        <img src={Group} alt="Banner" />
      </div>
    </div>
  )
}

export default Hero;
