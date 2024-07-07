import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Choose from "./components/Choose";
import Exp from "./components/Exp";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageGallery from "./components/ImagesGallery";
import Services from "./components/Services";
import Work from "./components/Work";
import Ourstudy from "./components/Ourstudy";
import Product from "./components/Product";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const ourstudyRef = useRef(null);
  const testimonialRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Header handleScroll={handleScroll} servicesRef={servicesRef} workRef={workRef} ourstudyRef={ourstudyRef} testimonialRef={testimonialRef} />
      <Hero />
      <Exp />
      <div ref={servicesRef}><Services /></div>
      <div ref={workRef}><Work /></div>
      <div ref={ourstudyRef}><Ourstudy /></div>
      <div ref={testimonialRef}><Testimonial /></div>
      <Choose />
      <ImageGallery />
      <Product />
      <Footer />
    </Router>
  );
}

export default App;
