import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function AIMLHero2() {

    const cardinfo = [
        {
            logo: 'fa-solid fa-crosshairs',
            title: 'Foundational Machine Learning',
            desc: 'Utilize foundational ML algorithms for pricing optimization, consumer segmentation, analysis & prediction, and inventory forecasting',
        },
        {
            logo: 'fa-solid fa-rotate',
            title: 'MLOps',
            desc: 'Streamline deployment of ML models with automated CI/CD pipelines, real-time monitoring, scalability solutions, and governance frameworks',
        },
        {
            logo: 'fa-solid fa-lightbulb',
            title: 'Advanced AI',
            desc: 'Harness deep learning for OCR, NLP, computer vision, text summarization, chatbots, and real-time inferencing',
        },
        {
            logo: 'fa-solid fa-gem',
            title: 'AI Industrialization',
            desc: 'Automate processes and optimize operations with feature engineering, cognitive automation, model management, cataloging, and monitoring.',
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
                        Revolutionize with AI: Experience Our Advanced AI & ML Solutions
                    </div>
                    {cardinfo.map((item, index) => (
                        <div className='swdevapproachcard' style={{ paddingLeft: '0vh', margin: '0vh 0vw' }}>
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
