import './Hero.css';
import profileImg from '../../assets/profile.png';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content fade-in">
        <span className="subtitle">AI Automation Engineer</span>
        <h1 className="hero-title">Building AI systems to accelerate and scale business operations</h1>
        <p className="hero-description">
          I am Paul-Simon Emechebe, an AI Automation Engineer focused on building 
          intelligent systems that streamline operations and drive strategic efficiency.
        </p>
        <div className="hero-btns">
          <button className="btn btn-primary">View Projects</button>
          <button className="btn btn-secondary">Contact Me</button>
        </div>
      </div>
      <div className="hero-image-container fade-in">
        <img src={profileImg} alt="Paul-Simon Emechebe" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
