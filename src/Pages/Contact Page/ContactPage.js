import React from "react";
import Navbar from "../Home Page/Components/Navbar";
import Footer from "../Home Page/Components/Footer";
import ContactHero from "./Components/ContactHero";
import ContactForm from "./Components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <div className="contactpagemaincontainer">
        <div className="contactpageheader">Let's Start a <span>Conversation</span></div>
        <div className="contactpageheader" style={{fontSize:'.9rem',lineBreak:'anywhere',textAlign:'center',width:'90vw'}}>Ready to transform your digital team and drive innovation? Partner with THRIVEX for cutting-edge digital talent solutions. Contact us today to discover how we can help you secure the best talent and achieve your business goals.</div>
        <div className="contactpagebutton">Connect Now</div>
      </div>
    </>
  );
}
