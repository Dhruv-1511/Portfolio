import React, { useState } from 'react';
import './FeaturedProjects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function FeaturedProjects() {
  const [expandedCards, setExpandedCards] = useState({});

  const projectsData = [
    {
      title: "Snapmint",
      description: "Snapmint is a digital platform that offers easy, cardless EMI options for online shopping. It enables customers to purchase a wide range of products like electronics, appliances, and fashion items with zero-cost EMIs, making shopping more affordable without requiring credit cards. The process is paperless, quick, and designed to cater to users from across India, including Tier 2-5 cities, helping businesses increase their customer base and average order value",
      image: "https://snapmint.com/assets/images/logo_v2.svg",
      githubLink: "",
      liveLink: "https://snapmint.com/",
      techStack: ["React JS", "Tailwind", "JavaScript", "HTML", "Node JS"]
    },
    {
      title: "Positivus",
      description: "This fully responsive website, designed for a digital marketing company, was built using ReactJS and styled with Tailwind CSS. It offers a sleek and modern user interface, optimized for seamless performance across all devices.",
      image: "positivus.png",
      githubLink: "https://github.com/Dhruv-1511/Positivus.git",
      liveLink: "https://positivs.netlify.app/",
      techStack: ["React JS", "Tailwind", "JavaScript", "HTML"]
    },
    {
      title: "Freefuse",
      description: "This fully responsive website, designed for a digital marketing company, was built using ReactJS and styled with Tailwind CSS. It offers a sleek and modern user interface, optimized for seamless performance across all devices.",
      image: "https://freefuse.com/assets/img/FreeFuse-Purple.svg",
      githubLink: "",
      liveLink: "https://freefuse.com/",
      techStack: ["React JS", "Redux", "Tailwind", "JavaScript", "HTML"]
    }
  ];

  const toggleDescription = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="featured-projects" id="project">
      <h2></h2>
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div 
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="project-image">
              <img src={project.image} alt={`${project.title} Project`} />
              <div className="project-overlay">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className={`project-description ${!expandedCards[index] ? 'truncated' : ''}`}>
                {project.description}
              </div>
              <button 
                className="show-more-btn"
                onClick={() => toggleDescription(index)}
              >
                {expandedCards[index] ? 'Show Less' : 'Show More'}
              </button>
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects; 