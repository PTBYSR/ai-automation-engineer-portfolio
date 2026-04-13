import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="container section center">
        <h2>Project Not Found</h2>
        <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
      </div>
    );
  }

  const { details } = project;

  return (
    <div className="project-detail-page section">
      <div className="container">
        {/* Navigation */}
        <div className="project-nav fade-in">
          <Link to="/projects" className="back-link">
            <span>←</span> Back to Projects
          </Link>
          <span className="project-meta">{project.category} • {details.completionDate}</span>
        </div>

        {/* Hero Section */}
        <div className="project-hero fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-tagline">{project.tagline}</p>
          
          <div className="project-actions">
            {details.githubUrl && details.githubUrl !== '#' && (
              <a href={details.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Source Code</a>
            )}
          </div>

          {project.image && (
            <div className="project-main-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="project-grid">
          <div className="project-content-main fade-in" style={{ animationDelay: '0.2s' }}>
            <section className="detail-section">
              <h3>Overview</h3>
              <p>{details.overview}</p>
            </section>

            <section className="detail-section">
              <h3>The Challenge</h3>
              <p>{details.challenge}</p>
            </section>

            <section className="detail-section">
              <h3>The Solution</h3>
              <div className="solution-content">
                <p>{details.solution}</p>
              </div>
            </section>

            <section className="detail-section">
              <h3>Key Features</h3>
              <div className="features-grid">
                {details.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Extra Info */}
          <aside className="project-sidebar fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="sidebar-section">
              <h3>Platforms & Tools</h3>
              <div className="sidebar-platforms">
                {project.platforms.map((platform, index) => (
                  <div key={index} className="sidebar-platform-item">
                    {platform.icon && (
                      <img 
                        src={platform.icon} 
                        alt={platform.name} 
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    )}
                    <span>{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section results-card">
              <h3>The Results</h3>
              <p>{details.results}</p>
            </div>

            {/* Video Walkthrough Carousel */}
            {(details.videoUrls?.length > 0 || (details.videoUrl && details.videoUrl !== '#')) && (
              <div className="sidebar-section">
                <VideoCarousel videos={details.videoUrls || [details.videoUrl]} />
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

const VideoCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  if (videos.length === 0) return null;

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="video-carousel">
      <div className="carousel-header">
        <h3>Video Walkthrough</h3>
        {videos.length > 1 && (
          <span className="carousel-counter">
            {currentIndex + 1} / {videos.length}
          </span>
        )}
      </div>
      
      <div className="video-container">
        <iframe 
          src={videos[currentIndex]} 
          title={`Project Demo ${currentIndex + 1}`} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {videos.length > 1 && (
        <div className="carousel-controls">
          <button onClick={prevVideo} className="carousel-btn" aria-label="Previous video">
            ←
          </button>
          <div className="carousel-dots">
            {videos.map((_, idx) => (
              <button 
                key={idx} 
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to video ${idx + 1}`}
              />
            ))}
          </div>
          <button onClick={nextVideo} className="carousel-btn" aria-label="Next video">
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
