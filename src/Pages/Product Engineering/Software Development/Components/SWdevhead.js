import React from 'react'
import img1 from '../../../../Resources/Product Engineering/swhead.jpg'
import '../../../../css/SW dev/SWdevhead.css'
import img5 from '../../../../Resources/Product Engineering/SWdevhero.jpg'
import img2 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'
import img3 from '../../../../Resources/Product Engineering/cloudnativehero.webp'
import img4 from '../../../../Resources/Product Engineering/integrationhero.jpg'
import { Link } from 'react-router-dom'

export default function SWdevhead() {

    const devprac = ['Microservices',
        'API-first Architecture',
        'Mobile-first & Responsive Design',
        'Automated Testing with CI/CD',
        'Enterprise Security'
    ]

    const trendtech = ['Agular.JS',
        'React.JS',
        'Node.JS',
        'Java',
        'Python',
        'TypeScript',
        'JavaScript',
        'Clojure',
        'NoSQL',
        'Cloud Services'
    ]

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
            <div className='swdevheadmaincontainer'>
                <div className='swdevheadlist'>
                    <div className='swdevlistheader'>
                        Trending Technologies
                    </div>
                    <ul>
                        {trendtech.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='swdevheadlist'>
                    <div className='swdevlistheader'>
                        Top Development Practices
                    </div>
                    <ul>
                        {devprac.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='allengsermaincontainer'>
                <div className='allengsercardsheader'>
                    All Engineering Services
                </div>
                <div className='allengsercards'>
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
