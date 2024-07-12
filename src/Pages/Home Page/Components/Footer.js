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
            <Link className="footersection2linkschildcontainer footersection2linksheader" to='/experiencedesign'>Experience Design</Link>
            <Link className="footersection2linkschildcontainer footersection2linksheader" to='/digitaltalentslutions'>Digital Talent Solutions</Link>
            <div className="footersection2linkschildcontainer">
              <div className="footersection2linksheader">
                Data & AI
              </div>
              <div className="footersection2linksinfo">
                <Link to='/dataengineering'>Data Engineering</Link>
                <Link to='/insightsanalytics'>Insights & Analytics</Link>
                <Link to='/aiml'>AI & ML</Link>
              </div>
            </div>
            <div className="footersection2linkschildcontainer">
              <div className="footersection2linksheader">
                Product Engineering
              </div>
              <div className="footersection2linksinfo">
                <Link to='/softwaredevelopment'>Software Develpoment</Link>
                <Link to='/modernization'>Modernization</Link>
                <Link to='/cloudnative'>Cloud Native</Link>
                <Link to='/integration'>Enterprise Integration</Link>
              </div>
            </div>
            <div className="footersection2linkschildcontainer">
              <div className="footersection2linksheader">
                Enterprise Application
              </div>
              <div className="footersection2linksinfo">
                <Link to='/saps4hana'>SAP S/4HANA</Link>
                <Link to='/sapstechnologyservices'>SAP Technology Services</Link>
              </div>
            </div>
            <div className="footersection2linkschildcontainer">
              <Link to='/about' className="footersection2linksheader">
                About Us
              </Link>
              <div className="footersection2linksinfo">
                <Link to='/career'>Career</Link>
              </div>
            </div>
            {/* <Link to='/experiencedesign' className="footersection2link">Experience Design</Link>
            <div className="footersection2accordion">
              <input type="checkbox" name="" id="first" />
              <label style={{ width: '13vw', position: 'relative' }} for="first"><p>Data & AI</p> <i style={{ position: 'absolute', right: '1px' }} class="fa-solid fa-angle-down"></i></label>
              <div className="footersection2accordiondesc">
                <ul>
                  <Link to='/dataengineering'>Data Engineering</Link>
                  <Link to='/insightsanalytics'>Insights & Analytics</Link>
                  <Link to='/aiml'>AI & ML</Link>
                </ul>
              </div>
            </div>
            <div className="footersection2accordion">
              <input type="checkbox" name="" id="second" />
              <label style={{ width: '13vw', position: 'relative' }} for="second"><p>Product Engineering</p> <i style={{ position: 'absolute', right: '1px' }} class="fa-solid fa-angle-down"></i></label>
              <div className="footersection2accordiondesc">
                <ul>
                  <Link to='/softwaredevelopment'>Software Develpoment</Link>
                  <Link to='/modernization'>Modernization</Link>
                  <Link to='/cloudnative'>Cloud Native</Link>
                  <Link to='/integration'>Enterprise Integration</Link>
                </ul>
              </div>
            </div>
            <div className="footersection2accordion">
              <input type="checkbox" name="" id="third" />
              <label style={{ width: '13vw', position: 'relative' }} for="third"><p>Enterprise Application</p> <i style={{ position: 'absolute', right: '1px' }} class="fa-solid fa-angle-down"></i></label>
              <div className="footersection2accordiondesc">
                <ul>
                  <Link to='/saps4hana'>SAP S/4HANA</Link>
                  <Link to='/sapstechnologyservices'>SAP Technology Services</Link>
                </ul>
              </div>
            </div>
            <Link to='/digitaltalentsolutions' className="footersection2link">Digital Talent Solutions</Link> */}
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
