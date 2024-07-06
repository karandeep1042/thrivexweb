import React from "react";
import "../../../css/Home Page/HomeCards.css";
import img1 from '../../../Resources/DTSCard.jpg'
import img2 from '../../../Resources/PECard.jpg'
import img3 from '../../../Resources/EDCard.png'
import img4 from '../../../Resources/IPPCard.jpg'
import img5 from '../../../Resources/EPCard.jpg'
import img6 from '../../../Resources/DACard.png'
import { Link } from "react-router-dom";

export default function HomeCards() {
  const homeCardsArr = [
    {
      logo: "user-check",
      title: "Experience Design",
      desc2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsam placeat quod eius asperiores, odit rerum nemo, iure sit porro cupiditate eum ipsa itaque minus nam tempora fugit quas voluptatibus.',
      img: img3,
      link: '/experiencedesign'
    },
    {
      logo: "user-check",
      title: "Data & Analytics",
      desc2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsam placeat quod eius asperiores, odit rerum nemo, iure sit porro cupiditate eum ipsa itaque minus nam tempora fugit quas voluptatibus.',
      img: img6,
      link: '/dataservices'
    },
    {
      logo: "table",
      title: "Product Engineering",
      desc2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsam placeat quod eius asperiores, odit rerum nemo, iure sit porro cupiditate eum ipsa itaque minus nam tempora fugit quas voluptatibus.',
      img: img2,
      link: '/softwaredevelopment'
    },
    {
      logo: "table",
      title: "Enterprise Applications",
      desc2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsam placeat quod eius asperiores, odit rerum nemo, iure sit porro cupiditate eum ipsa itaque minus nam tempora fugit quas voluptatibus.',
      img: img5,
      link: '/saps4hana'
    },
    {
      logo: "cloud",
      title: "Digital Talent Solutions",
      desc2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsam placeat quod eius asperiores, odit rerum nemo, iure sit porro cupiditate eum ipsa itaque minus nam tempora fugit quas voluptatibus.',
      img: img1,
      link: '/digitaltalentsolutions'
    },
    {
      logo: "cloud",
      title: "Integrated Products & Platforms",
      desc2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsam placeat quod eius asperiores, odit rerum nemo, iure sit porro cupiditate eum ipsa itaque minus nam tempora fugit quas voluptatibus.',
      img: img4,
      link: '/'
    },
  ];

  return (
    <>
      <div className="homecardsmaincontainer">
        <div className="homecardsheader">Our fields of competence</div>
        <div className="homecardslist">
          {homeCardsArr.map((item, index) => (
            <div className="homecard" key={index}>
              <div className="homecardimage">
                <img src={item.img} alt="" />
              </div>
              <div className="homecardinfo">
                <div className="homecardcontent">
                  <div className="homecardtitle">
                    {item.title}
                  </div>
                  <div className="homecarddescription">
                    {item.desc2}
                  </div>
                </div>
                <Link to={item.link} className="homecardlearnmorebtn">
                  <p>Learn More</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
