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
            link: '/softwaredevelopment'
        },
        {
            logo: img2,
            title: 'Insights & Analytics',
            link: '/modernization'
        },
        {
            logo: img3,
            title: 'Data Science & AI',
            link: '/cloudnative'
        },
    ]

    return (
        <>
            <div className='allengsermaincontainer'>
                <div className='allengsercardsheader'>
                    Powering Your Success: Our Core Capabilities
                </div>
                <div className='allengsercards' style={{justifyContent:'space-around'}} >
                    {cardinfo.map((item, index) => (
                        <Link to={item.link} className='allengsercard'>
                            <div className='allengsercardimg'>
                                <img src={item.logo} />
                            </div>
                            <div className='allengsercardheading'>
                                {item.title}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
