import React from 'react'
import img1 from '../../../../Resources/DTSCard.jpg'
import img2 from '../../../../Resources/PECard.jpg'
import img3 from '../../../../Resources/EDCard.png'
import img4 from '../../../../Resources/IPPCard.jpg'
import img5 from '../../../../Resources/EPCard.jpg'
import img6 from '../../../../Resources/DACard.png'


export default function CloudNativeCards() {
    const cultureData = [
        {
            img: img1,
            title: 'Reduced Time to Market',
            description: 'Accelerate product rollout and gain a competitive edge with faster development and launch times.Ease of Management: Simplify infrastructure management with serverless platforms and Infrastructure as Code(IaC).'
        },
        {
            img: img2,
            title: 'Cost Efficiency',
            description: 'Reduce IT expenditure by shifting budgets from maintenance to new functionalities'
        },
        {
            img: img3,
            title: 'Reliability and Reduced Downtime',
            description: ' Enhance security and resilience with containerized applications, ensuring quick recovery and minimal service disruption.'
        },
        {
            img: img4,
            title: 'No Vendor Lock-in',
            description: 'Maintain flexibility by avoiding dependency on a single provider.'
        },
        {
            img: img5,
            title: 'Scalability and Flexibility',
            description: 'Adapt to changing demands with real-time performance improvements.'
        },
        {
            img: img6,
            title: 'Improved Customer Experience',
            description: ' Deliver continuous updates and improvements, enhancing customer satisfaction and loyalty.'
        },
    ]

    return (
        <>
            <div className="careerculturemaincontainer">
                <div className="careerculturechildcontainer">
                    <div className="careercultureheader">
                        <p>Benefits of the Cloud-Native <span>Model </span></p>
                    </div>
                    <p style={{color:'white',fontSize:'1.5rem',width:'70vw',textAlign:'center',width:'95%'}}>Let THRIVEX lead your seamless cloud-native transformation, ensuring your applications are modern, scalable, and resilient. Contact us to start your journey today.</p>
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
