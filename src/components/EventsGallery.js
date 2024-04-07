import React from "react";
import galleryData from "../db/galleryData";
import "./EventsGallery.css"; // Import the CSS file for styles

function EventsGallery() {
  return (
    <div className="events-gallery">
      {galleryData.map((event) => (
        <div key={event.id} className="event-card">
          <img
            src={require("../imgs/" + event.id + ".jpg")}
            alt={event.name}
            className="event-image"
          />
          <h2>{event.name}</h2>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventsGallery;
