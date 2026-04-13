import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    "AI Automation", "AI System Architecture", "LLM Integration", 
    "Workflow Scaling", "Process Optimization", "AI Implementation",
    "Bubble.io", "n8n / Make.com", "AI Agents & RAG"
  ];

  return (
    <div className="about-page section container">
      <div className="about-grid">
        <div className="about-bio">
          <span className="subtitle">My Journey</span>
          <h2 className="section-title">Bridging Tech and Strategy</h2>
          <p className="about-text">
            I am an AI Automation Engineer with a deep passion for building intelligent systems. 
            My focus is on designing and implementing AI solutions that accelerate and scale 
            business operations from a strategic perspective.
          </p>
          <p className="about-text">
            I believe that technology should be an enabler of human potential, 
            which is why I specialize in AI automations and system integrations that 
            free up time for high-level creative work and strategic growth.
          </p>
          
          <div className="skills-section">
            <h3>Skills & Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <CheckCircle size={16} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
