import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import EDHero from './Components/EDHero'
import EDInfo from './Components/EDInfo'
import ContactPage from '../Contact Page/ContactPage'
import EDHero2 from './Components/EDHero2'
import EDqanda from './Components/EDqanda'
import EDNewHero from './Components/EDNewHero'
import EDNewInfo from './Components/EDNewInfo'

export default function ExperienceDesign() {
  return (
    <>
      <Navbar />
      {/* <EDHero /> */}
      <EDNewHero />
      <EDNewInfo />
      {/* <EDInfo />
      <EDHero2 />
      <EDqanda />
      <ContactPage /> */}
      <Footer />
    </>
  )
}
