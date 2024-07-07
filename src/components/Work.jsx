import React from 'react';
import './Work.css';
import g11 from '../assets/image/g11.png';
import g2 from '../assets/image/g2.png';
import g3 from '../assets/image/g3.png';
import g4 from '../assets/image/g4.png';

const projects = [
  {
    title: 'Project 1',
    image: g2,
  },
  {
    title: 'Project 2',
    image: g3,
  },
  {
    title: 'Project 3',
    image: g4,
  },
  {
    title: 'Project 4',
    image: g11,
  },
];

function Work() {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">Our Amazing Recent Work</h1>
      <p className="portfolio-subtitle">
        We Help Small To Medium Businesses And Startups Make A Splash By Providing Both A User-Centered And Business-Oriented Vision
      </p>
      <button className="portfolio-button">Figma Presentation</button>

      <div className='portfolio-data'>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
          </div>
         
        ))}
      </div>
      </div>
    </div>
  );
}

export default Work;
