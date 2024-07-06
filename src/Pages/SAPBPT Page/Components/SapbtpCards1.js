import React from 'react'
import '../../../css/SAP BTP/SapbtpCards1.css';

export default function SapbtpCards1() {

    const cardsinfo = [
        {
            title: 'Business Environment Challenges',
            options: ['Globalization and cost pressures', 'Navigating digital transformation', 'Building resilient enterprises']
        },
        {
            title: 'Key Challenges',
            options: ['Managing hybrid IT environments', 'Expanding application landscapes', 'Varying cloud adoption speeds', 'Accelerating integration and innovation projects', 'Shortage of IT expertise']
        },
        {
            title: 'Our Goals',
            options: ['Simplify your ERP System and keep the core clean', 'Optimize processes using best practices', 'Enhance flexibility and agility in process redesign', 'Integrate innovations dynamically', 'Connect solutions and partners in hybrid landscapes', 'Automate business processes for efficiency']
        },
    ]

    return (
        <>
            <div className='sapbtpcards1maincontainer'>
                <div className='sapbtpcardsheader'>
                    Digital Differentiation with SAP BTP Factory by THRIVEX
                </div>
                <div className='sapbtpcardsdescription'>
                    Our SAP BTP Factory provides comprehensive consulting services to help you achieve digital differentiation with the SAP Business Technology Platform.
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
                                <ul>
                                    {option.options.map((item, index) => (
                                        <li>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='sapbtpcardsheader'>
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
                </div>
            </div>
        </>
    )
}
