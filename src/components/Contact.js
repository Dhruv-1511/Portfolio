import React from 'react'
import './Contact.css';
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div id='contact'>Contact Me</div>
      <p className='content2'>Let's Work Together!</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/dhruv-sheladiya-a350582a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
        <a href="https://github.com/Dhruv-1511"><FaGithub /></a>
        <a href="https://wa.me/+919510334996"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/dhruv_15_11_?igsh=MWUzcmp5ejdla21hcg=="><FaInstagram /></a>
        <a href="mailto:dhruvsheladiya07@gmail.com"><SiGmail /></a>
      </div>

      <hr/>
      <footer>© Coding excellence at your service - developed by Dhruv Sheladiya</footer>

    </>
  )
}

export default Contact;