import React from 'react'
import img5 from '../../../../Resources/Product Engineering/SWdevhero.jpg'
import img2 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'
import img3 from '../../../../Resources/Product Engineering/cloudnativehero.webp'
import img4 from '../../../../Resources/Product Engineering/integrationhero.jpg'
import { Link } from 'react-router-dom'

export default function DataAICards() {

    const cardinfo = [
        {
            logo: img5,
            title: 'Data Engineering',
            link: '/dataengineering',
            info: 'Optimize data infrastructure, build robust pipelines, and ensure data integrity and security. Empower your business with reliable, actionable insights for informed decision-making and sustainable growth'
        },
        {
            logo: img2,
            title: 'Insights & Analytics',
            link: '/insightsanalytics',
            info: 'Unlock the value of data by delivering impactful insights tailored to your business needs. Enhance customer experiences and empower every facet of your business operations'
        },
        {
            logo: img3,
            title: 'Data Science & AI',
            link: '/aiml',
            info: 'Unleash the power of data science and AI to uncover fresh opportunities, solve complex customer challenges, and unlock significant value. Utilize our expertise in data-driven technologies to deliver solutions that drive business growth.'
        },
    ]

    return (
        <>
            <div className='allengsermaincontainer'>
                <div className='allengsercardsheader'>
                    Powering Your Success: Our Core Capabilities
                </div>
                <div className='allengsercards' >
                    {cardinfo.map((item, index) => (
                        <div className='dataaicard'>
                            <div className="dataaicardimage">
                                <img src={item.logo} alt="" />
                            </div>
                            <div className="dataaicardinfo">
                                <label>{item.title}</label>
                                <p>{item.info}</p>
                            </div>
                            <div className="dataaiexplorebtn">
                                <div className="dataaibtncontainer">
                                    Explore<i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
