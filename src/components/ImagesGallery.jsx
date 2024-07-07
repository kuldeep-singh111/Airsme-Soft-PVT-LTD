import React, { useState } from 'react';
import team111 from "../assets/image/team111.png";
import team22 from "../assets/image/team22.png";
import team7 from "../assets/image/team7.jpg";
import team5 from "../assets/image/team5.jpg";
import team3 from "../assets/image/team3.png";
import team6 from "../assets/image/team6.jpg";
import team8 from "../assets/image/team8.jpg";
import './ImageGallery.css';

const images = [
  { src: team111, title: 'Conceive Your Ideas', description: 'We begin the process by understanding what you need and want. We gather the business, technical requirements, challenges, market potential, and project vision. Our goal is to understand what problem the product will be solving and what end users need.' },
  { src: team6, title: 'Analyse and Brainstorm', description: 'Gathering and analyzing data to brainstorm innovative ideas and solutions for your software needs.' },
  { src: team22, title: 'Devise a Wireframe', description: 'Creating wireframes to map out the user interface and experience for your software application.' },
  { src: team7, title: 'Production and Project Initiation', description: 'Initiating the project with a focus on production, ensuring all requirements are met.' },
  { src: team5, title: 'Bug Fixing & Testing', description: 'Thoroughly testing the software and fixing any bugs to ensure a smooth user experience.' },
  { src: team3, title: 'Product Launch', description: 'Launching the product, making it available to users, and monitoring its performance.' },
  { src: team8, title: 'After Project Support and Maintenance', description: 'Providing ongoing support and maintenance to ensure the software remains up-to-date and functional.' },
];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='data-container'>
    <div className="image-gallery">
      <h2>
        CRAFTING TAILORED SOFTWARE SOLUTIONS WITH <span className="highlight">AGILITY</span>
      </h2>
      <p>Adaptable Approaches For Your Unique Requirements</p>
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-container ${index === 0 || index === hoveredIndex ? 'expanded' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={image.src} alt={image.title} />
            <div className="text-overlay">
              <div className="index-number">{index + 1}</div>
              {(index === 0 || index === hoveredIndex) && (
                <div className="text-content">
                  <h3>{image.title}</h3>
                  {image.description && <p>{image.description}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageGallery;
