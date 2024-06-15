import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import EDHero from './Components/EDHero'
import EDInfo from './Components/EDInfo'
import ContactPage from '../Contact Page/ContactPage'

export default function ExperienceDesign() {
  return (
    <>
      <Navbar/>
      <EDHero/>
      <EDInfo/>
      <ContactPage/>
      <Footer/>
    </>
  )
}
