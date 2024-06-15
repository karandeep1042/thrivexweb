import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function SapbptInfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        SAP Business Technology Platform
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            SAP Business Technology Platform (SAP BTP), formerly known as SAP Cloud Platform, is SAP’s Platform-as-a-Service (PaaS). It combines integration, application development, automation, artificial intelligence, data, and analytics into a single, cohesive environment. This unified platform provides companies with the tools and pre-packaged business content necessary for digital transformation, enabling swift implementation of new business scenarios and models. At THRIVEX, our SAP BTP experts offer comprehensive support to help you achieve digital differentiation and gain a competitive edge.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
