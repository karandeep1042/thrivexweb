import React from 'react'
import img1 from '../../../Resources/dtsinfo.jpg'

export default function Qlikinfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Qlik Managed Services
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Our Qlik Managed Services are designed to support the operational needs of your Qlik environment, allowing your team to focus on strategic initiatives. We offer flexible, customized service plans to manage and enhance your Qlik data analytics and integration platform.
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <p id='homeinfolistsheader' style={{ fontSize: '2rem', color: '#0eaae3' }}>Key Features of Our Managed Services</p>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Dedicated Service Delivery Manager: </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Oversee delivery of your requirements with a client-specific focus.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Project Management: </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Plan and execute Qlik Cloud Migration and other projects.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Development Services: </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Customize applications, provide development support, and optimize performance.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Training Workshops: </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Offer bespoke workshops for end-users, designers, developers, and technical teams.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Upgrades & Migration Services</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Guide and implement enhancements, plan upgrades, and manage migrations.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Technical & Hosting Services:</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Provide architecture sizing, technical installs, and regular maintenance.
                            </div>
                        </div>
                    </div>
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Start Your Qlik Journey with THRIVEX
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Partner with THRIVEX to leverage Qlik’s powerful analytics capabilities and transform your data into actionable intelligence. Whether you’re just starting with Qlik or looking to optimize and expand your existing setup, our expert team is here to ensure your success every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
