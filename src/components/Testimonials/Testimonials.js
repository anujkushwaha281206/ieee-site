import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Joining the IEEE student branch at RGPV has been an amazing journey of learning and growth.",
    author: "Alice Johnson, Member"
  },
  {
    quote: "The workshops and mentorship programs have helped me advance my technical skills tremendously.",
    author: "Bob Smith, Member"
  },
  {
    quote: "Being part of IEEE has connected me with passionate peers and exciting projects.",
    author: "Carol Lee, Member"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials" aria-label="Testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((t, index) => (
          <blockquote key={index} className="testimonial">
            <p className="quote">"{t.quote}"</p>
            <footer className="author">- {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
