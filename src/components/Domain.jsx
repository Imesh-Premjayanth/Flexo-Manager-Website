// components/Domain.jsx
import React from 'react';
import DomainCard from './DomainCard';

const Domain = () => {
  const domainData = [
  {
    title: "AI-Based Artwork Similarity Detection",
    description: "Identifies similar artworks using AI to optimize plate reuse and minimize redundant production."
  },
  {
    title: "Automated Plate Management",
    description: "Tracks and manages flexo plates digitally, reducing manual effort and production errors."
  },
  {
    title: "Environmental and Cost Efficiency",
    description: "Reduces material waste and polymer usage while helping management monitor monthly cost savings."
  },
  {
    title: "Intelligent Insights and Collaboration",
    description: "Provides real-time analytics for prepress, technical, and back-office teams to improve coordination and efficiency."
  }
];


  return (
    <section id="domain">
      <div className="container-domain">
        <h2 className="section-title">Our Domain</h2>
        <p className="section-subtitle">The Automated Flexo Plate Manager aims to be an AI-powered solution for efficient flexographic plate reuse, reducing waste, cost, and operator dependency in printing operations.</p>
        
        <div className="domain-container">
          {domainData.map((domain, index) => (
            <DomainCard 
              key={index} 
              title={domain.title} 
              description={domain.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domain;
