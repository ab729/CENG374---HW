import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
        <img src={require('../imgs/Logo_FC_Bayern_München_(2002–2017).svg.png')} alt="fcb" />
        <h3 className='font title'>FC Bayern Ultras</h3>
        <div className="elements font">
            <Link to={'/'}>Home</Link>
            <Link to={'/events'}>Events</Link>
            {/* <Link to={'/details'}>Details</Link> */}
            <Link to={'/gallery'}>Gallery</Link>
            <Link to={'/contact'}>Conatct</Link>
        </div>
    </nav>
  )
}
