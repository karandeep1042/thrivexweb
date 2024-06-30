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

          </div>
          <div className="footersocialmediaicons">
            {/* <div className="footersmicon">
              <i class="fa-brands fa-facebook-f"></i>
            </div> */}
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
            <Link to='/experiencedesign' className="footersection2link">Experience Design</Link>
            <div className="footersection2accordion">
              <input type="checkbox" name="" id="first"/>
              <label for="first">Data & AI</label>
              <div className="footersection2accordiondesc">
                <ul>
                  <Link>Data Engineering</Link>
                  <Link>Insights & Analytics</Link>
                  <Link>AI & ML</Link>
                </ul>
              </div>
            </div>
            <div className="footersection2accordion">
              <input type="checkbox" name="" id="second" />
              <label for="second">Product Engineering</label>
              <div className="footersection2accordiondesc">
                <ul>
                  <Link>Software Develpoment</Link>
                  <Link>Modernization</Link>
                  <Link>Cloud Native</Link>
                  <Link>Enterprise Integration</Link>
                </ul>
              </div>
            </div>
            <div className="footersection2accordion">
              <input type="checkbox" name="" id="third" />
              <label for="third">Enterprise Application</label>
              <div className="footersection2accordiondesc">
                <ul>
                  <Link>SAP S/4HANA</Link>
                  <Link>SAP Technology Services</Link>
                </ul>
              </div>
            </div>
            <Link to='/digitaltalentsolutions' className="footersection2link">Digital Talent Solutions</Link>
          </div>
        </div>
        <div className="footersection3">
          <div className="fs3header">Contact Info</div>
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
                <span>Office location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
