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
                                <p style={{ fontSize: '1.4rem' }}>Transforming Challenges into Insights</p>
                            </div>
                            <div className="dtsinfolistedescription" style={{ fontSize: '1.2rem' }}>
                                Transform raw data challenges into actionable insights with our data analytics consulting services. We align your data architecture with business objectives using industry-leading practices, managing the entire lifecycle from data collection to processing. Harness vast and complex datasets to drive informed decisions and optimize operations, anticipating customer behavior changes effectively.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
