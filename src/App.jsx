import React, { useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import CourseCard from './components/coursecard';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  // ---- Courses Data ----
  const allCourses = [
    { title: 'Web Development', description: 'Learn HTML, CSS, and JavaScript from scratch.' },
    { title: 'Python Programming', description: 'Master Python with hands-on projects.' },
    { title: 'Data Analysis', description: 'Analyze data using Excel, Pandas & Power BI.' },
    { title: 'Cloud Computing', description: 'Understand AWS, Azure, and modern cloud tools.' },
    { title: 'AI & Machine Learning', description: 'Learn how machines think using Python & TensorFlow.' },
  ];

  // ---- States & Refs ----
  const [searchTerm, setSearchTerm] = useState('');
  const homeRef = useRef(null);
  const coursesRef = useRef(null);
  const featuredRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // ---- Filter Courses ----
  const filteredCourses = allCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---- Smooth scroll ----
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App font-sans bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar
        onHome={() => scrollToSection(homeRef)}
        onCourses={() => scrollToSection(coursesRef)}
        onFeatured={() => scrollToSection(featuredRef)}
        onAbout={() => scrollToSection(aboutRef)}
        onContact={() => scrollToSection(contactRef)}
      />

      {/* Hero Section */}
      <section ref={homeRef} id="home">
        <Hero onGetStarted={() => scrollToSection(coursesRef)} />
      </section>

      {/* Featured Courses */}
      <section ref={featuredRef} id="featured" className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Featured Courses
        </h2>
        <FeaturedCourses />
      </section>

      {/* Search Bar */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Search Courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px 15px',
            width: '250px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* Courses Section */}
      <section
        ref={coursesRef}
        id="courses"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px',
          padding: '0 20px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={index}
            index={index}
            title={course.title}
            description={course.description}
          />
        ))}
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          About Us
        </h2>
        <About />
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h2>
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
