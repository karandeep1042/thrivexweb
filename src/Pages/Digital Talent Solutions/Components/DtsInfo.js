import React from 'react'
import img1 from '../../../Resources/dtsinfo.jpg'
import '../../../css/Digital Talent Solutions/DtsInfo.css'

export default function DtsInfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Approach
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Our fast and efficient service approach recognizes the urgency of seamless team integration. Our digital talent solutions approach ensures you are in safe hands.
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>In it With You</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We source and retain the most sought-after talent around the tech echo-system by getting to know the candidate and understanding your organization.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Deep Business Knowledge & Integration</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We put in the time to learn your business’s energy, values, challenges and goals to seek out talent with the skills and expertise to match plus the intangibles—their attitude, their drive—that will help them integrate with your team and culture.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Expansive Talent Network</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We're dedicated to fostering a talent network that connects us with hard-to-find talent from diverse industries.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Expert Talent Advisors</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Our expert team of talent specialists works on a global scale, using data-based insights to close skill gaps. Our advisors are dedicated to delivering the right talent swiftly, often within hours or days.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Platform & Technologies</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We utilize a wide range of social, digital, and hiring platforms, along with analytics, to enhance our services while maintaining our hands-on, high-touch approach. Our strategy combines talent networks and technology to identify the most suitable candidates for your engagement.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
