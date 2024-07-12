import React from 'react'
import '../../../css/SAP BTP/SapbtpCards1.css';

export default function SapbtpCards1() {

    const cardsinfo = [
        {
            title: 'Database & Data Management',
            desc1: 'Everything you need to flexibly and efficiently store, access, process, integrate, and interpret all relevant data in your landscape through a singular view and at the speed your business demands.',
            desc2: "SAP HANA, SAP HANA Cloud, SAP Data Warehouse Cloud"
        },
        {
            title: 'Analytics',
            desc1: "Plan and forecast, make rapid decisions, and truly become insight driven. Quickly bring data together from internal and external sources to enable identification of anomalies and key performance drivers.",
            desc2: "SAP Analytics Cloud, SAP Data Warehouse Cloud, SAP BW/4HANA, and others"
        },
        {
            title: 'Application Development & Integration',
            desc1: "Tools for agile business process innovation, extension, and integration in the cloud and across hybrid scenarios. Integrate systems, extend current applications, or create new point solutions.",
            desc2: "SAP Extension Suite, SAP Integration Suite"
        },
        {
            title: 'Intelligent Technologies',
            desc1: "AI, machine learning, and IoT are getting embedded into everything, enabling automation of complex business processes and integration of disparate solutions",
            desc2: "SAP Intelligent Robotic Process Automation (SAP Intelligent RPA), SAP Business AI Services"
        },
    ]

    return (
        <>
            <div className='sapbtpcards1maincontainer'>
                <div className='sapbtpcardsheader'>
                More Than a Platform-As-A-Service
                </div>
                <div className='sapbtpcards'>
                    {cardsinfo.map((option, index) => (
                        <div className='sapbtpcard'>
                            <div className='sapbtpheadersection'>
                                <div className='sapbtpheadersectionin'>
                                    {option.title}
                                </div>
                            </div>
                            <div className='sapdescription'>
                                <div className="sapdescription1">
                                    {option.desc1}
                                </div>
                                <div className="sapdescription2">
                                    <b>Products include: </b>
                                    {option.desc2}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className='sapbtpcardsheader'>
                    Business-Centric Focus
                </div>
                <div className='sapbtpcardsdescription'>
                    SAP BTP stands out with its business-oriented approach. It offers a comprehensive range of pre-packaged services and content tailored to specific requirements, such as country-specific tax calculations and electronic invoicing. With extensive business APIs, industry-specific content, pre-configured workflows, and robotic process automation (RPA) bots, SAP BTP facilitates rapid innovation and the development of new solutions. <br /><br />
                    The platform supports multiple hyperscalers, including AWS, Microsoft Azure, Alibaba Cloud, and Google Cloud Platform, allowing you to choose your preferred infrastructure. Additionally, it ensures interoperability with various PaaS vendors and the open-source community.<br />
                </div>
                <div className='sapbtpcardsheader'>
                    Quick Start and Flexible Payment Models
                </div>
                <div className='sapbtpcardsdescription'>
                    The RISE with SAP S/4HANA transformation package includes credits for SAP BTP, enabling a quick start. SAP offers flexible payment models: a monthly subscription for specific services, pre-purchased cloud credits for use through the Cloud Platform Enterprise Agreement (CPEA), or a pay-as-you-go model based on consumption. These models can be combined within a global account to suit your needs.
                </div> */}
            </div>
        </>
    )
}
