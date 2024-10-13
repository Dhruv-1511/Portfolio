import './About.css';
import { MenuOutlined } from '@ant-design/icons';

function About() {
  return (
    <>
      <div id='about'>
        <div className='navbar'>
          <MenuOutlined className='menu'/>
          <nav>
            <a className="nav1" href="#about">About Me</a>
            <a href="#skill">Skills</a>
            <a href="#education">Education</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <br />
        <div className="container">
          <div className="text-content">
            <p className='title1'>Hi 👋 ,<br />
              I’m Dhruv,<br />
              Front-end Developer</p>
            <p className='title2'>
            Hello, I'm Dhruv Sheladiya,dedicated frontend developer with a relentless passion in React Technology. Currently pursuing my Bachelor's in Computer Applications (BCA) at SDJ International College, I thrive on challenges and continually seek to expand my skills in web development.
            </p><br/>
            <p className='title2'>
              I design and develop experiences that make people’s lives simpler through Websites. I work with  HTML5, CSS3, JavaScript, React.A passionate and dedicated React developer with a strong background in Web Developing and a flair for problem-solving.
            </p>
            <div className='btn-container'>
              <button className='btn1'>HIRE ME</button>
              <button className='btn2'>SEE MY PROJECT</button>
            </div>
          </div>
          <div className='img-container'>
            <img src="picture.png" className='side-image' alt="Developer working" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
