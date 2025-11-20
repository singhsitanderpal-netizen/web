import React, { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => setShowMore(!showMore);

  return (
    <div
      id="about"
      style={{
        padding: "80px 20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>About EduSite</h2>

      <p style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.6" }}>
        EduSite is a modern learning platform built to help students learn
        anytime, anywhere. We provide structured online courses across various
        fields like programming, data science, and cloud computing.
        <br />
        <br />
        Our goal is to make learning **affordable and accessible** for
        everyone. We believe in practical, project-based teaching where students
        not only learn but also apply knowledge through real projects.
      </p>

      {showMore && (
        <div style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.6" }}>
          <h3>Our Mission</h3>
          <p>
            To empower learners with the skills they need to succeed in the
            modern digital world.
          </p>
          <h3>Our Vision</h3>
          <p>
            A world where education is accessible, interactive, and practical —
            bridging the gap between learning and earning.
          </p>
          <h3>Meet Our Team</h3>
          <p>
            We’re a passionate group of educators, developers, and designers who
            believe in creating meaningful learning experiences for all.
          </p>
        </div>
      )}

      <button
        onClick={toggleReadMore}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#ff416c",
          color: "white",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}

export default About;
