import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="logo">
          Paul-Simon Emechebe
        </NavLink>

        {/* Desktop Links */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (simplified for now) */}
      {isOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          background: 'white',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid var(--border-light)',
          zIndex: 999
        }}>
          <NavLink to="/" onClick={toggleMenu} className="nav-link">Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="nav-link">About</NavLink>
          <NavLink to="/projects" onClick={toggleMenu} className="nav-link">Projects</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="nav-link">Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
