import React from 'react'
import './DetailsBody.css'
import eventDetails from "../db/details";

function EventDetailsComponent({ eventId }) {
  const details = eventDetails[eventId];

  if (!details) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h1 className='ename'>{details.name}</h1>
      <div className="section">
        <h2>Event Schedule</h2>
        {details.eventSchedule.map((scheduleItem, index) => (
          <p key={index}>{scheduleItem}</p>
        ))}
      </div>
      <div className="section">
        <h2>Participants</h2>
        <p>{details.participants}</p>
      </div>
      <div className="section">
        <h2>Event Location</h2>
        <p>{details.eventLocation}</p>
        <p>{details.eventLocationDescription}</p>
      </div>
    </div>
  );
}

export default EventDetailsComponent;