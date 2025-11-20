import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ onHome, onCourses, onFeatured, onAbout, onContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (callback) => {
    callback();
    setIsOpen(false); // Close menu on click
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#ff416c',
      color: 'white',
      position: 'fixed',   // <-- changed from sticky to fixed
      top: 0,
      left: 0,
      width: '100%',       // full width
      zIndex: 1000,
      flexWrap: 'wrap',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)' // optional: adds a shadow
    }}>
      {/* Logo */}
      <div style={{ fontWeight: 'bold', fontSize: '20px', cursor: 'pointer' }} onClick={() => handleClick(onHome)}>
        EduSite
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu} style={{ display: 'none', fontSize: '24px', cursor: 'pointer' }}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        flexDirection: isOpen ? 'column' : 'row',
        width: isOpen ? '100%' : 'auto',
        marginTop: isOpen ? '10px' : '0',
        transition: 'all 0.3s'
      }}>
        <li><span onClick={() => handleClick(onHome)} style={{ cursor: 'pointer', color: 'white' }}>Home</span></li>
        <li><span onClick={() => handleClick(onCourses)} style={{ cursor: 'pointer', color: 'white' }}>Courses</span></li>
        <li><span onClick={() => handleClick(onFeatured)} style={{ cursor: 'pointer', color: 'white' }}>Featured</span></li>
        <li><span onClick={() => handleClick(onAbout)} style={{ cursor: 'pointer', color: 'white' }}>About</span></li>
        <li><span onClick={() => handleClick(onContact)} style={{ cursor: 'pointer', color: 'white' }}>Contact</span></li>
      </ul>

      {/* Mobile Menu Styles */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger { display: block; }
          nav ul { display: ${isOpen ? 'flex' : 'none'}; flex-direction: column; }
          nav ul li { margin: 10px 0; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
