import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function DataEngineeringInfo2() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Cloud Data Services
                    </div>
                    <div className="homeinfolists" >
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                {/* <i class="fa-solid fa-check"></i> */}
                                <p style={{ fontSize: '1.5rem' }}>Modernize Your Data Infrastructure</p>
                            </div>
                            <div className="dtsinfolistedescription" style={{ fontSize: '1.35rem' }}>
                                Modernize your data infrastructure with our comprehensive cloud data services. Whether migrating from legacy systems or integrating modern frameworks, leverage our in-house tools to enhance performance and streamline data management. Our proficiency in data migration frameworks and governance tools ensures a seamless transition to a modern data platform. Benefit from optimized data operations while minimizing disruption and maximizing efficiency.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
