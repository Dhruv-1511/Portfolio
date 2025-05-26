import React from 'react'
import './Skill.css';
import 'aos/dist/aos.css'
import Aos from 'aos';
import { FaHtml5, FaJava, FaReact, FaGithub, FaCode, FaTools } from "react-icons/fa";
import { FaCss3Alt } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

function Skill() {
  Aos.init({
    once:'true'
  });
  return (
    <>
      <h2 id='skills' className="section-title">Technical Skills</h2>
      
      <div className="skills-intro">
        <p>I specialize in creating responsive, user-friendly web applications with modern technologies</p>
      </div>

      <div className='cointainer'>
        <div className='container2' data-aos='fade-right' data-aos-duration="300">
          <div className='icon'>
            <FaHtml5 />
          </div>
          <p className='sname'>HTML</p>
          <div className="skill-level">
            <div className="progress-bar" style={{width: '90%'}}></div>
          </div>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="450">
          <div className='icon'>
            <FaCss3Alt />
          </div>
          <p className='sname'>CSS</p>
          <div className="skill-level">
            <div className="progress-bar" style={{width: '80%'}}></div>
          </div>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="600">
          <div className='icon'>
            <IoLogoJavascript />
          </div>
          <p className='sname'>JAVASCRIPT</p>
          <div className="skill-level">
            <div className="progress-bar" style={{width: '80%'}}></div>
          </div>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="750">
          <div className='icon'>
            <FaReact />
          </div>
          <p className='sname'>REACT</p>
          <div className="skill-level">
            <div className="progress-bar" style={{width: '85%'}}></div>
          </div>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="950">
          <div className='icon'>
            <RiNextjsFill />
          </div>
          <p className='sname'>Next Js</p>
          <div className="skill-level">
            <div className="progress-bar" style={{width: '50%'}}></div>
          </div>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="1100">
          <div className='icon'>
            <FaGithub />
          </div>
          <p className='sname'>Git</p>
          <div className="skill-level">
            <div className="progress-bar" style={{width: '80%'}}></div>
          </div>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="1250">
          <div className='icon'>
            <RiTailwindCssFill />
          </div>
          <p className='sname'>Tailwind</p>
          <div className="skill-level">
            <div className="progress-bar" style={{width: '90%'}}></div>
          </div>
        </div>
      </div>

      <div className="additional-skills">
        <h3>Development Tools & Practices</h3>
        <div className="tools-container">
          <div className="tool-item">
            <FaCode />
            <span>Clean Code</span>
          </div>
          <div className="tool-item">
            <FaTools />
            <span>Problem Solving</span>
          </div>
          <div className="tool-item">
            <FaGithub />
            <span>Version Control</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill;