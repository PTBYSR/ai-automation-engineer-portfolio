import './Footer.css';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Paul-Simon Emechebe</h3>
          <p>AI Automation Engineer</p>
        </div>
        
        <div className="footer-links">
          <h4>Navigate</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Social</h4>
          <div className="social-icons">
            <a href="mailto:paul.emechebe@gmail.com"><Mail size={20} /></a>
            <a href="https://www.linkedin.com/in/paul-simon-emechebe-babbb726a/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Paul-Simon Emechebe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
