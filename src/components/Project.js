import React from 'react';
import './Project.css';

function Project() {
  return (
    <>
      <div id='project'>My Projects</div>

          <div className='projcont'>
            <div className='project'>
              <div className='project-info'>
                <h2>1. Travel Booking Website</h2><br />
                <p className='content'>Developed a Travel Booking Website. This website is made with HTML, CSS, and Bootstrap. It only includes the frontend of the website. This website shows many places where we can go for Trip.<br /><br /><br /></p>
              </div>
              <div className='project-links'>
                <a href='https://github.com/Dhruv-1511/Traveling.git' className='btn-box'>See Project</a>
              </div>
            </div>

            <div className='project'>
              <div className='project-info'>
                <h2>2. Library Management System</h2><br />
                <p className='content'>Developing a Library Management System.This System CAn keep Record of Admin Side and user Side.Admin Can Keep Record of Book Borrow by which Person and when they did return etx.<br /><br /><br /></p>
                <div className='project-links'>
                  <a href='https://github.com/Dhruv-1511/Library-Management-System.git' className='btn-box'>See Project</a>
                </div>
              </div>
            </div>

      </div>
    </>
  );
}

export default Project;
