import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function DataEngineeringInfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Establish Your Foundation: Leverage Our Data Services
                    </div>
                    <div className="homeinfolists" >
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                {/* <i class="fa-solid fa-check"></i> */}
                                <p style={{ fontSize: '1.5rem' }}>Establish Your Foundation</p>
                            </div>
                            <div className="dtsinfolistedescription" style={{ fontSize: '1.35rem' }}>
                                Maximize the value of your data with our expert data engineering services. We specialize in managing and optimizing data to tailor bespoke solutions that align with your business goals. From data architecture design to implementation, ensure your data is organized, relevant, and reliable to tackle business challenges with confidence. Our expertise spans data modernization, data platform optimization, master data management, and robust data governance frameworks.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
