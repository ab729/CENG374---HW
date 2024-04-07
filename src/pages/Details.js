import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventDetailsComponent from '../components/DetailsBody'
import {
  useParams
} from "react-router-dom";

export default function Events() {
const { id } = useParams();
  return (
    <div>
      <Navbar></Navbar>
      <EventDetailsComponent eventId={id} />
      <Footer></Footer>
    </div>
  )
}
