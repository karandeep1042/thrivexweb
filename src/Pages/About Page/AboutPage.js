import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import AboutHero from './Components/AboutHero'
import AboutInfo from './Components/AboutInfo'
import AboutContactForm from './Components/AboutContactForm'
import ResumeForm from './Components/ResumeForm'
import ContactPage from '../Contact Page/ContactPage'
import Aboutinfo3 from './Components/Aboutinfo3'
import AboutInfo2 from './Components/AboutInfo2'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      {/* <Aboutinfo3 /> */}
      <AboutInfo2 />
      <AboutInfo />
      <ContactPage desc="Together, let's embark on a journey of digital evolution and turn your vision into reality."/>
      <Footer />
    </>
  )
}
