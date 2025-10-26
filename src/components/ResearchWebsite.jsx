import React, { useState } from 'react';
import { ChevronRight, BookOpen, Search, Target, Settings, Code, Database, Brain, Globe } from 'lucide-react';
import { Gamepad2, Server, Layers3, Camera, Cloud, PackageSearch, Lock } from 'lucide-react';

import './ResearchWebsite.css';

const ResearchWebsite = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Introduction', icon: BookOpen },
    { id: 'literature', title: 'Literature Review', icon: Search },
    { id: 'gap', title: 'Research Gap', icon: Target },
    { id: 'methodology', title: 'Methodology', icon: Settings },
    { id: 'technologies', title: 'Technologies', icon: Code },
  ];

const technologies = [
  { 
    name: 'React.js', 
    description: 'Frontend framework for building interactive UI for artwork upload and similarity results', 
    icon: Code 
  },
  { 
    name: 'Node.js & Express.js', 
    description: 'Backend runtime environment for handling API requests, file uploads, and model integration', 
    icon: Server 
  },
  { 
    name: 'MongoDB', 
    description: 'NoSQL database for storing artwork metadata, similarity results, and plate tracking', 
    icon: Database 
  },
  { 
    name: 'Python', 
    description: 'Programming language for AI model development and image processing', 
    icon: Code 
  },
  { 
    name: 'TensorFlow / PyTorch', 
    description: 'Deep learning frameworks for training and running artwork similarity detection models', 
    icon: Brain 
  },
  { 
    name: 'OpenCV', 
    description: 'Image processing library for extracting features from artworks and pre-processing', 
    icon: Camera 
  },
  { 
    name: 'FastAPI', 
    description: 'Python API framework to expose AI model as REST endpoints for frontend consumption', 
    icon: Cloud 
  },
 
  { 
    name: 'JWT (JSON Web Token)', 
    description: 'Authentication system to secure user access and API endpoints', 
    icon: Lock 
  },
  { 
    name: 'Jupyter Notebook / Google Colab', 
    description: 'Environment for training and testing AI models interactively', 
    icon: Brain 
  }
];



  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <div className="content-section">
            <div className="intro-banner">
              <h3>Research Overview</h3>
              <p>
                The Automated Flexo Plate Manager is an AI-driven, automated similarity detection and plate management system designed to optimize resource utilization and reduce production costs in flexographic printing. It combines computer vision, machine learning, and intelligent inventory tracking to enhance efficiency, minimize waste, and support sustainable printing. The system enables accurate plate identification and reuse, providing a practical, cost-effective, and scalable solution for modern printing industries in Sri Lanka and similar developing regions.
              </p>
            </div>
            
            <div className="two-column-grid">
              <div className="info-card">
                <h4>Research Objectives</h4>
                <ul className="objective-list">
                  <li>
                    <ChevronRight className="icon-small" />
                    Detect reusable flexo plates using AI-driven artwork similarity and pattern analysis.
                  </li>
                  <li>
                    <ChevronRight className="icon-small" />
                    Maintain a dynamic database of plate specs, artwork, and usage history.
                  </li>
                  <li>
                    <ChevronRight className="icon-small" />
                    Classify plates with machine learning using visual and historical data.
                  </li>
                  <li>
                    <ChevronRight className="icon-small" />
                    Provide real-time cost, waste, and efficiency insights for production teams.
                  </li>
                  <li>
                    <ChevronRight className="icon-small" />
                    Apply adaptive algorithms and predictive analytics for optimized plate management.
                  </li>
                </ul>
              </div>
              
              <div className="info-card">
                <h4>Expected Impact</h4>
                <p>
                  The Automated Flexo Plate Manager aims to reduce plate waste, lower production costs, and improve operational efficiency in flexographic printing. It empowers management, technical, prepress, and back-office teams with real-time insights, promoting sustainable practices, better resource utilization, and consistent, high-quality production outcomes.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'literature':
        return (
          <div className="content-section">
            <div className="literature-banner">
              <h3>Literature Analysis</h3>
              <p>
                Research highlights that traditional flexographic plate management relies heavily on manual inspection, operator experience, and static inventory systems, often lacking adaptability and real-time optimization. Studies show that incorporating AI, computer vision, and machine learning can improve plate similarity detection, automate inventory tracking, and provide actionable insights for cost and resource efficiency. Combining production data with adaptive algorithms and predictive analytics offers a more effective, data-driven approach for minimizing material waste, enhancing operational efficiency, and supporting sustainable printing practices.
                </p>
            </div>
            
            <div className="three-column-grid">
              <div className="info-card">
                <h4>Theoretical Foundations</h4>
                <p className="small-text">
                 Flexographic printing relies on precise plate management, where inefficiencies in reuse and inventory significantly impact production costs, material waste, and operational performance.
                </p>
              </div>
              
              <div className="info-card">
                <h4>Current Methodologies</h4>
                <p className="small-text">
                  Traditional plate management depends on manual inspection, operator experience, and static cataloging, often lacking objectivity, real-time adaptation, and systematic tracking.
                </p>
              </div>
              
              <div className="info-card">
                <h4>Emerging Trends</h4>
                <p className="small-text">
                  AI, computer vision, and machine learning are being applied to automate similarity detection, optimize plate reuse, and provide dynamic, data-driven insights for more efficient and sustainable printing operations.
                </p>
              </div>
            </div>
            
            <div className="info-card">
              <h4>Key Findings from Literature</h4>
              <div className="two-column-grid">
                <div className="findings-list">
                  <div className="finding-item">
                    <div className="dot blue-dot"></div>
                    AI-driven similarity detection improves accuracy in identifying reusable flexo plates.
                  </div>
                  <div className="finding-item">
                    <div className="dot blue-dot"></div>
                    Dynamic inventory systems increase efficiency by adapting to production requirements in real time.
                  </div>
                </div>
                <div className="findings-list">
                  <div className="finding-item">
                    <div className="dot green-dot"></div>
                    Automated plate management supports sustainability by reducing material waste and unnecessary plate creation.
                  </div>
                  <div className="finding-item">
                    <div className="dot green-dot"></div>
                    Predictive analytics help optimize production planning, cost savings, and resource utilization.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'gap':
        return (
          <div className="content-section">
            <div className="gap-banner">
              <h3>Identified Research Gaps</h3>
              <p>
                Through analysis, key limitations in current flexographic plate management systems were identified, highlighting the need for AI-based, adaptive solutions. </p>
            </div>
            
            <div className="gap-items">
              <div className="gap-item">
                <div className="gap-icon red-bg">
                  <Target className="icon-medium" />
                </div>
                <div className="gap-content">
                  <h4>Gap 1: Lack of Objective, Real-Time Assessment</h4>
                  <p className="gap-description">
                    Most plate management relies on manual inspection and operator judgment, missing real-time data on plate similarity and reusability.
                  </p>
                  <div className="solution-box blue-solution">
                    <strong>Our Approach:</strong> AI-powered similarity detection captures dimensional, pattern, and usage data in real time.
                  </div>
                </div>
              </div>
              
              <div className="gap-item">
                <div className="gap-icon orange-bg">
                  <Search className="icon-medium" />
                </div>
                <div className="gap-content">
                  <h4>Gap 2: Static and Non-Adaptive Systems</h4>
                  <p className="gap-description">
                   Existing inventory software and digital management tools rarely adjust dynamically to changing production patterns.
                  </p>
                  <div className="solution-box green-solution">
                    <strong>Our Solution:</strong> Adaptive algorithms tailor recommendations based on facility-specific workflows and operational feedback.
                  </div>
                </div>
              </div>
              
              <div className="gap-item">
                <div className="gap-icon purple-bg">
                  <Brain className="icon-medium" />
                </div>
                <div className="gap-content">
                  <h4>Gap 3: Underuse of Similarity Recognition</h4>
                  <p className="gap-description">
                   Current systems fail to utilize real-time pattern matching to optimize plate reuse and minimize unnecessary creation.</p>
                  <div className="solution-box purple-solution">
                    <strong>Our Contribution:</strong> Machine learning-based similarity recognition provides actionable insights for prepress, technical, and back-office teams.
                  </div>
                </div>
              </div>

              <div className="gap-item">
                <div className="gap-icon purple-bg">
                  <Brain className="icon-medium" />
                </div>
                <div className="gap-content">
                  <h4>Gap 4: Limited Comprehensive Platforms</h4>
                  <p className="gap-description">
                   Most solutions focus only on tracking or categorization and do not integrate assessment, monitoring, and optimization.</p>
                  <div className="solution-box purple-solution">
                    <strong>Our Innovation:</strong> A unified platform combining AI-based evaluation, adaptive management, predictive analytics, and real-time dashboards for end-to-end plate optimization.
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      
      case 'methodology':
        return (
          <div className="content-section">
  <div className="methodology-banner">
    <h3>Research Methodology</h3>
    <p>
      Our study employs a mixed-methods approach, combining quantitative performance metrics with 
      qualitative operational insights to ensure accurate and actionable results.
    </p>
  </div>
  
  <div className="two-column-grid">
    <div className="methodology-column">
      <div className="phase-card">
        <h4 className="phase-title">
          <div className="phase-icon blue-bg">
            <Settings className="icon-small" />
          </div>
          Phase 1: Data Collection
        </h4>
        <ul className="phase-list">
          <li>• Gather primary data from production logs, operator feedback, and real-time system performance</li>
          <li>• Collect secondary data from historical plate inventory and ERP records</li>
          <li>• Record metrics during similarity analysis, including reusability scores, pattern match variability, and processing times</li>
        </ul>
      </div>
      
      <div className="phase-card">
        <h4 className="phase-title">
          <div className="phase-icon green-bg">
            <Database className="icon-small" />
          </div>
          Phase 2: Analysis
        </h4>
        <ul className="phase-list">
          <li>• Apply machine learning algorithms for similarity detection and reusability classification</li>
          <li>• Perform statistical and comparative analysis against traditional plate management methods</li>
          <li>• Evaluate operational patterns such as false positives, missed reuse opportunities, and efficiency scores</li>
        </ul>
      </div>
    </div>
    
    <div className="methodology-column">
      <div className="phase-card">
        <h4 className="phase-title">
          <div className="phase-icon orange-bg">
            <Target className="icon-small" />
          </div>
          Phase 3: Implementation
        </h4>
        <ul className="phase-list">
          <li>• Develop and test the prototype of the AI-based plate management system</li>
          <li>• Iteratively refine algorithms based on feedback from prepress, technical, and management teams</li>
          <li>• Optimize system performance to improve real-time similarity detection and recommendations</li>
        </ul>
      </div>
      
      <div className="phase-card">
        <h4 className="phase-title">
          <div className="phase-icon purple-bg">
            <Search className="icon-small" />
          </div>
          Phase 4: Validation
        </h4>
        <ul className="phase-list">
          <li>• Cross-validate model outputs with multiple datasets and historical records</li>
          <li>• Conduct peer review and expert evaluation of recommendations and usability</li>
          <li>• Deploy in real-world printing operations to assess efficiency, cost savings, and sustainability impact</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div className="quality-assurance">
    <h4>Quality Assurance</h4>
    <div className="qa-grid">
      <div className="qa-item">
        <div className="qa-number blue-bg">1</div>
        <div className="qa-title">Reproducibility</div>
        <div className="qa-description">Experiments and similarity analysis are fully documented and repeatable</div>
      </div>
      <div className="qa-item">
        <div className="qa-number green-bg">2</div>
        <div className="qa-title">Reliability</div>
        <div className="qa-description">Validation through multiple datasets, production metrics, and expert feedback</div>
      </div>
      <div className="qa-item">
        <div className="qa-number purple-bg">3</div>
        <div className="qa-title">Validity</div>
        <div className="qa-description">Recommendations and cost-saving insights verified via real-world deployment</div>
      </div>
    </div>
  </div>
</div>

        );
      
      case 'technologies':
        return (
          <div className="content-section">
            <div className="tech-banner">
              <h3>Technology Stack</h3>
              <p>
                Our research leverages modern, scalable, and efficient technologies to deliver a high-performance, AI-powered artwork similarity detection and polymer plate optimization platform.
              </p>
            </div>
            
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-header">
                    <div className="tech-icon">
                      <tech.icon className="icon-medium" />
                    </div>
                    <h4>{tech.name}</h4>
                  </div>
                  <p className="small-text">{tech.description}</p>
                </div>
              ))}
            </div>
       
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
     

      <div className="main-layout">
        <div className="layout-container">
          <div className="sidebar">
            <nav className="nav-container1">
              <h3 className="nav-title1">Sections</h3>
              <ul className="nav-list1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`nav-button ${
                          activeSection === section.id ? 'nav-button-active' : ''
                        }`}
                      >
                        <Icon className="nav-icon" />
                        <span className="nav-text">{section.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="main-content">
            <div className="content-container">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ResearchWebsite;