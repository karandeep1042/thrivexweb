import React from 'react'
import img1 from '../../../../Resources/Data and Analytics/bicard1.jpg'
import img2 from '../../../../Resources/Data and Analytics/bicard2.jpg'
import img3 from '../../../../Resources/Data and Analytics/bicard3.jpg'
import img4 from '../../../../Resources/Data and Analytics/bicard4.jpg'
import img5 from '../../../../Resources/Data and Analytics/bicard5.jpeg'
import img6 from '../../../../Resources/Data and Analytics/bicard6.jpeg'


export default function BuisnessIntelligenceCards() {
    const cultureData = [
        {
            img: img1,
            title: 'Data Storytelling',
            description: 'Business agility is key to success. With modern tools and exponentially growing data, distilling insights relevant to your business is achievable. Crafting compelling narratives allows you to interpret complex data swiftly, accelerating the journey from insight to value. As your trusted BI consultants, THRIVEX collaborates with you to unveil business stories that are relevant, simple, and accessible, reducing the time to insight.'
        },
        {
            img: img2,
            title: 'Data Visualization',
            description: 'Transforming vast data ecosystems into actionable insights poses a significant challenge. Leveraging our expertise in product development and top-tier UX capabilities, our BI consultants assist you in creating intelligent and impactful data visualizations. Enhance your ability to identify relationships and patterns, understand behaviours, and effectively communicate these insights to broader audiences.'
        },
        {
            img: img3,
            title: 'Operational Reporting',
            description: 'In today’s fast-paced world, swift responses to change are imperative. Embedding real-time reporting seamlessly into your business processes provides enhanced visibility and agility. By integrating BI solutions, you can optimize supply chain management, boost productivity, and elevate customer satisfaction levels.'
        },
        {
            img: img4,
            title: 'What-If Analysis and Planning',
            description: 'Data offers invaluable insights into daily operations and future possibilities. Through ‘what-if’ analysis, THRIVEX helps you anticipate and plan for future scenarios, enabling proactive decision-making and better preparedness for upcoming challenges.'
        },
        {
            img: img5,
            title: 'Tools & Technology Recommendations',
            description: 'Navigating the vast array of technological options can be daunting. Our BI consultants collaborate closely with you to understand your unique business needs and recommend tailored solutions. With our in-depth knowledge of various tools and technologies, we ensure optimal tech adoption aligned with your strategic objectives.'
        },
        {
            img: img6,
            title: 'Self-Service Enablement',
            description: 'While self-service capabilities are prevalent in the BI market, their successful implementation hinges on data literacy and culture. At THRIVEX, we transcend traditional governance and security protocols by fostering a self-serve culture tailored to your business needs. Through collaboration and targeted training, we empower your workforce to harness data independently, ensuring long-term effectiveness.'
        },
    ]

    return (
        <>
            <div className="careerculturemaincontainer">
                <div className="careerculturechildcontainer">
                    <div className="careercultureheader">
                        <p>Our BI Consulting <span>Services </span></p>
                    </div>
                    <div className="careerculturecards">
                        {cultureData.map((item, index) => (
                            <div className="careerculturecard">
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
