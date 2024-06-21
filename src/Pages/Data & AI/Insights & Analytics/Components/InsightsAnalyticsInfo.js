import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function InsightsAnalyticsInfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Approach to Business Intelligence Services
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            With the right business intelligence tools, we empower you to delve deep into consumer behavior, driving profitability, sustainability, and transformative change throughout your organization. We collaborate closely with you to implement intelligent solutions that revolutionize your business operations, both internally and externally. This translates into enhanced agility and decision-making through actionable business insights that inform present strategies and propel your business towards future success.
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Tool Agnostic Technology Recommendations for Maximum Impact</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We source and retain the most sought-after talent around the tech echo-system by getting to know the candidate and understanding your organization.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Realize Tangible Business Benefits</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We put in the time to learn your business’s energy, values, challenges and goals to seek out talent with the skills and expertise to match plus the intangibles—their attitude, their drive—that will help them integrate with your team and culture.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Create Compelling Narratives from Data</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We're dedicated to fostering a talent network that connects us with hard-to-find talent from diverse industries.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Preparing for the Agile Future</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Our expert team of talent specialists works on a global scale, using data-based insights to close skill gaps. Our advisors are dedicated to delivering the right talent swiftly, often within hours or days.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
