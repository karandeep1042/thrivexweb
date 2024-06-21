import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function AIMLInfo() {
    return (
        <>
            <div className="dtsheromaincontainer">
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Approach to AI & ML Services
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Our approach to delivering advanced AI & ML solutions is meticulously structured to meet your business's unique needs. We ensure optimal outcomes through:
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Comprehensive Assessment
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We begin with a thorough evaluation of your AI and ML infrastructure, workflows, and business objectives to identify improvement opportunities aligned with your specific needs.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Custom Solution Design
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Our experts design scalable, efficient, and robust AI & ML solutions tailored to your strategic goals, focusing on streamlined pipelines from data ingestion to model deployment.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Automated Workflows
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We implement automated CI/CD pipelines and data workflows for seamless integration and continuous delivery, reducing manual tasks, accelerating deployment, and maintaining operational consistency.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Monitoring and Optimization
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Continuous real-time monitoring and automated alerts ensure peak model performance and pipeline health, enabling proactive optimization for efficiency and effectiveness.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Governance and Compliance
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Our solutions prioritize robust governance frameworks to uphold industry regulations, ensuring transparency, auditability, and effective risk management.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Collaborative Ecosystem
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We foster a collaborative development environment with advanced tools and promote efficient teamwork, facilitate knowledge sharing, and expedite AI model development and deployment for rapid business impact.
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
