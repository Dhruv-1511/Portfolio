import React from 'react';
import './Connect.css';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

function Connect() {
  return (
    <div id="contact" className="connect-section">
      <h2 className='section-title'>Let's Connect</h2>
      
      <p className="connect-intro">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
      
      <div className="connect-grid">
        <a href="https://www.linkedin.com/in/dhruv-sheladiya-a350582a6" className="connect-card" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
          <span>LinkedIn</span>
          <p>Connect professionally</p>
        </a>

        <a href="https://github.com/Dhruv-1511" className="connect-card" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span>GitHub</span>
          <p>Check my code</p>
        </a>

        <a href="https://wa.me/+919510334996" className="connect-card" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
          <span>WhatsApp</span>
          <p>Chat directly</p>
        </a>

        <a href="mailto:dhruvsheladiya07@gmail.com" className="connect-card">
          <SiGmail />
          <span>Email</span>
          <p>Send a message</p>
        </a>

        <a href="https://www.instagram.com/dhruv_15_11_" className="connect-card" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          <span>Instagram</span>
          <p>Follow me</p>
        </a>
      </div>

      <div className="quick-contact">
        <h3>Quick Contact</h3>
        <p>Email: dhruvsheladiya07@gmail.com</p>
        <p>Phone: +91 9510334996</p>
        <p>Location: Surat, Gujarat, India</p>
      </div>
    </div>
  );
}

export default Connect; 