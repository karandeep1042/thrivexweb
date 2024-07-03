import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function QlikHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Qlik</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Transform Your Data with Our Qlik Consulting Practice </p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            At THRIVEX, we specialize in helping businesses harness the full potential of the Qlik platform. Our comprehensive Qlik consulting services are designed to transform your raw data into strategic insights that drive decision-making and give you a competitive edge. With extensive experience and a proven track record, our team of Qlik experts is here to guide you every step of the way.
                        </div>
                    </div>
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3',marginTop:'3vh' }}>
                            <p>Why Choose Qlik? </p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            Qlik stands out as a leader in business intelligence and data analytics. Its unique associative engine, augmented analytics capabilities, and real-time data integration provide a robust, scalable, and secure platform. By choosing Qlik, you enable your organization to delve deeper into data, uncover hidden insights, and make data-driven decisions with confidence.
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
