import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import SapbptHero from './Components/SapbptHero'
import SapbptInfo from './Components/SapbptInfo'
import SapbtpHero2 from './Components/SapbtpHero2'
import SapbtpCards1 from './Components/SapbtpCards1'
import SapbtpCards2 from './Components/SapbtpCards2'
import ContactPage from '../Contact Page/ContactPage'

export default function Sapbpt() {
    return (
        <>
            <Navbar />
            <SapbptHero/>
            <SapbptInfo/>
            <SapbtpHero2/>
            <SapbtpCards1/>
            <SapbtpCards2/>
            <ContactPage desc="Explore how THRIVEX can help you leverage SAP BTP to drive innovation and business growth. Contact our team of experts today to learn more about our services and solutions."/>
            <Footer />
        </>
    )
}
