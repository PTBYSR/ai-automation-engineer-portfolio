import Hero from '../components/Hero/Hero';
import Card from '../components/Shared/Card';
import { Link } from 'react-router-dom';
import { Cpu, Rocket, BarChart, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <Cpu size={32} />,
      title: "AI Automation",
      description: "Implementing cutting-edge AI solutions to streamline business processes and increase efficiency."
    },
    {
      icon: <Rocket size={32} />,
      title: "AI System Architecture",
      description: "Designing robust and scalable AI infrastructures to power business-critical automations."
    },
    {
      icon: <BarChart size={32} />,
      title: "Process Optimization",
      description: "Analyzing and re-engineering workflows to maximize speed and efficiency through AI."
    }
  ];

  // Get the 3 most recent projects for the home page
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="home-page">
      <Hero />
      
      <section className="section container">
        <div className="section-header">
          <span className="subtitle">Expertise</span>
          <h2 className="section-title">What I Do</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section featured-projects-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <Link to={`/projects/${project.slug}`} key={project.id} className="featured-card-wrapper">
                <Card className="featured-project-card">
                  {project.image && (
                    <div className="featured-image-container">
                      <img src={project.image} alt={project.title} />
                    </div>
                  )}
                  <div className="featured-content">
                    <h3>{project.title}</h3>
                    <p>{project.tagline}</p>
                    <div className="featured-platforms">
                      {project.platforms.slice(0, 3).map((platform, idx) => (
                        <span key={idx} className="platform-tag">{platform.name}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="featured-actions">
            <Link to="/projects" className="btn btn-primary">
              View All Projects <ExternalLink size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
