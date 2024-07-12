import React from 'react'
import img1 from '../../../../Resources/DONE - What We do - Our Services - Experience Design/Image2.png'

export default function Sap1hero2() {
    return (
        <>
            <div className="edheromaincontainer">
                <div className="edherosection1">
                    <div className="edheroheader">
                        Empowering Your Business with SAP S/4 HANA Services
                    </div>
                    <div className="edheroservices">
                        <div className="edheroservice">
                            {/* <i class="fa-solid fa-check"></i> */}
                            <p><span >SAP S/4 HANA Implementation </span><br/><br/> Leveraging proven methodologies like ASAP and SAP Activate, we deliver custom implementations tailored to your specific needs. Our experts ensure seamless integration of vital business functions in real-time, regardless of whether you're implementing on a greenfield, brownfield, or hybrid landscape. Additionally, we personalize user experiences with SAP Fiori, maximizing user adoption and productivity.</p>
                        </div>
                        <div className="edheroservice">
                            {/* <i class="fa-solid fa-check"></i> */}
                            <p><span>SAP S/4 HANA Migration </span><br/><br/>We guide you through a smooth transition from SAP ECC to S/4HANA with minimal disruption. Our approach includes a thorough analysis of your current SAP setup, addressing potential challenges, and recommending the optimal migration strategy (greenfield, brownfield, or hybrid). We handle the entire process, including data migration, customization, integration, and change management, ensuring a successful migration journey.</p>
                        </div>
                        <div className="edheroservice">
                            {/* <i class="fa-solid fa-check"></i> */}
                            <p><span>SAP S/4 HANA Integration </span><br/><br/>Our comprehensive integration services are designed to meet your evolving business needs. We specialize in seamlessly integrating SAP S/4HANA Cloud and various data types, utilizing the latest integration technologies and API-driven approaches. This empowers you to achieve a modern and unified ERP landscape, enhancing your overall integration strategy and driving business value.</p>
                        </div>
                        <div className="edheroservice">
                            {/* <i class="fa-solid fa-check"></i> */}
                            <p><span>SAP S/4 HANA Customization </span><br/><br/>We customize SAP S/4HANA to perfectly align with your unique business requirements. This ensures smooth integration and optimized functionality by tailoring the system to your organizational structures and processes. By maximizing the benefits of SAP S/4HANA Cloud specifically for your business, you unlock its full potential to streamline operations and achieve greater efficiency.</p>
                        </div>
                        <div className="edheroservice">
                            {/* <i class="fa-solid fa-check"></i> */}
                            <p><span>SAP S/4 HANA Application Management Services </span><br /><br/>Our comprehensive application management services ensure the smooth operation, continuous optimization, and proactive support of your SAP S/4HANA environment. We provide end-to-end management of your applications, including monitoring, maintenance, upgrades, and performance optimization, giving you peace of mind and allowing you to focus on your core business activities.</p>
                        </div>
                    </div>
                </div>
                <div className="edherosection2">
                    <img src={img1} alt="" />
                </div>
            </div>

        </>
    )
}
