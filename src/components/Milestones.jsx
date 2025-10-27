// components/Milestones.jsx
import React from 'react';
import Milestone from './Milestone';

const Milestones = () => {
  const milestoneData = [
    {
      title: "Project Proposal",
      description: "Research design and initial planning phase.",
      status: "completed",
      position: "left",
      date:'March 12th 2025'
    },
    {
      title: "Progress Presentation 1",
      description: "Basic prototype demonstration and feedback collection.",
      status: "completed",
      position: "right",
      date:'April 09th 2025'
    },
    {
      title: "Progress Presentation 2",
      description: "Feature development and implementation review.",
      status: "completed",
      date: "September 15th 2025",
      position: "left"
    },
    {
    
      date: "October 23rd 2025",
      title: "Research Paper",
      description: "Research Paper - Acceptance notification",
      status: "completed",
      position: "right"
    },
    {
      title: "Final Assessment & Viva",
      description: "Full system tested with comprehensive evaluation.",
      status: "completed",
      date: "October 27th 2025",
      position:  "left"
    },
  
  {
      date: "October 27th 2025",
      title: "Website Assessment",
      description: "Final evaluation of the website implementation and functionality.",
      status: "completed",
      position: "right"
    },

  ];

  return (
    <section id="milestones" className="milestones">
      <div className="container-milestones">
        <h2 className=" section-title-mil ">Project Milestones</h2>
        <p className="section-subtitle-mil">Track our progress through the development lifecycle of the FlexoPlate manager project.</p>
        
        <div className="timeline">
          {milestoneData.map((milestone, index) => (
            <Milestone
              key={index}
              title={milestone.title}
              description={milestone.description}
              status={milestone.status}
              date={milestone.date}
              position={milestone.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
