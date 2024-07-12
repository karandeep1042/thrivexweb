import React from 'react'
import img1 from '../../../../Resources/DONE - What We do - Our Services - Experience Design/Image2.png'

export default function Sap1info2() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Maximize Business Benefits with SAP S/4HANA
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Real-time Decision Making</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Gain a single view of your entire business with up-to-the-second data, enabling instant reactions to market changes and data-driven decisions to optimize performance.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Enhanced Customer Experience</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Respond to customer needs in real-time with access to complete customer data, allowing for personalized interactions and improved customer satisfaction.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Streamlined Operations</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Automate workflows and integrate processes across your entire value chain, reducing complexity, eliminating bottlenecks, and boosting overall productivity.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Reduced Costs</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Minimize hardware and software expenses with efficient data management and eliminate the need for complex middleware, reducing IT infrastructure costs.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Future-Proof Innovation</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Built on the powerful HANA in-memory database, SAP S/4HANA scales and adapts as your business grows, ensuring a platform that supports your evolving needs and future innovations.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
