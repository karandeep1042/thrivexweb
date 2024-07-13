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
import EDNewInfo2 from './Components/EDNewInfo2'
import EDNewInfo3 from './Components/EDNewInfo3'
import EDNewInfo4 from './Components/EDNewInfo4'

export default function ExperienceDesign() {
  return (
    <>
      <Navbar />
      <EDNewHero />
      <EDNewInfo />
      <EDNewInfo2 />
      <EDNewInfo3 />
      <EDNewInfo4 />
      <EDqanda />
      <ContactPage /> 
      <Footer />
    </>
  )
}
