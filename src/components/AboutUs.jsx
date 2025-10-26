// components/AboutUs.jsx
import React from 'react';
import TeamCard from './TeamCard';

const AboutUs = () => {
  const teamData = [
    
 
  ];

  const supervisorData = [
    {
      name: "Ms. Uthpala Samarakoon",
      id: "", // Leave empty for supervisors or add department/designation
      role: "Project Supervisor",
      image: `${process.env.PUBLIC_URL}/img/members/supervisor.jpg` // Placeholder image, replace with actual image path
    },
    {
      name: "Ms. Dushanthi Kuruppu ",
      id: "",
      role: "Project Co-Supervisor",
      image: `${process.env.PUBLIC_URL}/img/members/co-supervisor.jpg` // Placeholder image, replace with actual image path
    },
    {
      name: "Mr. Chinthaka Perera",
      id: "",
      role: "External Supervisor",
      image: `${process.env.PUBLIC_URL}/img/members/external-supervisor.jpg` // Placeholder image, replace with actual image path
    },
    {
      name: "Premajayantha W.H.S.I. ",
      id: "",
      role: "Project Developer",
      image: `${process.env.PUBLIC_URL}/img/members/unnamed (2).jpg` // Placeholder image, replace with actual image path
    },
    
    
  ];

  return (
    <section id="about">
      <div className="container-aboutus">
        <h2 className="section-title-mil">About Us</h2>
        <p className="section-subtitle-mil">Meet the team behind the FlexoPlate Manager project.</p>
        
        {/* Project Supervisors Section */}
        <div className="supervisors-section">
          <h3 className="subsection-title-ab">Project Team</h3>
          <div className="team-container supervisors-grid">
            {supervisorData.map((supervisor, index) => (
              <TeamCard
                key={`supervisor-${index}`}
                name={supervisor.name}
                id={supervisor.id}
                role={supervisor.role}
                image={supervisor.image}
                isSupervisor={true}
              />
            ))}
          </div>
        </div>

        {/* Development Team Section */}
        <div className="team-section">
          {/* <h3 className="subsection-title-ab">Development Team</h3> */}
          <div className="team-container">
            {teamData.map((member, index) => (
              <TeamCard
                key={`team-${index}`}
                name={member.name}
                id={member.id}
                role={member.role}
                image={member.image}
                isSupervisor={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
