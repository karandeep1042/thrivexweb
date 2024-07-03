import React from "react";
import img from "../../../Resources/viewblogtemp.webp";
import '../../../css/View Blog Page/ViewBlogHero.css'
export default function ViewBlogHero() {
  return (
    <>
      <div className="viewblogmaincontainer">
        <div className="viewblogmainheader">
         <p> Why amet lorem dolor glavrida agestas</p>
        </div>
        <div className="viewblogmaindescription">
         <p> Ipsum nulla – lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="viewblogheroimage">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}
