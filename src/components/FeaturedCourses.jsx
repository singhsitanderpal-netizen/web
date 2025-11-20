import React, { useState } from 'react';
import CourseCard from './CourseCard';

function FeaturedCourses() {
  const courses = [
    { title: 'React JS', description: 'Learn React from scratch' },
    { title: 'Node JS', description: 'Backend development with Node' },
    { title: 'AWS Cloud', description: 'Learn AWS basics' },
    { title: 'Data Science', description: 'Python, Pandas, Matplotlib' },
    { title: 'Cyber Security', description: 'Learn Security fundamentals' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const next = () => setStartIndex((prev) => (prev + 1) % courses.length);
  const prev = () => setStartIndex((prev) => (prev - 1 + courses.length) % courses.length);

  const visibleCourses = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleCourses.push(courses[(startIndex + i) % courses.length]);
  }

  return (
    <div id="featured" style={{ textAlign: 'center', margin: '40px 0' }}>
      <h2>Featured Courses</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        overflow: 'hidden',
        flexWrap: 'nowrap',
        padding: '0 20px'
      }}>
        <button onClick={prev} style={{ fontSize: '20px', cursor: 'pointer' }}>◀</button>
        {visibleCourses.map((course, index) => (
          <CourseCard key={index} title={course.title} description={course.description} index={index} />
        ))}
        <button onClick={next} style={{ fontSize: '20px', cursor: 'pointer' }}>▶</button>
      </div>
    </div>
  );
}

export default FeaturedCourses;
