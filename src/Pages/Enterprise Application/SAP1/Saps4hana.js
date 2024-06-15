import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import Sap1hero from './Components/Sap1hero'
import Sap1hanacards from './Components/Sap1hanacards'
import Sap1info from './Components/Sap1info'
import ContactPage from '../../Contact Page/ContactPage'

export default function Saps4hana() {
    return (
        <>
            <Navbar />
            <Sap1hero />
            <Sap1hanacards />
            <Sap1info />
            <ContactPage/>
            <Footer />
        </>
    )
}
