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
                        Our Unparalleled Service Approach
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            We know seamless team integration is crucial for success. That's why our fast and efficient service approach ensures you are in safe hands every step of the way:
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>In it With You</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We get to know both the candidate and your organization, seeking the perfect match based on skills, experience, and cultural fit.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Deep Business Knowledge & Integration</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We take the time to understand your company's DNA – values, challenges, and goals. This allows us to identify talent that not only possesses the right technical expertise but also embodies the right attitude and drive to integrate seamlessly with your team.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Expansive Talent Network</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Our extensive network connects us with hard-to-find talent across diverse industries. We are committed to fostering a community of top-tier tech professionals for you to tap into.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Expert Talent Advisors</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Our team of specialists leverages a global network and data-driven insights to bridge skill gaps efficiently. We are dedicated to delivering the right talent quickly - often within hours or days.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Platform & Technologies</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We utilize a robust combination of social, digital, and hiring platforms coupled with advanced analytics to enhance our services. This ensures a data-driven approach while maintaining our high-touch, personalized service.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
