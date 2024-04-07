import React from 'react'
import './Event.css'
import { Link } from "react-router-dom";
import eventsData from '../db/events';


export default function Event() {
  
  return (
    <body>
      <h2>Upcoming Events</h2>
      <div class="events-container">
        {eventsData.map((e) => (
          <Link to={'/events/' + e.id}>
            <div class="event">
              <h3>{e.name}</h3>
              <p class="event-time">{e.time}</p>
              <p class="event-location">{e.location}</p>
              <p>{e.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </body>
  );
}
