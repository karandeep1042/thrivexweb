import React from 'react'
import img1 from '../../../Resources/DTSCard.jpg'
import img2 from '../../../Resources/PECard.jpg'
import img3 from '../../../Resources/EDCard.png'
import img4 from '../../../Resources/IPPCard.jpg'
import img5 from '../../../Resources/EPCard.jpg'
import img6 from '../../../Resources/DACard.png'

export default function QlikCards() {
    const cultureData = [
        {
            img: img1,
            title: 'Dashboard and Report Development',
            description: 'We specialize in creating and optimizing dashboards and reports that provide insightful, actionable intelligence. Our services include report tuning and troubleshooting, consolidation, and distribution across various devices, ensuring mobile compatibility and seamless user experiences.'
        },
        {
            img: img2,
            title: 'Qlik Playbook',
            description: 'Receive a customized best practice guide that covers workspace administration, data integration, UI design, and project methodology. This playbook ensures your environment is configured for long-term success.'
        },
        {
            img: img3,
            title: 'Migration Services',
            description: 'Transition smoothly from legacy BI platforms to Qlik with minimal disruption. Our custom migration plans focus on retaining essential content while optimizing performance.'
        },
        {
            img: img4,
            title: 'Health Check',
            description: 'Evaluate and enhance your Qlik environment with detailed recommendations for improving performance, scalability, and user adoption. Our health checks cover architecture, tool usage, and feature utilization.'
        },
        {
            img: img4,
            title: 'Training and Mentoring',
            description: 'Equip your team with the knowledge needed to succeed with Qlik through classroom training, eLearning, mentoring, webinars, seminars, and user adoption plans.'
        },
        {
            img: img4,
            title: 'SaaS Deployment',
            description: 'Maximize the benefits of Qlik Sense SaaS with our expert deployment services. We establish your tenant, identify data flow, and set up best practices for a successful platform launch.'
        },
        {
            img: img4,
            title: 'Data Integration',
            description: 'Strengthen your analytics infrastructure with our data integration services. Leverage Qlik’s leading CDC data integration platform to enhance your data journey.'
        },
    ]

    return (
        <>
            <div className="careerculturemaincontainer">
                <div className="careerculturechildcontainer">
                    <div className="careercultureheader">
                        <p>Our Comprehensive Qlik <span>Consulting Services</span></p>
                    </div>
                    <p style={{ color: 'white', fontSize: '1.5rem', width: '70vw', textAlign: 'center', width: '95%' }}>Let THRIVEX lead your seamless cloud-native transformation, ensuring your applications are modern, scalable, and resilient. Contact us to start your journey today.</p>
                    <div className="careerculturecards">
                        {cultureData.map((item, index) => (
                            <div className="careerculturecard" style={{ margin: '2vh 1vw' }}>
                                <div className="careerculturecardimg">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="careerculturecardinfo">
                                    <div className="careeerculturecardtitle">
                                        {item.title}
                                    </div>
                                    <div className="careeerculturecarddescription">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
