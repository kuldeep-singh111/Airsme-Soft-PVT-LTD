import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Product.css';
import l00 from "../assets/image/l00.png";
import phh1 from "../assets/image/phh1.png";
import phh2 from "../assets/image/phh2.png";

const ProductCard = () => {
  return (
    <div className="product-container">
      <div className="header">
        <h2 className="title">Our <span className="highlight">Product</span></h2>
        <p className="subtitle">Our Products Will Build A Strong Foundation In Your System</p>
      </div>
      <div className="product-card">
        <div className="product-info">
          <div className="logo-section">
            <img src={l00} alt="Logo" className="logo" />
            <div className="logo-text">VIKIR</div>
          </div>
          <h3>All Your Business Needs In <span className="highlight">One App</span></h3>
          <p className="description">
            vikir is a B2B marketplace for business opportunities in India. The vikir platform facilitates SME's 
            to find trusted business partners while maintaining customers and operations through one seamless digital experience.
          </p>
          <ul className="features">
            <li><FaCheckCircle className="icon" /> Mobile Application</li>
            <li><FaCheckCircle className="icon" /> Manage Network</li>
            <li><FaCheckCircle className="icon" /> Track enquiries</li>
            <li><FaCheckCircle className="icon" /> Payment Book</li>
          </ul>
          <button className="know-more">Know More</button>
        </div>
        <div className="product-images">
          <img src={phh1} alt="Phone 1" className="phone phone1" />
          <img src={phh2} alt="Phone 2" className="phone phone2" id='pp2' />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
