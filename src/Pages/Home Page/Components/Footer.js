import React from "react";
import "../../../css/Home Page/Footer.css";
import img from "../../../Resources/footerlogo-removebg-preview.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footermaincontainer">
        <div className="footersection1">
          <div className="footerlogo">
            <img src={img} alt="" />
          </div>
          <div className="footerdescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            officia optio autem nemo quis nesciunt ratione magnam ipsa
            exercitationem qui!
          </div>
          <div className="footersocialmediaicons">
            <div className="footersmicon">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="footersmicon">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div className="footersmicon">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="footersmicon">
              <i class="fa-brands fa-youtube"></i>{" "}
            </div>
          </div>
        </div>
        <div className="footersection2">
          <div className="footersection2header">Useful links</div>
          <div className="footersection2links">
            <Link to='/digitaltalentsolutions' className="footersection2link">Digital Talent Solutions</Link>
            <Link className="footersection2link">Product Engineering</Link>
            <Link to='/experiencedesign' className="footersection2link">Experience Design</Link>
            <Link className="footersection2link">Integrated Products & Platforms</Link>
            <Link className="footersection2link">Enterprise Applications</Link>
            <Link className="footersection2link">Data & Analytics</Link>
          </div>
        </div>
        <div className="footersection3">
          <div className="fs3header">Contact info</div>
          <div className="fs3items">
            <div className="fs3item">
              <div className="fs3itemsec1">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="fs3itemsec2">
                <p>+91-9820xxx941</p>
                <span>Mon - Fri 10am - 8pm</span>
              </div>
            </div>
            <div className="fs3item">
              <div className="fs3itemsec1">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="fs3itemsec2">
                <p>connect@thethrivex.com</p>
                <span>Information & support</span>
              </div>
            </div>
            <div className="fs3item">
              <div className="fs3itemsec1">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="fs3itemsec2">
                <p>Thrivex Technologies Pvt. Ltd.
                  4th Floor, Master Mind IV,
                  Royal Palms, Goregaon (East),
                  Mumbai – 400 065.
                  Maharashtra.
                </p>
                <span>Main office location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
