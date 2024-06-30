import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function DataEngineeringHero2() {
    return (
        <>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Big Data Analytics</p>
                        </div>

                    </div>
                    <div className="homeinfolists" style={{ marginTop: '2vh' }}>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                {/* <i class="fa-solid fa-check"></i> */}
                                <p style={{ fontSize: '1.5rem' }}>Transforming Challenges into Insights</p>
                            </div>
                            <div className="dtsinfolistedescription" style={{ fontSize: '1.35rem' }}>
                                Transform raw data challenges into actionable insights with our data analytics consulting services. We align your data architecture with business objectives using industry-leading practices, managing the entire lifecycle from data collection to processing. Harness vast and complex datasets to drive informed decisions and optimize operations, anticipating customer behavior changes effectively.
                            </div>
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
