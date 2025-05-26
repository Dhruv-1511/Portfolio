import React from 'react';
import './Project.css';

function Project() {
  return (
    <>
      <div id='project'>My Projects</div>

          <div className='projcont'>
            <div className='project'>
              <div className='project-info'>
                <h2>1. Snap-mint</h2><br />
                <p className='content'>Tech-stack:  React JS, HTML, TAILWIND CSS, NodeJS.<br /><br />Snapmint is a digital platform that offers easy, cardless EMI options for online shopping. It enables customers to purchase a wide range of products like electronics, appliances, and fashion items with zero-cost EMIs, making shopping more affordable without requiring credit cards. The process is paperless, quick, and designed to cater to users from across India, including Tier 2-5 cities, helping businesses increase their customer base and average order value.</p>
              </div>
              <div className='project-links'>
                <a href='https://snapmint.com/' className='btn-box'>See Project</a>
              </div>
            </div>

            <div className='project'>
              <div className='project-info'>
                <h2>2. Positivus</h2><br />
                <p className='content'>Tech-stack: React JS, HTML, TAILWIND CSS, JAVASCRIPT.<br /><br />
                This fully responsive website, designed for a digital marketing company, was built using ReactJS and styled with Tailwind CSS. It offers a sleek and modern user interface, optimized for seamless performance across all devices.</p>
              </div>
              <div className='project-links'>
                <a href='https://positivs.netlify.app/' className='btn-box'>See Project</a>
              </div>
            </div>
            
            <div className='project'>
              <div className='project-info'>
                <h2>3. Freefuse</h2><br />
                <p className='content'>Tech-stack: React JS, REDUX, NODE, JavaScript, HTML, CSS, AWS.<br /><br />
                Freefuse is a website. Basically, A Multi-path Media with micro content experience focused on 
helping empower creators and viewers through personalized pathways and relevant contents. The app 
looks like a combination of multi content creation apps. Most focused feature is creating content in tree 
format like linked with parent content. </p>
              </div>
              <div className='project-links'>
                <a href='https://freefuse.com/' className='btn-box'>See Project</a>
              </div>
            </div>

      </div>
    </>
  );
}

export default Project;
