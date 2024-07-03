import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function IntegrationInfo3() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Business Benefits with Enterprise Application & System Integration Services
                    </div>
                    {/* <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Our fast and efficient service approach recognizes the urgency of seamless team integration. Our digital talent solutions approach ensures you are in safe hands.
                        </p>
                    </div> */}
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Adapt to a Changing IT Landscape</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Integrate enterprise apps like CRM, CMS, ERP, and social channels to enable seamless rollouts and rapid implementations, ensuring your business remains agile and responsive.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Get Real-Time Access to Data</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Manage critical business data in real-time from diverse systems, enabling more informed decision-making and reducing data discrepancies.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Build an Experience-Rich Culture</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Expand your service offerings and channels to reach customers with the right message at the right time, enhancing customer engagement and satisfaction.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Accelerated Time-to-Market</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Connect applications and automate workflows to swiftly respond to market demands, ensuring competitive agility and faster product launches.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
