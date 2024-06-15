import React from "react";
import "../../../css/Home Page/HomeInfo.css";
import img1 from '../../../Resources/ba-006.webp'

export default function HomeInfo() {
  return (
    <>
      <div className="homeinfomaincontainer" id='homeinfomaincontainer'>
        <div className="homeinfosection1">
          <div className="homeinfoheader">Why work with us</div>
          <div className="homeinfodescription">
            <p>
              Our dedication to our core values serves as the foundation for our unique culture, which prioritizes our customers.
            </p>
          </div>
          <div className="homeinfolists">
            <div className="homeinfolist">
              <i className="fa-solid fa-check"></i>
              <p>
                We're not afraid to take calculated risks and champion
                innovative ideas.{" "}
              </p>
            </div>
            <div className="homeinfolist">
              <i className="fa-solid fa-check"></i>
              <p>
                We move with agility, building solutions quickly and learning
                even faster from setbacks.{" "}
              </p>
            </div>
            <div className="homeinfolist">
              <i className="fa-solid fa-check"></i>
              <p>We believe in the power of collaboration and empathy</p>
            </div>
            <div className="homeinfolist">
              <i className="fa-solid fa-check"></i>
              <p>
                {" "}
                We treat each other with respect and strive to build a positive
                tech ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="homeinfosection2">
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
}
