import './App.css';
import About from './components/About';
import Skills from './components/Skill';
import Education from './components/Education';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App">
      <About />
      <Skills />
      <Education />
      <Experience />
      <FeaturedProjects />
      <Connect />
    </div>
  );
}

export default App;