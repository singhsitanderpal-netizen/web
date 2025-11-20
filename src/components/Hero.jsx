import React from 'react';

function Hero({ onGetStarted }) {
  const bgImage = `https://picsum.photos/1200/500?random=${Math.floor(Math.random() * 1000)}`;

  return (
    <div
      id="home"
      style={{
        width: '100%',
        padding: '100px 20px',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        boxSizing: 'border-box',
        position: 'relative'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 0
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>Learn Anytime, Anywhere</h1>
        <p>Join thousands of learners and improve your skills</p>
        <button
          onClick={onGetStarted}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#ff4b2b',
            color: '#fff',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={e => e.target.style.backgroundColor = '#e63900'}
          onMouseLeave={e => e.target.style.backgroundColor = '#ff4b2b'}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
