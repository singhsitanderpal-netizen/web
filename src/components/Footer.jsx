import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const socialStyle = {
    color: 'white',
    margin: '0 10px',
    fontSize: '20px',
    transition: 'all 0.3s',
    cursor: 'pointer'
  };

  const hoverColors = {
    facebook: '#3b5998',
    twitter: '#1DA1F2',
    instagram: '#C13584',
    linkedin: '#0077B5'
  };

  const handleHover = (e, color) => e.target.style.color = color;
  const handleLeave = (e) => e.target.style.color = 'white';

  return (
    <div style={{
      backgroundColor: '#222',
      color: 'white',
      padding: '30px 20px',
      textAlign: 'center',
      marginTop: '40px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h3 style={{ marginBottom: '10px' }}>EduSite</h3>
      <p style={{ marginBottom: '10px' }}>Learn anything, anywhere. Join thousands of learners worldwide.</p>
      <div style={{ marginBottom: '10px' }}>
        <a href="#about" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Contact</a>
        <a href="#privacy" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Privacy</a>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <FaFacebookF
          style={socialStyle}
          onMouseEnter={e => handleHover(e, hoverColors.facebook)}
          onMouseLeave={handleLeave}
        />
        <FaTwitter
          style={socialStyle}
          onMouseEnter={e => handleHover(e, hoverColors.twitter)}
          onMouseLeave={handleLeave}
        />
        <FaInstagram
          style={socialStyle}
          onMouseEnter={e => handleHover(e, hoverColors.instagram)}
          onMouseLeave={handleLeave}
        />
        <FaLinkedinIn
          style={socialStyle}
          onMouseEnter={e => handleHover(e, hoverColors.linkedin)}
          onMouseLeave={handleLeave}
        />
      </div>
      <p style={{ fontSize: '12px', color: '#aaa' }}>© 2025 EduSite. All rights reserved.</p>
    </div>
  );
}

export default Footer;
