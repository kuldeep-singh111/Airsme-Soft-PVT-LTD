import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Testimonial.css';
import star from '../assets/image/stars.jpg'; 
import user from '../assets/image/k.png';

const testimonials = [
  {
    id: 1,
    name: 'Kuldeep',
    title: 'Co-Founder of zave.it',
    text: 'Airsme lean and user-friendly design concept for zave.it was a key factor in the app’s successful launch.committed to making our project a success. Plus, he works super fast!',
    image: user,
  },
  {
    id: 2,
    name: 'Jtendra',
    title: 'Co-Founder of zave.it',
    text: 'The team delivered an exceptional product that surpassed our expectations. Their attention to detail and commitment to excellence were evident in every aspect of the project. We look forward to working with them again in the future.',
    image: user,
  },
  {
    id: 3,
    name: 'Jane Smith',
    title: 'Co-Founder of zave.it',
    text: 'The innovative solutions and seamless design provided by the team were instrumental in the success of our project. Their expertise and professionalism were top-notch, and we highly recommend their services.',
    image: user,
  },
  {
    id: 4,
    name: 'Alice Sharma',
    title: 'Co-Founder of zave.it',
    text: 'The user-friendly design and intuitive interface created by the team received positive feedback from our users. Their ability to understand our needs and translate them into a functional product was impressive.',
    image: user,
  },
  {
    id: 5,
    name: 'Bob Brown',
    title: 'Co-Founder of zave.it',
    text: 'Working with the team was a pleasure. Their dedication to delivering high-quality results and their innovative approach to problem-solving made a significant impact on our project.',
    image: user,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedTestimonials = () => {
    const numToShow = windowWidth > 768 ? 3 : 1;
    const testimonialArray = [];

    for (let i = 0; i < numToShow; i++) {
      testimonialArray.push(
        testimonials[(currentIndex + i) % testimonials.length]
      );
    }

    return testimonialArray;
  };

  return (
    <div className='main-t-c'>
    <div className="testimonial-container">
      <h2 className="title">DON'T TAKE <span className="highlight">OUR WORD</span></h2>
      <p className="subtitle">Have A Look At Some Of The Impact We've Made For Others</p>
      <div className="carousel">
        <div className="testimonial-cards">
          {displayedTestimonials().map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="card-content">
                <div className="stars">
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <span className="right-text">Zave.it</span>
                </div>
                <div className='t-text'>
                <p className="testimonial-text">{testimonial.text}</p>
                </div>
                <div className="user-info">
                  <img src={testimonial.image} alt={testimonial.name} className="user-image" />
                  <div className="user-details">
                    <h3 className="user-name">{testimonial.name}</h3>
                    <p className="user-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation">
          <button className="nav-btn" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button className="nav-btn" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
