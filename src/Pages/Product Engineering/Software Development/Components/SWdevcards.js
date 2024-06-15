import React from 'react'
import img1 from '../../../../Resources/Product Engineering/swdevcard1.jpeg'
import img2 from '../../../../Resources/Product Engineering/swdevcard2.webp'
import img3 from '../../../../Resources/Product Engineering/swdevcard3.jpg'
import img4 from '../../../../Resources/Product Engineering/swdevcard4.jpeg'
import img5 from '../../../../Resources/Product Engineering/swdevcard5.jpg'
import img6 from '../../../../Resources/Product Engineering/swdevcard6.webp'
import img7 from '../../../../Resources/Product Engineering/swdevcard7.jpeg'

export default function SWdevcards() {
    const cultureData = [
        {
            img: img1,
            title: 'Architecture Design',
            description: 'From concept to execution, we offer end-to-end solutions tailored to your needs. Our architects collaborate closely with you to design, build, and maintain functional technology solutions. Serving as the bridge between your business and technology stakeholders, we translate business requirements into robust technical architecture. This ensures that your solutions not only disrupt the market but also continually drive business value.'
        },
        {
            img: img2,
            title: 'AI-Assisted Development',
            description: 'In a landscape of ever-changing customer behaviour, agility and accuracy are paramount. Our proficient software application development experts utilize AI-assisted development to expedite your time to market without compromising quality. Achieve your business objectives while saving valuable time and resources.'
        },
        {
            img: img3,
            title: 'Application Development',
            description: 'Software application development is at the core of our expertise. You can bring us your vision, and we will devise the best strategy to bring it to life. Working as your close partner, we function as an extension of your team, staying abreast of your business needs and software product backlogs.'
        },
        {
            img: img4,
            title: 'Low-Code Platforms',
            description: 'Unlock productivity, and innovation in your business by harnessing the power of low-code platforms and app-building software. Enhance your organizations agility and streamline development processes with speed and flexibility. As your software development partner, we will assist you in constructing feature-rich, user-friendly applications faster and reduce maintenance efforts.'
        },
        {
            img: img5,
            title: 'Progressive Apps',
            description: 'We help clients in developing progressive web apps that prioritize fast and reliable user experiences across various networks and devices. Leveraging modern APIs, we ensure your web applications are consistently dependable and capable, regardless of usage environment.'
        },
        {
            img: img6,
            title: 'Continuous Integration and Delivery',
            description: 'Experience custom software development solutions that consistently meet your business requirements through our agile methodology. Our scrum development teams continuously build, package, and test applications, guaranteeing optimal user experiences with every deployment.'
        },
        {
            img: img7,
            title: 'Rapid Prototyping and Innovation',
            description: 'Stay ahead of the competition by seizing opportunities promptly. Our team of software application development experts utilizes rapid prototyping to efficiently bring concepts from idea to implementation. Through iterative development and rigorous testing, we empower you to confidently and efficiently deploy new products.'
        },
    ]

    return (
        <>
            <div className="careerculturemaincontainer">
                <div className="careerculturechildcontainer">
                    <div className="careercultureheader">
                        <p>Software Development <span>Services </span></p>
                    </div>
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
