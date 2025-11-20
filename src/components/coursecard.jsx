import React from 'react';
import './CourseCard.css';

function CourseCard({ title, description, index }) {
  // Random image for each card
  const image = `https://picsum.photos/220/120?random=${index + 1}`;

  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CourseCard;
