import React from 'react'
import Navbar from '../../Home Page/Components/Navbar';
import Footer from '../../Home Page/Components/Footer';
import SWdevHero from './Components/SWdevHero';
import SWdevcards from './Components/SWdevcards';
import SWdevinfo from './Components/SWdevinfo';
import SWdevhead from './Components/SWdevhead';
import ContactPage from '../../Contact Page/ContactPage';
import AllEngineeringServices from './Components/AllEngineeringServices';

export default function SWdev() {
  return (
    <>
      <Navbar/>
      <SWdevHero/>
      <SWdevcards/>
      <SWdevinfo/>
      <SWdevhead/>
      <AllEngineeringServices name='Software Development'/>
      <ContactPage/>
      <Footer/>
    </>
  )
}
