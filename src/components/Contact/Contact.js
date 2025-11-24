import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Get in touch with us.</p>
        {/* A simple form placeholder */}
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
