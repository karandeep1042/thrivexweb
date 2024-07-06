import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import ResumeForm from '../About Page/Components/ResumeForm'
import Footer from '../Home Page/Components/Footer'
import ContactPage from '../Contact Page/ContactPage'
import CareerHero from './Components/CareerHero'
import CareerInfo from './Components/CareerInfo'
import CareerAppForm from './Components/CareerAppForm'

export default function Career() {
  return (
    <>
     <Navbar/>
     <CareerHero/>
     <CareerInfo/>
     {/* <ResumeForm/> */}
     <CareerAppForm/>
     {/* <ContactPage/> */}
     <Footer/> 
    </>
  )
}
