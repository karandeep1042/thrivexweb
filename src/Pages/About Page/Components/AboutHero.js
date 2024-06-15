import React from "react";
import "../../../css/About Page/AboutHero.css";
import img1 from "../../../Resources/about1.webp";

export default function AboutHero() {
  return (
    <>
      <div className="aboutheroheader">
        <p>About Us</p>
      </div>
      <div className="aboutheromaincontainer">
        <div className="aboutherosection2">
          <img src={img1} alt="" />
        </div>
        <div className="aboutherosection1">
          <div className="ahs1info">
            <div className="aboutherosection1infoheader">
              <p><span>THIRVEX</span> at a Glance</p>
            </div>
            <div className="aboutherosection1infodescription">
              THRIVEX is a digitally native firm specializing in digital transformation services and consulting. We apply our expertise in digital talent solutions, experience design, enterprise applications, product & platform engineering, and data & analytics solutions to rapidly assist enterprises in innovating for growth and driving smarter, data-driven performance.
            </div>
          </div>
          <div className="ahs1people">
            <div className="ahs1peopleheader">
              Our People
            </div>
            <div className="ahs1peopledescription">
              Our greatest strength lies in our people. We are shaped by their passion and the fabric of our culture.
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
