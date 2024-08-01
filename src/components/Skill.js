import React from 'react'
import './Skill.css';
import 'aos/dist/aos.css'
import Aos from 'aos';
import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { FaCss3Alt } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandCpp } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';

function Skill() {
  Aos.init({
    once:'true'
  });
  return (
    <>
      <div id='skill'>My Skills</div>

      <div className='cointainer'>
        <div className='container2' data-aos='fade-right' data-aos-duration="300">
          <div className='icon'>
            <FaHtml5 />
          </div>
          <p className='sname'>HTML</p>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="450">
          <div className='icon'>
            <FaCss3Alt />
          </div>
          <p className='sname'>CSS</p>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="600">
          <div className='icon'>
          <IoLogoJavascript />
          </div>
          <p className='sname'>JAVASCRIPT</p>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="750">
          <div className='icon'>
          <FaReact />
          </div>
          <p className='sname'>REACT</p>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="950">
          <div className='icon'>
          <FaJava />
          </div>
          <p className='sname'>JAVA</p>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="1100">
          <div className='icon'>
          <TbBrandCpp />
          </div>
          <p className='sname'>C++</p>
        </div>

        <div className='container2' data-aos='fade-right' data-aos-duration="1250">
          <div className='icon'>
          <GrMysql />
          </div>
          <p className='sname'>SQL</p>
        </div>

      </div>
    </>
  )
}

export default Skill;