import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function IntegrationInfo() {

    const cardinfo = [
        {
            logo: 'fa-solid fa-crosshairs',
            title: 'API-Led Integration',
            desc: 'Our end-to-end API solutions synchronize data, enhance productivity, and drive revenue. Whether using off-the-shelf tools or custom frameworks, we tailor solutions to meet your unique business requirements. An API-led integration strategy connects diverse technologies through standardized, reusable API services, enhancing automation, security, and operational efficiency while reducing technology costs and improving partner interactions.',
        },
        {
            logo: 'fa-solid fa-rotate',
            title: 'Data Integration',
            desc: 'Achieve platform independence with effective data integration, seamlessly consolidating diverse data sources to support better decision-making. This unified approach drives business growth by leveraging comprehensive insights, enhancing agility to adapt to evolving needs, and fostering innovation through advanced technologies.',
        },
        {
            logo: 'fa-solid fa-lightbulb',
            title: 'Enterprise App Integration',
            desc: 'Implement real-time, message-based integration between applications to streamline IT landscapes, automate processes, and minimize redundancies. This enhances operational efficiency and simplifies management, ensuring smoother business operations.',
        },
        {
            logo: 'fa-solid fa-gem',
            title: 'SaaS Platform Integration',
            desc: 'Integrate cloud applications with on-premises systems to ensure robust data governance while providing enhanced access, flexibility, and scalability. This integration empowers businesses to harness cloud advantages while maintaining control over critical data and adapting swiftly to changing business requirements.',
        },
    ]

    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Unlocking AI Capabilities: Explore Our Advanced AI & ML Services
                    </div>
                    {cardinfo.map((item, index) => (
                        <div className='swdevapproachcard' style={{ paddingLeft: '0vh', margin: '0vh 0vw' , width:'100%' }}>
                            <div className='swdevcardsec1'>
                                <i className={item.logo}></i>
                            </div>
                            <div className='swdevcardsec2'>
                                <label>{item.title}</label>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
