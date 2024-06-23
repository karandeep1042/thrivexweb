import React from 'react'
import QlikHero from './Components/QlikHero'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import Qlikinfo from './Components/Qlikinfo'
import QlikCards from './Components/QlikCards'
import ContactPage from '../Contact Page/ContactPage'

export default function QlikPage() {
    return (
        <>
            <Navbar />
            <QlikHero />
            <QlikCards />
            <Qlikinfo />
            <ContactPage />
            <Footer />
        </>
    )
}
