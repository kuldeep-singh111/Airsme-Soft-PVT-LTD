import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.png";
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import "./Header.css";

const Header = ({ handleScroll, servicesRef, workRef, ourstudyRef, testimonialRef }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleClose = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header>
        <img id="image" src={logo} alt="Logo" />

        <div className='nav-icon'>
          <li className='items' onClick={() => handleScroll(servicesRef)}>Services</li>
          <li className='items' onClick={() => handleScroll(workRef)}>Work</li>
          <li className='items' onClick={() => handleScroll(ourstudyRef)}>Case Study</li>
          <li className='items' onClick={() => handleScroll(testimonialRef)}>Testimonials</li>
          <button>Contact Us</button>
        </div>

        <div className="menubar" onClick={toggleMenu}>
          <IoMdMenu />
        </div>

        {showMenu && (
          <div className='responsive'>
            <span className='close-icon' onClick={toggleClose}><IoMdClose /></span>
            <div className='nav-icon'>
              <li className='items' onClick={() => { handleScroll(servicesRef); toggleClose(); }}>Services</li>
              <li className='items' onClick={() => { handleScroll(workRef); toggleClose(); }}>Work</li>
              <li className='items' onClick={() => { handleScroll(ourstudyRef); toggleClose(); }}>Case Study</li>
              <li className='items' onClick={() => { handleScroll(testimonialRef); toggleClose(); }}>Testimonials</li>
              <button>Contact Us</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
