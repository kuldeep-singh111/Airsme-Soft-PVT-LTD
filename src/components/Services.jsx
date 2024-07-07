import React from 'react';
import { FaLightbulb, FaMobileAlt, FaLaptopCode, FaPaintBrush, FaCheckCircle, FaTools, FaRobot, FaCube, FaShoppingCart } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    title: 'Ideation And Planning',
    description: 'Technology brainstorming is an iterative process of making your product better and better over time. We know how to turn your vision into reality.',
    icon: <FaLightbulb />,
    color: '#ffebf0'
  },
  {
    title: 'Mobile App Development',
    description: 'A feature-rich app with various functions delivers unique value propositions to firms. We have the right team.',
    icon: <FaMobileAlt />,
    color: '#ffebf0'
  },
  {
    title: 'Website Development',
    description: 'With our creative team, you can craft the idea for a completely customized website and ensure your website is future-proof.',
    icon: <FaLaptopCode />,
    color: '#ffebf0'
  },
  {
    title: 'UI & UX Design',
    description: 'Creating a high-quality product interface means solving problems iteratively and making them better with each iteration to meet end users’ expectations.',
    icon: <FaPaintBrush />,
    color: '#ffebf0'
  },
  {
    title: 'Quality Assurance',
    description: 'We are not just executers that fulfill requirements. We are a talented team of Engineers that solve highly complex problems in a well-founded and matching.',
    icon: <FaCheckCircle />,
    color: '#ffebf0'
  },
  {
    title: 'Maintenance And Support',
    description: 'Collaboration is not finished after the project is developed, delivered, and launched. As a committed Software Development Partner.',
    icon: <FaTools />,
    color: '#ffebf0'
  },
  {
    title: 'AI/ML Development',
    description: 'Comprehensive AI/ML development services for businesses, leveraging cutting-edge tech to enhance user experiences, automate processes, and enable data-driven decisions.',
    icon: <FaRobot />,
    color: '#ffebf0'
  },
  {
    title: 'Blockchain Development',
    description: 'Premier blockchain developers empowering businesses with custom solutions, NFTs, Whitelabel, and more. Trust us for a decentralized future.',
    icon: <FaCube />,
    color: '#ffebf0'
  },
  {
    title: 'Marketplace Apps',
    description: 'We are Experts in profitable marketplace apps, connecting buyers, sellers, and service providers. Custom solutions, user-friendly platforms, and multiple payment options.',
    icon: <FaShoppingCart />,
    color: '#ffebf0'
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>OUR SERVICES</h2>
      <h1>WE ARE <span className="highlight">DELIVERING</span></h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;