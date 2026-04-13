import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Shared/Card';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  // Dynamically derive categories from project data
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="projects-page section container">
      <div className="section-header">
        <span className="subtitle">Portfolio</span>
        <h2 className="section-title">My Work</h2>
      </div>

      <div className="filter-bar">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="project-card">
            <div className="project-card-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project-card-content">
              <div className="platform-badges">
                {project.platforms.map((platform, idx) => (
                  <div key={idx} className="platform-badge">
                    <img 
                      src={platform.icon} 
                      alt={platform.name}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span>{platform.name}</span>
                  </div>
                ))}
              </div>

              <div className="project-category">{project.category}</div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.tagline}</p>
              
              <Link to={`/projects/${project.slug}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
