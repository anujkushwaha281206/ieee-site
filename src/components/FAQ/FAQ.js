import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is IEEE?",
    answer: "IEEE is the world's largest technical professional organization dedicated to advancing technology for humanity."
  },
  {
    question: "How can I join the IEEE student branch at RGPV?",
    answer: "You can join by attending our events and contacting the student branch officers via the contact form."
  },
  {
    question: "What types of events do you organize?",
    answer: "We organize workshops, hackathons, technical talks, and hands-on project sessions."
  },
  {
    question: "Are IEEE events open to all majors?",
    answer: "Yes, our events are open to students of all majors interested in technology and innovation."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq" aria-label="Frequently Asked Questions">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleIndex(index)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') toggleIndex(index);
            }}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <div className="faq-question">{item.question}</div>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
              style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
