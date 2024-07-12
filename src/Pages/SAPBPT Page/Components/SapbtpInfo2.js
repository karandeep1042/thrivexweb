import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function SapbtpInfo2() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Benefits of Our BTP Services
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Flexibility and Independence</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                SAP BTP provides the agility and autonomy that companies need to migrate resources to the cloud, integrate their IT landscape, and configure and extend SAP and third-party applications. We provide individualized services and skills to make the transition to the cloud a seamless experience with minimum disruption.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Support for a Multi-Cloud Approach</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                SAP BTP supports a multi-cloud approach; thus, businesses can use cloud providers to get the advantages of different clouds and at the same time avoid vendor lock-in. We assist companies in selecting the best-fit cloud service provider(s) for their specific needs, which in turn, help them to build a flexible and cost-effective cloud strategy.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Faster Time to Value</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                The SAP BTP takes care of fully managed PaaS (Platform-as-a-Service) offerings that enable quicker time to value and help organizations achieve their innovation goals faster. As an SAP BTP expert, we are a one-stop solution that covers all the steps from planning to realization, and thus, enterprises can expect to get the most out of SAP BTP and reach their business objectives quickly.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Modern SAP CX-Integrated Interfaces</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                SAP Business Technology Platform (SAP BTP) revolutionizes user interfaces with Fiori enhancements and development that provide modern and highly customizable interfaces for all applications. This transformation leads to a heightened user experience, supporting employees with intuitive interfaces that streamline their work processes.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Enhanced Analytics Capabilities </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                SAP BTP empowers organizations with a centralized platform for data management and analytics. By leveraging SAP Analytics Cloud and SAP Data Warehouse Cloud, businesses can gain a holistic view of their data, identify trends and patterns, and make data-driven decisions with confidence. This improved decision-making capability leads to increased efficiency, cost optimization, and a competitive advantage.
                            </div>
                        </div>
                    </div>
                    {/* <div className="homeinfodescription" >
                        Benefits of Our BTP Services
                    </div> */}
                </div>
            </div>
        </>
    )
}
