import React from "react";
import "../../../css/Home Page/HomeInfo.css";
import img1 from '../../../Resources/ba-006.webp'
import '../../../css/About Page/AboutInfo.css'

export default function AbuotInfo() {
  return (
    <>
      <div className="homeinfomaincontainer">

        <div className="homeinfosection1">
          <div className="homeinfoheader" style={{ color: '#0eaae3' }}>Company values</div>
          <div className="homeinfodescription">
            <p>
              At THRIVEX we foster a vibrant and inclusive company culture that empowers our team members to thrive, innovate, and deliver exceptional results. Our culture is built on the following key values
            </p>
          </div>
          <div className="aboutinfolists">
            <div className="aboutinfonewlist">
              <div className="aboutinfolistheader">
                <i className="fa-solid fa-brain"></i>
                <p>Bold</p>
              </div>
              <div className="aboutinfolistdescription">
                We <span className="aboutinfolistdescriptionboldwords">dream big</span> and <span className="aboutinfolistdescriptionboldwords">push boundaries</span>. We're not afraid to take <span className="aboutinfolistdescriptionboldwords">calculated risks</span> and <span className="aboutinfolistdescriptionboldwords">champion innovative ideas. We speak our minds</span> with conviction to find the best solutions.
              </div>
            </div>
            <div className="aboutinfonewlist">
              <div className="aboutinfolistheader">
                <i class="fa-solid fa-sun"></i>
                <p>Bright</p>
              </div>
              <div className="aboutinfolistdescription">
                We move with <span className="aboutinfolistdescriptionboldwords">agility</span>, building solutions quickly and <span className="aboutinfolistdescriptionboldwords">learning</span> even faster from setbacks. We're <span className="aboutinfolistdescriptionboldwords">obsessed with impact</span>, elivering <span className="aboutinfolistdescriptionboldwords">tangible results</span> that <span className="aboutinfolistdescriptionboldwords">exceed expectations.</span>
              </div>
            </div>
            <div className="aboutinfonewlist">
              <div className="aboutinfolistheader">
                <i className="fa-solid fa-brain"></i>
                <p>Human</p>
              </div>
              <div className="aboutinfolistdescription">
                We believe in the power of <span className="aboutinfolistdescriptionboldwords">collaboration</span> and <span className="aboutinfolistdescriptionboldwords">empathy</span>. We foster a <span className="aboutinfolistdescriptionboldwords">supportive</span> environment where <span className="aboutinfolistdescriptionboldwords">everyone feels valued</span> and their <span className="aboutinfolistdescriptionboldwords">curiosity is encouraged</span>. We treat each other <span className="aboutinfolistdescriptionboldwords">respect</span> and strive to build a <span className="aboutinfolistdescriptionboldwords">positive tech ecosystem.</span>
              </div>
            </div>
            <div className="homeinfodescription">
              <p>
                Our dedication to our core values serves as the foundation for our unique culture, which prioritizes our customers.
              </p>
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
