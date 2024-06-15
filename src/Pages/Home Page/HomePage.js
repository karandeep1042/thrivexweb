import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import HomeCards from "./Components/HomeCards";
import HomeInfo from "./Components/HomeInfo";
import BlogsSlider from "./Components/BlogsSlider";
import Footer from "./Components/Footer";
import BlogSlider2 from "./Components/BlogSlider2";
import ContactPage from "../Contact Page/ContactPage";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <HomeCards/>
      <HomeInfo/>
      <ContactPage/>
      {/* <BlogSlider2/> */}
      {/* <BlogsSlider/> */}
      <Footer/>
    </>
  );
}
