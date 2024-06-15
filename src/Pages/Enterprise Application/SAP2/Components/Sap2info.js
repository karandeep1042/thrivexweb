import React from 'react'
import img1 from '../../../../Resources/SAP/SAP2info.jpg'

export default function Sap2info() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Presenting THRIVEX's Approach to SAP Services:
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            {/* With the right business intelligence tools, THRIVEX empowers you to delve deep into consumer behaviour, driving profitability, sustainability, and transformative change throughout your organization. THRIVEX collaborates closely with you to implement intelligence solutions that revolutionize your business operations, both internally and externally. This translates into enhanced agility and decision-making through actionable business insights that not only inform present strategies but also propel your business towards future success. */}
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Business Technology Platform</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                SAP's Business Technology Platform (BTP) is an innovative, cloud-based platform for developing and managing enterprise applications. It allows for custom application development, system integration, data analytics, and Al use, enabling more informed decision-making and rapid development across business processes.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Data and Analytics</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                SAP's Data and Analytics tools allow organizations to manage and extract insights from their data. They offer a comprehensive view of data, reveal trends, and aid in strategic decision-making. Solutions like SAP Datasphere and Master Data Governance enhance data management, facilitating efficient identification, analysis, and distribution of key enterprise data.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Enterprise App Development</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                SAP App Development provides tools and technologies-for-custom- enterprise applications, addressing specific organizational needs. With platforms like SAP Cloud, SAP Fiori, SAPUI5, and ABAP, developers can create solutions enhancing business processes and user experience. SAP Integration Suite enables seamless interaction between applications and systems, facilitating autonomous operation of services.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Integration</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                SAP Integration connects SAP and non-SAP systems across an organization, ensuring efficient communication and seamless data flow. This is crucial for enterprises using diverse applications, as it enhances operational efficiency and effective resource planning, reducing errors and data duplication.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
