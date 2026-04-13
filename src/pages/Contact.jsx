import React, { useState } from 'react';
import Card from '../components/Shared/Card';
import { Mail, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    
    // Using Web3Forms - you can get a free access key at https://web3forms.com/
    // It's a lightweight way to receive form submissions via email without a backend
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              placeholder="email@example.com" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              name="message" 
              rows="5" 
              placeholder="Tell me about your project..." 
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary form-submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              'Sending...'
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="form-status success">
              <CheckCircle size={18} />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="form-status error">
              <AlertCircle size={18} />
              <span>Something went wrong. Please try again or email me directly.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
