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
        <div className="aboutherosection1">
          <div className="ahs1info">
            <div className="aboutherosection1infoheader">
              <p>Our <span>Story</span></p>
            </div>
            <div className="aboutherosection1infodescription">
              THRIVEX Technologies started with a spark – a shared passion for using technology to revolutionize businesses. We envisioned a company that blends cutting-edge solutions with a strong emphasis on quality and innovation. Today, that spark has grown into a team of dedicated tech enthusiasts and experts, all committed to empowering your business with the latest solutions and insights.
            </div>
          </div>
        </div>
        <div className="aboutherosection2">
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
}
