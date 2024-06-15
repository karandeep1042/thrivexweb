import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import AboutHero from './Components/AboutHero'
import AboutInfo from './Components/AboutInfo'
import AboutContactForm from './Components/AboutContactForm'
import ResumeForm from './Components/ResumeForm'
import ContactPage from '../Contact Page/ContactPage'

export default function AboutPage() {
  return (
    <>
        <Navbar/>
        <AboutHero/>
        <AboutInfo/>
        {/* <AboutContactForm/>  */}
        <ContactPage/>
        {/* <ResumeForm/> */}
        <Footer/>
    </>
  )
}
