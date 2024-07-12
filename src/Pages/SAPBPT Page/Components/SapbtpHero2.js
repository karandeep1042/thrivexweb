import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function SapbtpHero2() {
    return (
        <>
            <div className="edheromaincontainer">
                <div className="edherosection1">
                    <div className="edheroheader">
                        BTP Offerings:
                    </div>
                    <div className="edheroservices">
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>SAP Integration Suite: </span> Leverage the full potential of your technology solutions by integrating them with your enterprise’s digital core. We can help your team take advantage of SAP’s comprehensive integration system on BTP, eliminating siloed technology and integrating your entire tech landscape.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>SAP Build Work Zone: </span>We will enable a customized user experience driven by your organization’s business needs while providing secure and centralized access to SAP and non-SAP systems, data, and processes with SAP Build Work Zone. The result? Users can say goodbye to navigating through multiple systems to complete simple transactions. Whether connecting to on-prem or cloud-based systems, SAP Build Work Zone provides an intuitive experience to internal and external users with access to all enterprise applications in one place. </p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Clean Core and Extensibility in SAP BTP : </span>Keep the SAP innovation rolling along with regular upgrades and robust development tools.  SAP BTP offers a wide range of tools and development environments, allowing you to explore new applications suitable for your business. We will help guide your transformation efforts with custom code analysis for BTP and deliver guidance on the customization level available for your system, along with the remediation steps necessary for a clean core approach to S/4HANA migrations. </p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>SAP Datasphere and SAP Analytics Cloud: </span>Manage your data seamlessly and effortlessly through a centralized, comprehensive repository offering state-of-the-art data flow capabilities. With SAP Datasphere and Analytics Cloud, your organization will easily access data from different parts of the business.
                                Imagine decision-makers across your organization empowered with actionable insights from historical data and project future trends, enabling informed decision-making.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="edherosection2">
                    <img src={img1} alt="" />
                </div>
            </div >
        </>
    )
}
