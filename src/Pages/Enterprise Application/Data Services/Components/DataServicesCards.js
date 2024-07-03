import React from 'react'
import '../../../../css/Enterprise Application/Data Services/CareerCulture.css'
import img1 from '../../../../Resources/Data and Analytics/dscard1.jpg'
import img2 from '../../../../Resources/Data and Analytics/dscard2.jpeg'
import img3 from '../../../../Resources/Data and Analytics/dscard3.jpeg'
import img4 from '../../../../Resources/Data and Analytics/dscard4.jpg'
import img5 from '../../../../Resources/Data and Analytics/dscard5.jpg'

export default function DataServicesCards() {

    const cultureData = [
        {
            img: img1,
            title: 'Customized Data Solutions',
            description: 'In an age where technology thrives, intelligence extends beyond mere innovation—it resides in the insights it unveils. At THRIVEX, we offer a comprehensive suite of customized data solutions meticulously designed to empower businesses to extract profound insights from their data, leading to superior outcomes. Our expansive range of services encompasses big data analytics, cloud data warehousing, data visualization, and data management, seamlessly integrated to offer a holistic approach to data utilization. With THRIVEX, navigating through extensive and intricate datasets becomes a streamlined process, enabling you to glean actionable insights and enhance both operational efficiency and decision-making prowess. Our solutions facilitate real-time access, analysis, and visualization of data from diverse sources, empowering you to make informed, data-driven decisions with unparalleled ease and confidence.'
        },
        {
            img: img2,
            title: 'Empower Your Data Journey',
            description: 'Transform your data into actionable business solutions through our robust suite of data management services. From big data analytics to data engineering and cloud data services, THRIVEX provides tailored solutions to address your unique business needs.'
        },
        {
            img: img3,
            title: 'Big Data Analytics',
            description: 'Bid farewell to the challenges of raw data. Benefit from our data analytics consulting services to structure your data architecture aligned with your business objectives, yielding understandable, actionable insights. We employ industry-leading practices to oversee the entire lifecycle of your big data, from collection to processing, enabling you to transform vast and complex datasets into valuable information. With our big data analytics services, your teams can anticipate and respond to evolving customer behaviours while optimizing processes to maximize efficiency.'
        },
        {
            img: img4,
            title: 'Data Engineering',
            description: 'Struggling to extract value from your raw data? Our expert data engineers can assist in managing your data and crafting bespoke data management solutions tailored to your business objectives. By aligning your architecture with your specific needs, we ensure your data is organized, relevant, and reliable, empowering you to tackle business challenges with confidence.'
        },
        {
            img: img5,
            title: 'Cloud Data Services',
            description: 'Embark on the journey of modernization with our cloud data services. Whether you seek to migrate data from legacy systems or integrate modern frameworks, THRIVEX offers in-house performance boosters to streamline data management and maintenance. Benefit from our expertise in data migration frameworks and governance tools, ensuring a seamless transition to a modern data platform while minimizing disruption.'
        },
    ]

    return (
        <>
            <div className="careerculturemaincontainer">
                <div className="careerculturechildcontainer">
                    <div className="careercultureheader">
                        <p>Data <span>Services </span> we provide</p>
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