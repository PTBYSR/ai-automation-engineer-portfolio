import Card from '../components/Shared/Card';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page section container">
      <div className="section-header">
        <span className="subtitle">Get in Touch</span>
        <h2 className="section-title">Let's Connect</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <Card className="info-card">
            <Mail className="info-icon" />
            <div className="info-content">
              <h4>Email</h4>
              <p>paul.emechebe@gmail.com</p>
            </div>
          </Card>
          
          <a href="https://www.linkedin.com/in/paul-simon-emechebe-babbb726a/" target="_blank" rel="noopener noreferrer" className="info-card-link">
            <Card className="info-card">
              <Linkedin className="info-icon" />
              <div className="info-content">
                <h4>LinkedIn</h4>
                <p>Connect on LinkedIn</p>
              </div>
            </Card>
          </a>

          <Card className="info-card">
            <MapPin className="info-icon" />
            <div className="info-content">
              <h4>Location</h4>
              <p>Lagos, Nigeria</p>
            </div>
          </Card>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary form-submit">
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
