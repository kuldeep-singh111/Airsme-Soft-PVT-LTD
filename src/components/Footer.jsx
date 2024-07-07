import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-items">
        <h1>Contact Information</h1>
        <p>
          Are you looking to outsource your project? Then look no <br/>
          further as AIRSME has all the right tools to help you.
        </p>
        <div className="contact-infos">
          <div>
            <i className="fas fa-phone"></i>
            <span>+91 97872 11412</span>
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <span>admin.a@airsme.in</span>
          </div>
          <div>
            <i className="fas fa-map-marker-alt"></i>
            <span>
              59, 1st floor, 1st Avenue,
              <br /> Teachers colony, HSR layout Bangalore 560034
            </span>
          </div>
        </div>
        </div>
      <div className="footer-key">
        <h2>Quick Links</h2>
        <ul>
          <li>Services</li>
          <li>Work</li>
          <li>Case Study</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div className="newsletter">
          <h3>Join Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
          <p>
            Will send you weekly updates for your
            better tool management.
          </p>
        </div>
     
    </div>
  );
}

export default Footer;