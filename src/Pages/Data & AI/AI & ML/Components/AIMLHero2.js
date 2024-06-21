import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function AIMLHero2() {

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
        {
            logo: 'fa-solid fa-brain',
            title: 'Generative AI',
            desc: 'Create tailored content, designs, and solutions using industry-specific data for enhanced business outcomes',
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
                        <div className='swdevapproachcard' style={{paddingLeft:'0vh',margin:'0vh 0vw'}}>
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
