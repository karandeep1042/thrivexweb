import React from 'react'
import img5 from '../../../../Resources/Product Engineering/SWdevhero.jpg'
import img2 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'
import img3 from '../../../../Resources/Product Engineering/cloudnativehero.webp'
import img4 from '../../../../Resources/Product Engineering/integrationhero.jpg'
import { Link } from 'react-router-dom'

export default function AllEngineeringServices(props) {

    const cardinfo = [
        {
            logo: img5,
            title: 'Software Development',
            link: '/softwaredevelopment'
        },
        {
            logo: img2,
            title: 'Modernization',
            link: '/modernization'
        },
        {
            logo: img3,
            title: 'Cloud Native Apps',
            link: '/cloudnative'
        },
        {
            logo: img4,
            title: 'Integration',
            link: '/integration'
        },
    ]

    return (
        <>
            <div className='allengsermaincontainer'>
                <div className='allengsercardsheader'>
                    All Engineering Services
                </div>
                <div className='allengsercards'>

                    {cardinfo.map((item, index) => (
                        item.title!=props.name?
                        <Link to={item.link} className='allengsercard'>
                            <div className='allengsercardimg'>
                                <img src={item.logo} />
                            </div>
                            <div className='allengsercardheading'>
                                {item.title}
                            </div>
                        </Link>
                        :null
                    ))}
                </div>
            </div>

        </>
    )
}
