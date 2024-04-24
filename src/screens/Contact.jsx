import React from "react";
import Nav from "./Nav";
import "./Contact.css";
import WhatsAppIcon from "../assets/WhatsApp.png";
import FaceBookIcon from "../assets/FaceBook.png";
import LocationIcon from "../assets/Location.png";
import EmailIcon from "../assets/Email.png";

function Contact() {
  return (
    <div>
      <Nav />
      <div className="contact-container">
        <div className="message-box">
          <h4 className="message-title">Send a message to us...</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label><br />
              <input type="text" id="name" placeholder="Enter your name" required /><br />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label><br />
              <input type="email" id="email" placeholder="Enter your email" required /><br />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label><br />
              <textarea id="message" placeholder="Type your message here..." required /><br />
            </div>
            <br /><button type="submit" className="Button">Send</button><br /><br /><br />
          </form>
        </div>
        <div className="contact-info"><br />
          <h3 className="h3">Contact Us</h3>
          <div className="contact-item">
            <table className="contact-detail">
              <tr>
                <td className="size">
                  <img src={WhatsAppIcon} alt="WhatsApp" className="logo" />
                  <a href="https://wa.me/your-whatsapp-number" className="contact-link">WhatsApp</a>
                </td>
                <td className="size">
                  <img src={FaceBookIcon} alt="FaceBook" className="logo" />
                  <a href="https://mbasic.facebook.com/" className="contact-link">FaceBook</a>
                </td>
                <td className="size">
                  <img src={LocationIcon} alt="Location" className="logo" />
                  <a href="https://www.google.com/maps/" className="contact-link">Location</a>
                </td>
                <td className="size">
                  <img src={EmailIcon} alt="Email" className="logo" />
                  <a href="https://mail.google.com/" className="contact-link">Email</a>
                 </td>
              </tr><br /><br />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
