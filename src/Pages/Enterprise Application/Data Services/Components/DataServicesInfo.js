import React from 'react'
import img1 from '../../../../Resources/Data and Analytics/dsinfo.jpg'

export default function DataServicesInfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Approach to Data Engineering
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Is your decision-making powered by data? Is it fostering agility and optimizing operations? If not, it's time to rethink your data management strategy. At THRIVEX, we offer a suite of comprehensive data services, all unified under one roof. Elevate your business outcomes with our offerings in big data analytics, cloud data services, and data engineering.
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Centered on Your Business Needs</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                The true value of data emerges when it's harnessed to tackle business challenges head-on. Our team of big data analytics consulting experts delves deeply into your business objectives, meticulously aligning your data architecture with these needs. The outcome? Data that is reliable, relevant, and impactful, readily accessible to empower your teams.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Empowering Faster, Smarter Decisions</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We oversee the complete lifecycle of your big data, from collection to transformation, turning complex datasets into actionable insights. Armed with timely and powerful insights, you can make decisions grounded in intelligence rather than intuition.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Fostering Innovation</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Through advanced data visualization techniques, we uncover trends and patterns that drive innovation. Predict customer behavior, pivot with confidence, and seize opportunities swiftly—leaving your competitors trailing behind.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
