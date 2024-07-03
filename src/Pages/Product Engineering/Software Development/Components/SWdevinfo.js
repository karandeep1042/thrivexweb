import React from 'react'
import img1 from '../../../../Resources/Product Engineering/SWdevinfo.png'
import '../../../../css/SW dev/SWdevinfo.css'

export default function SWdevinfo() {

    const cardinfo = [
        {
            logo: 'fa-solid fa-crosshairs',
            title: 'Business Focused',
            desc: 'Our approach begins with a thorough understanding of your business goals and requirements, ensuring that every aspect of the software development aligns with your strategic objectives.',
        },
        {
            logo: 'fa-solid fa-rotate',
            title: 'Leading Practices',
            desc: 'We implement industry-leading development practices and technologies to create experiences and solutions that exceed expectations every time.',
        },
        {
            logo: 'fa-solid fa-lightbulb',
            title: 'Drives Innovation',
            desc: 'We implement industry-leading development practices and technologies to create experiences and solutions that exceed expectations every time.',
        },
        {
            logo: 'fa-solid fa-gem',
            title: 'Value Creation',
            desc: 'At the core of our approach is a focus on quality, enabling us to drive efficiencies and reduce costs through our rigorous project monitoring services.',
        },
    ]

    return (
        <>
            <div className="homeinfomaincontainer" style={{ flexWrap: 'wrap' }}>

                <div className="homeinfosection1" style={{width:'100%'}}>
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Approach to Software Development
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Our software development approach is meticulously designed to drive business success, foster innovation, and create tangible value for our clients. With a focus on delivering world-class solutions, our process is tailored to meet the unique needs of each project, ensuring optimal outcomes and maximum impact. <br /><br />
                            Utilizing technical leadership and expertise, we evaluate your existing environment and construct robust architecture frameworks and reference architectures. These frameworks empower your business to innovate and prosper. Our team of developers, software engineers, and architects will help you realize your vision
                        </p>
                    </div>
                </div>
                <div className="swdevapproachmaincontainer">
                    {cardinfo.map((item, index) => (
                        <div className='swdevapproachcard'>
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
