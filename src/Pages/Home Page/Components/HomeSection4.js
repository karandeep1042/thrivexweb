import React from 'react'
import '../../../css/Home Page/HomeSection4.css'

export default function HomeSection4() {

    const homesection4cards = [
        {
            logo: 'fa-solid fa-puzzle-piece',
            header: 'Co-Create. Wow Customers',
            description: 'We go beyond standard client experiences. Our tech and industry experts partner with you to co-create and co-develop superior customer journeys that leave a lasting impression.'
        },
        {
            logo: 'fa-solid fa-hand-holding-dollar',
            header: 'Future-Proof Your Success',
            description: 'We leverage cutting-edge data, AI, and cloud technologies to deliver future-proof transformations. You get measurable results that drive growth, efficiency, and exceptional customer experiences.'
        },
        {
            logo: 'fa-solid fa-handshake',
            header: 'Collaborative Partnerships.',
            description: 'We have cultivated a network of leading technology partners, industry leaders, and market experts. Together, we deliver the best possible outcomes for your business.'
        },
        {
            logo: 'fa-solid fa-person-running',
            header: 'Focused on Agility and Speed.',
            description: "We understand the need for agility in today's market. Our streamlined processes and efficient execution help you achieve your goals faster."
        },
    ]

    return (
        <>
            <div className="homepagesection4maincontainer">
                <div className="homepagesection4childcontainer">
                    <div className="homepagesection4mainheader">
                        <p>Don't Just Transform, <span>Thrive </span>: What Makes Us Different</p>
                    </div>
                    <div className="homepagesection4cards">
                        {homesection4cards.map((item, index) => (
                            <div className="homepagesection4cardmaincontainer">
                                <div className="homepagesection4card">
                                    <div className="homepagesection4cardlogo">
                                        <i className={item.logo}></i>
                                    </div>
                                    <div className="homepagesection4cardheader">
                                        <p>{item.header}</p>
                                    </div>
                                    <div className="homepagesection4carddesc">
                                        <p>{item.description}</p>
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
