import React from 'react'
import img1 from '../../../../Resources/Product Engineering/modcard1.jpg'
import img2 from '../../../../Resources/Product Engineering/modcard2.jpg'
import img3 from '../../../../Resources/Product Engineering/modcrad3.png'
import img4 from '../../../../Resources/Product Engineering/modcard4.jpg'

export default function Modernizationcards() {
    const cultureData = [
        {
            img: img1,
            title: 'Business Architecture',
            description: 'Future-proof your operations and sharpen your competitive edge with our business architecture services.'
        },
        {
            img: img2,
            title: 'Technology Roadmap',
            description: 'Prevent your transformation projects from exceeding time or budget constraints. We ensure that your strategy aligns seamlessly with your vision and goals.'
        },
        {
            img: img3,
            title: 'Economic Platforms',
            description: 'Develop and construct high-performing, scalable platforms that revolutionize workflows, enhance capabilities, and deliver superior experiences to your customers.'
        },
        {
            img: img4,
            title: 'Cost Optimization',
            description: 'Maximize ROI by optimizing costs during the transition of legacy applications into modernized systems.'
        },
    ]

    return (
        <>
            <div className="careerculturemaincontainer">
                <div className="careerculturechildcontainer">
                    <div className="careercultureheader">
                        <p>Modernization <span>Services </span></p>
                    </div>
                    <div className="careerculturecards">
                        {cultureData.map((item, index) => (
                            <div className="careerculturecard" style={{ margin: '2vh .5vw' }}>
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
