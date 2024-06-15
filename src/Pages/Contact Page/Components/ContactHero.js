import React from "react";
import "../../../css/Contact Page/ContactHero.css";

export default function ContactHero() {
  return (
    <>
      <div className="contactheromaincontainer">
        <div className="aboutheroheader">
          <p>Contact</p>
        </div>
        <div className="contactheromediums">
          <div className="contactheroitem">
            <i className="fa-solid fa-phone"></i>
            <p>+91-9820xxx941</p>
            <span>Mon - Fri 10am - 8pm</span>
          </div>
          <div className="contactheroitem">
            <i className="fa-regular fa-envelope"></i>
            <p style={{ fontSize: "1.2rem" }}>connect@thethrivex.com</p>
            <span>Support & information</span>
          </div>
          <div className="contactheroitem">
            <i className="fa-solid fa-location-dot"></i>
            <p style={{ fontSize: "1.2rem" }}>
              3 Rockaway St., New Rochelle, NY 1080
            </p>
            <span>Office location</span>
          </div>
        </div>
      </div>
    </>
  );
}
