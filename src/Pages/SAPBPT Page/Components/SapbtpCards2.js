import React from 'react'
import img1 from '../../../Resources/SAP/sapappointmentcard.jpg'
import { Link } from 'react-router-dom'

export default function SapbtpCards2() {

    const cardsinfo = [
        {
            title: 'Integration',
            options: ['Integration Solution Advisory Methodology (ISA-M)', 'Cloud Integration', 'One Domain Model', 'API Driven Integration', 'Event Mesh', 'Open Connectors']
        },
        {
            title: 'Application Development',
            options: ['SAP Application Extension Methodology', 'SAP Buisness Application Studio', 'Process Automation', 'Mobile Apps', 'CAP (Cloud Application Programming)', 'RAP (Restful Application Programming)', 'FIORI', 'SAP Build']
        },
        {
            title: 'Artificial Intelligence',
            options: ['Robotic Process Automation', 'Conversational AI', 'Personalized Recommendations', 'Machine Learning']
        },
        {
            title: 'Analytics',
            options: ['Analytics Cloud', 'Data Warehouse Cloud', 'Data Intelligence', 'Data Governance']
        },
    ]

    return (
        <>
            <div className='sapbtpcards1maincontainer'>

                <div className='sapbtpcards' style={{ marginTop: '4vh ' }}>
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
                    Expertise of THRIVEX SAP BTP Team
                </div>
                <div className='sapbtpcardsdescription sapbtpcards2description'>
                    THRIVEX provides expert guidance and support for all aspects of SAP BTP. Our consultants and developers possess deep expertise across the platform’s application areas. <br /><br />
                    Our team offers:<br />
                    <ul>
                        <li>
                            Strategy and concept development for integration and development projects<br />
                        </li>
                        <li>
                            Custom system architecture implementation<br />
                        </li>
                        <li>
                            Application extensions using ABAP RESTful Application Programming Model (RAP) and SAP Cloud Application Programming Model (CAP) on Cloud Foundry and Kyma <br />
                        </li>
                        <li>
                            SAP Application Management Services (SAP AMS) for BTP-based systems <br />
                        </li>
                        <li>
                            Comprehensive analytics consulting from strategy to operation, including reporting, planning, and data warehousing with SAP BW on HANA, SAP BW/4HANA, SAP Analytics Cloud, and SAP Data Warehouse Cloud<br />
                        </li>
                    </ul>
                </div>
                {/* <div className='sapbtpappointmentrequestcard'>
                    <div className='sapbtpappointmentrequestcardsec1'>
                        <img src={img1} />
                    </div>
                    <div className='sapbtpappointmentrequestcardsec2'>
                        <div className='sapbtpappointmentrequestcardinfo'>
                            <div className='sapbtpappointmentrequestcardheader'>Utilize SAP BTP Sensibly</div>
                            <div className='sapbtpappointmentrequestcarddescription'>Would you like to leverage the SAP Business Technology Platform for your digitization tasks? Schedule a free, no-obligation consultation with us.</div>
                        </div>
                        <Link to='/sapbptappointment' className='sapbtpappointmentrequestcardbtn'><i className="fa-solid fa-arrow-right"></i>Request an appointment</Link>
                    </div>
                </div> */}
            </div>
        </>
    )
}
