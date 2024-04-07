import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsGallery from "../components/EventsGallery";
export default function Events() {
  return (
    <div>
      <Navbar></Navbar>
      <EventsGallery />
      <Footer></Footer>
    </div>
  );
}
