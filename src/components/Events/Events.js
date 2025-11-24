import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <div id="events" className="events">
      <div className="events-container">
        <h2>Our Events</h2>
        <div className="event-placeholder">
          <p>Event 1</p>
        </div>
        <div className="event-placeholder">
          <p>Event 2</p>
        </div>
        <div className="event-placeholder">
          <p>Event 3</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
