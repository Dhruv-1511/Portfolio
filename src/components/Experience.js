import { CiLocationOn } from 'react-icons/ci';
import './Experience.css';
import { FaBriefcase, FaCode, FaUsers, FaChartLine } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      title: "Nodewave Innovators",
      company: "Junior ReactJS Developer",
      period: "Jan 2024 - Jan 2025",
      description: "Worked on React-based web applications, implementing responsive designs and user interfaces. Collaborated with senior developers to learn and implement best practices in React development. Assisted in building and maintaining frontend components while learning about state management and performance optimization.",
      location: "Surat, India",
      skills: ["React JS", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "GitHub"],
      achievements: [
        "Learned and implemented modern React practices and patterns",
        "Gained hands-on experience with Git version control and CI/CD",
        "Created responsive layouts using CSS Grid and Flexbox for multiple device sizes"
      ]
    },
    {
      title: "Slashstar",
      company: "Junior ReactJS Developer",
      period: "Jan 2025 - Present",
      description: "Learning and implementing advanced React concepts including custom hooks, context API, and performance optimization techniques. Working with modern UI libraries and tools to create interactive and accessible web applications. Focusing on writing clean, maintainable code while learning best practices from senior developers.",
      location: "Surat, India",
      skills: ["React JS", "Redux", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "GitHub"],
      achievements: [
        "Implemented Shadcn UI components and custom animations for enhanced user experience",
        "Developed form validation and error handling using React Hook Form",
        "Integrated REST APIs and implemented data fetching with React Query"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot">
              <FaBriefcase  />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="timeline-period">
                <span className="period">{exp.period}</span>
                <span className="location"><CiLocationOn className="icon" style={{height: "20px", width:"20px"}} /> {exp.location}</span>
              </div>
              <p className="timeline-description">{exp.description}</p>
              <div className="achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>
                      <FaCode className="icon" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="timeline-skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {/* <FaUsers className="icon" /> */}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience; 