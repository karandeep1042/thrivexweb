import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import ContactPage from '../../Contact Page/ContactPage'
import IntegrationHero from './Components/IntegrationHero'
import IntegrationInfo from './Components/IntegrationInfo'
import IntegrationInfo2 from './Components/IntegrationInfo2'
import IntegrationInfo3 from './Components/IntegrationInfo3'
import AllEngineeringServices from '../Software Development/Components/AllEngineeringServices'
import SWdevhead from '../Software Development/Components/SWdevhead'

export default function Integration() {
    return (
        <>
            <Navbar />
            <IntegrationHero />
            <IntegrationInfo />
            <IntegrationInfo2 />
            <IntegrationInfo3 />
            <SWdevhead />
            <AllEngineeringServices name="Integration" />
            <ContactPage desc="Discover how our integration solutions can propel your business forward. Contact us today and embark on your digital transformation." />
            <Footer />
        </>
    )
}
