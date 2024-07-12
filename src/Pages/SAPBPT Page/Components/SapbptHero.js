import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function SapbptHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>SAP Business Technology Platform (SAP BTP)</p>
                <p style={{ fontSize: '1.7rem', marginTop: '4vh' }}>The Technological Foundation of the Intelligent Enterprise</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Overview</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            In today’s dynamic business landscape, agility and intelligence are paramount. Real-time data is essential for informed decision-making, seamless integration of business processes across diverse systems, and facilitating the development and expansion of applications. The SAP Business Technology Platform (SAP BTP) underpins these capabilities, driving the intelligent enterprise forward. <br /><br />

                            <b>SAP Business Technology Platform (SAP BTP)</b>, formerly known as SAP Cloud Platform, is SAP’s Platform-as-a-Service (PaaS). It combines integration, application development, automation, artificial intelligence, data, and analytics into a single, cohesive environment. This unified platform provides companies with the tools and pre-packaged business content necessary for digital transformation, enabling swift implementation of new business scenarios and models.

                        </div>
                    </div>
                </div>
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}
