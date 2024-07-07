import React from 'react';
import './Ourstudy.css';
import p11 from "../assets/image/p11.png";
import p1 from "../assets/image/p1.png";

function Ourstudy() {
    const caseStudies = [
        {
            image: p11,
            title: 'Milk Delivery App Development Case Study',
            description: 'In this project, we assisted our client Shuddh Dairy in developing a bespoke Custom milk delivery App',
            tags: ['Next.js', 'App Development', 'Flutter']
        },
        {
            image: p1,
            title: 'Milk Delivery App Development Case Study',
            description: 'In this project, we assisted our client Shuddh Dairy in developing a bespoke Custom milk delivery App',
            tags: ['Next.js', 'App Development', 'Flutter']
        }
    ];

    return (
        <div className="container">
            <div className="header">
                <h2 className="title">OUR CASE <span className="highlight">STUDY</span></h2>
                <p className="subtitle">Here Are The Various Benefits You Receive When You Start Working With Us!</p>
            </div>
            <div className="case-studies">
                {caseStudies.map((caseStudy, index) => (
                    <div key={index} className="case-study-card">
                        <img src={caseStudy.image} alt={caseStudy.title} className="case-study-image" />
                        <div className="content">
                            <h3>{caseStudy.title}</h3>
                            <p>{caseStudy.description}</p>
                            <div className="tags">
                                {caseStudy.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="tag">{tag}</span>
                                ))}
                            </div>
                            <button className="read-more">
                                Read Case Study
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-more">View More Case Study</button>
        </div>
    );
}

export default Ourstudy;
