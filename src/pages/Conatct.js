import React from "react";
import "./Contact.css"; // Import the CSS file for styles
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> Säbener Straße 51-57 , Munich, Germany
          </p>
          <p>
            <strong>Email:</strong> info@fcbayern.com
          </p>
          <p>
            <strong>Phone:</strong> +49 89 699 31-0
          </p>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="social-links">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="https://fcbayern.com/en">Website</a>
            </li>
            <li>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX_6WEha-FAxVdSvEDHXcDDAkQ6F56BAgWEAE&url=https%3A%2F%2Ftwitter.com%2FFCBayernEN%3Fref_src%3Dtwsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor&usg=AOvVaw3WLuaUcuSQsm-muxMPx3Xm&opi=89978449">
                X
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/fcbayern/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
