import './About.css';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['about', 'skill', 'education', 'experience', 'project', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div id='about'>
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <MenuOutlined className='menu' onClick={toggleMenu} />
          <nav className={isMenuOpen ? 'active' : ''}>
            <CloseOutlined className='menu' onClick={toggleMenu} style={{ position: 'absolute', top: '2rem', right: '2rem' }} />
            <a 
              className={activeSection === 'about' ? 'active' : ''} 
              href="#about"
              onClick={() => handleNavClick('about')}
            >
              About Me
            </a>
            <a 
              className={activeSection === 'skills' ? 'active' : ''} 
              href="#skills"
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </a>
            <a 
              className={activeSection === 'education' ? 'active' : ''} 
              href="#education"
              onClick={() => handleNavClick('education')}
            >
              Education
            </a>
            <a 
              className={activeSection === 'experience' ? 'active' : ''} 
              href="#experience"
              onClick={() => handleNavClick('experience')}
            >
              Experience
            </a>
            <a 
              className={activeSection === 'project' ? 'active' : ''} 
              href="#project"
              onClick={() => handleNavClick('project')}
            >
              Project
            </a>
            <a 
              className={activeSection === 'contact' ? 'active' : ''} 
              href="#contact"
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="container">
          <div className="text-content">
            <div className="greeting">
              <span className="wave">👋</span>
              <h1>Hi, I'm Dhruv</h1>
            </div>
            <h2 className="role">Front-end Developer</h2>
            <div className="description">
              <p>
                Hello, I'm Dhruv Sheladiya, a dedicated frontend developer with a relentless passion in React Technology. Currently pursuing my Bachelor's in Computer Applications (BCA) at SDJ International College, I thrive on challenges and continually seek to expand my skills in web development.
              </p>
              <p>
                I design and develop experiences that make people's lives simpler through Websites. I work with HTML5, CSS3, JavaScript, React JS, and Tailwind CSS. A passionate and dedicated React developer with a strong background in Web Developing and a flair for problem-solving.
              </p>
            </div>
            <div className="social-links">
              <a href="https://github.com/Dhruv-1511" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/dhruv-sheladiya-a350582a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/+919510334996" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
            <div className='btn-container'>
              <a href="#contact" className='btn1'>HIRE ME</a>
              <a href="#project" className='btn2'>SEE MY PROJECT</a>
            </div>
          </div>
          <div className='img-container'>
            <div className="image-wrapper">
              <img src="picture.png" className='side-image' alt="Developer working" />
              <div className="image-backdrop"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
