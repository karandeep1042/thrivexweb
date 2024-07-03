import React from 'react'
import img1 from '../../../../Resources/Data and Analytics/aiinfo.jpg'

export default function Aimlinfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Approach to Artificial Intelligence and Machine Learning
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Artificial intelligence, machine learning, and predictive analytics hold the key to enhancing automation and optimizing productivity within your business. Through our AI consulting solutions and extensive technical expertise, we facilitate a thorough business analysis aimed at refining decision-making, amplifying productivity, and providing comprehensive visibility across all operational dimensions. This entails pinpointing pain points throughout your business, leveraging the appropriate technologies, implementing industry best practices, and cultivating teams equipped for the future.
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Advisory</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Creating a compelling vision for process optimization and automation, identifying opportunities, and advising on the right intelligent automation solutions include setting goals, identifying pain points, understanding ROI, creating a roadmap, and conducting a thorough analysis of processes.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Implementation</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                End-to-end implementation of intelligent automation solutions includes identifying opportunities, planning, development, deployment, and maintenance to transform operations and deliver rapid benefits.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Support</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Setting up, managing, and optimizing intelligent operations to achieve the organization's goal. This includes identifying the right automation solution, implementation, maintenance, performance tracking, and continuously making improvements.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
